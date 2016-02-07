<?php 
	$columns = array("ID", "JoogiNimi", "TopsePakis", "TopseJuua");
	$mysqli = new mysqli("localhost", "if14", "ifikas2014", "if14_markuss");
	
	
	function addCup($ID, $JoogiNimi, $TopsePakis, $TopseJuua){
	
		global $mysqli;
		
		$stmt = $mysqli->prepare("INSERT INTO Joogid (ID, JoogiNimi, TopsePakis, TopseJuua) VALUES (?, ?, ?, ?)");
		
		$stmt->bind_param("isii", $ID, $JoogiNimi, $TopsePakis, $TopseJuua);
		$stmt->execute();
	}
	
	function getAllCups($search=""){
		
		global $mysqli;
		
		$stmt = $mysqli->prepare("SELECT ID, JoogiNimi, TopsePakis, TopseJuua FROM Joogid where TopseJuua >= 1");
		
		$stmt->bind_result($ID, $JoogiNimi, $TopsePakis, $TopseJuua);
		$stmt->execute();
		
		$cups = array();
		
		while($stmt->fetch()){
			$temp = new StdClass;
			$temp->ID = $ID;
			$temp->JoogiNimi = $JoogiNimi;
			$temp->TopsePakis = $TopsePakis;
			$temp->TopseJuua = $TopseJuua;
			
			array_push($cups, $temp);
		}
		
		return $cups;
	
	}
		
	// Lisame pakis olevad topsid joomiseks funktsioon
	function extraCup($ID){
	
		global $mysqli;
		
		$stmt= $mysqli->prepare("UPDATE Joogid set TopseJuua=TopseJuua+TopsePakis WHERE ID=?");
		$stmt->bind_param("i", $ID);
		$stmt->execute();
		
	}
		
	function updateCup($ID){
		
		global $mysqli;
		
		$stmt= $mysqli->prepare("UPDATE Joogid set TopseJuua=TopseJuua-1 WHERE ID=?");
		$stmt->bind_param("i", $ID);
		$stmt->execute();
	
	}	
?>