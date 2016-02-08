<?php 
	$mysqli = new mysqli("localhost", "if14", "ifikas2014", "if14_markuss");
	
	function updateNote($Toode, $Eesnimi, $Perekonnanimi, $Aadress, $Skuupaev, $Email, $Aktsepteeritud, $Summa, $ArveTasutud){
		
		global $mysqli;
		
		$stmt= $mysqli->prepare("UPDATE Tellimus SET Toode=?, Eesnimi=?, Perekonnanimi=?, Aadress=?, Skuupaev=?, Email=?, Aktsepteeritud=?, Summa=?, ArveTasutud=? WHERE ID=?");
		$stmt->bind_param("i", $ID);
		#("sssssssis", $Toode, $Eesnimi, $Perekonnanimi, $Aadress, $Skuupaev, $Email, $Aktsepteeritud, $Summa, $ArveTasutud);
		$stmt->bind_result($Toode, $Eesnimi, $Perekonnanimi, $Aadress, $Skuupaev, $Email, $Aktsepteeritud, $Summa, $ArveTasutud);
		$stmt->execute();
	
	}
	
	function getOneNote($ID){
		
		global $mysqli;
		
		$stmt = $mysqli->prepare("SELECT Toode, Eesnimi, Perekonnanimi, Aadress, Skuupaev, Email, Aktsepteeritud, Summa, ArveTasutud FROM Tellimus WHERE ID=?");
		$stmt->bind_param("i", $ID);
		$stmt->bind_result($Toode, $Eesnimi, $Perekonnanimi, $Aadress, $Skuupaev, $Email, $Aktsepteeritud, $Summa, $ArveTasutud);
		$stmt->execute();

		while($stmt->fetch()){
			$one_note = new StdClass;
			$one_note->Toode = $Toode;
			$one_note->Eesnimi = $Eesnimi;
			$one_note->Perekonnanimi = $Perekonnanimi;
			$one_note->Aadress = $Aadress;
			$one_note->Skuupaev = $Skuupaev;
			$one_note->Email = $Email;
			$one_note->Aktsepteeritud = $Aktsepteeritud;
			$one_note->Summa = $Summa;
			$one_note->ArveTasutud = $ArveTasutud;
			
			return $one_note;
		}
	}	
?>