<?php 
	// muutujad
	$columns = array("id", "title", "content");
	$mysqli = new mysqli("localhost", "if14", "ifikas2014", "if14_markuss");
	
	
	function addNote($title, $content){
		//echo "$title ja $content";

		global $mysqli;
		
		$stmt = $mysqli->prepare("INSERT INTO notes (title, content) VALUES (?, ?)");
		
		// funktsiooni saadetud muutujad lisatakse ?-märkide asemele
		$stmt->bind_param("ss", $title, $content);
		$stmt->execute();
	}
	
	function getAllNotes($search=""){
		
		global $mysqli;
		// global $notes;
		
		$stmt = $mysqli->prepare("SELECT id, title, content FROM notes WHERE title LIKE ? OR content LIKE ?");
		$searchparam = "%".$search."%";
		$stmt->bind_param("ss", $searchparam, $searchparam);
		
		if ($mysqli->error) {
			
			echo("Error: ".$mysqli->error."<br>");
		}
		
		$stmt->bind_result($id, $title, $content);
		$stmt->execute();
		
		
		$notes = array();
		
		// seni kuni üks rida tabelist
		while($stmt->fetch()){
			$temp = new StdClass;
			$temp->id = $id;
			$temp->title = $title;
			$temp->content = $content;
			
			array_push($notes, $temp);
			//print_r($temp);
		}
		
		return $notes;
		
		//print_r($notes);
	
	}
	
	
	// Kustutamise funktsioon.
	function deleteNote($id){
	
		//echo "<h1>Kustutame $id</h1>";
		global $mysqli;
		
		$stmt= $mysqli->prepare("DELETE FROM notes WHERE id=?");
		$stmt->bind_param("i",$id);
		$stmt->execute();
		
	}
	
	
	function updateNote($id, $title, $content){
		
		global $mysqli;
		
		$stmt= $mysqli->prepare("UPDATE notes SET title=?, content=? WHERE id=?");
		$stmt->bind_param("ssi",$title, htmlspecialchars($content), $id);
		$stmt->execute();
	
	}
	
	function getOneNote($id){
		
		global $mysqli;
		
		$stmt = $mysqli->prepare("SELECT id, title, content FROM notes WHERE id=?");
		$stmt->bind_param("i", $id);
		$stmt->bind_result($id, $title, $content);
		$stmt->execute();
		
		while($stmt->fetch()){
			$one_note = new StdClass;
			$one_note->id = $id;
			$one_note->title = $title;
			$one_note->content = $content;
			
			return $one_note;
		}
		
	
	}
	
	
	
	
?>