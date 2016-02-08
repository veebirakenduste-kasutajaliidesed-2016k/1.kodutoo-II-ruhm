<?php
class User {

	private $connection;
	
	function __construct($mysqli){
		
		$this->connection = $mysqli;
		// print_r($this->connection);
	
	}
	
	function addUser($name, $phone, $email, $password){
		// echo $name, $phone, $email, $password;
		$stmt = $this->connection->prepare("SELECT email, phone FROM users WHERE email=? OR phone=?");
	    $stmt->bind_param("ss", $email, $phone);
		$stmt->bind_result($email_from_db, $phone_from_db);
		$stmt->execute();
		
		if($stmt->fetch()){
			if($email == $email_from_db){
				return "Email $email_from_db on juba kasutusel!";
			}else{
				return "Telefon $phone_from_db on juba kasutusel!";
			}
		}
		$hash = hash("sha512", $password);
		
		// echo($hash);
		
		$stmt = $this->connection->prepare("INSERT into users (name, phone, email, password) VALUES (?, ?, ?, ?)");
	    $stmt->bind_param("ssss", $name, $phone, $email, $hash);
		$stmt->execute();
		
		return "";
		
	}
	
	function loginUser($email, $password){
	
		$hash = hash("sha512", $password);
		
		$stmt = $this->connection->prepare("SELECT id, name FROM users WHERE email=? AND password=?");
		$stmt->bind_param("ss", $email, $hash);
		$stmt->bind_result($id, $name);
		$stmt->execute();
		
		if($stmt->fetch()) {
		
			$profile = new StdClass();
			$profile->id = $id;
			$profile->name = $name;
		
			return $profile;
		}
	}
	
	
}
?>