<?php 
class User {
	
	//http://php.net/manual/en/language.oop5.visibility.php
	private $connection;

	// käivitatakse kohe alguses 
	function __construct($mysqli){
		$this->connection = $mysqli;
		//print_r($this->connection);
	}
	
	function addUser($username, $email, $password){
		
		//echo $name, $phone, $email, $password;
		
		// kontrollime, et kellegil ei oleks seda emaili või numbrit
		$stmt = $this->connection->prepare("SELECT username, email FROM kasutajad WHERE username=? OR email=?");
		$stmt->bind_param("ss", $username, $email);
		$stmt->bind_result($username_from_db, $email_from_db);
		$stmt->execute();
		
		if($stmt->fetch()){
			// kellegil on midagi olemas
			//kumb on olemas
			if($email == $email_from_db){
				return "Email $email_from_db on juba kasutusel!";
			}else{
				return "Kasutajanimi $username_from_db on juba kasutusel!";
			}
		}
		
		// kui ei ole jätkub funktsioon siiani
		// Krüpteerime
		$hash = hash("sha512",$password);
		//echo($hash);
		
		// salvestame kõik andmebaasi
		$stmt = $this->connection->prepare("INSERT INTO kasutajad (username, email, password) VALUES (?,?,?)");
		$stmt->bind_param("sss",$username, $email, $hash);
		$stmt->execute();
		
		return "";
		
	
	}
	
	
	function loginUser($email, $password){
	
		$hash = hash("sha512",$password);
		
		// Küsin kasutaja andmed 
		$stmt = $this->connection->prepare("SELECT id, username FROM kasutajad WHERE email=? AND password=?");
		$stmt->bind_param("ss",$email, $hash);
		$stmt->bind_result($id, $username);
		$stmt->execute();
		
		if($stmt->fetch()){
			// kui saame kätte siis kasutaja sisestas õigesti
			$profile = new StdClass();
			$profile->id = $id;
			$profile->username = $username;
			
			return $profile;
		}
		
	}
}
?>