<?php 
	$columns = array("id", "title", "exercise", "tags");
	$mysqli = new mysqli("localhost", "if14", "ifikas2014", "if14_markuss");
	$sort = "title";
	
	function addNote($title, $exercise, $tags){

		global $mysqli;
		
		$stmt = $mysqli->prepare("INSERT INTO Exercises (title, exercise, tags) VALUES (?, ?, ?)");
		
		// funktsiooni saadetud muutujad lisatakse ?-märkide asemele
		$stmt->bind_param("sss", $title, $exercise, $tags);
		$stmt->execute();
	}
	
	function getAllNotes($search=""){
		
		global $mysqli;
		global $sort;
		
		$stmt = $mysqli->prepare("SELECT id, title, exercise, tags FROM Exercises WHERE title LIKE ? OR exercise LIKE ? OR tags LIKE ? ORDER BY $sort");
		$searchparam = "%".$search."%";
		$stmt->bind_param("sss", $searchparam, $searchparam, $searchparam);
		
		if ($mysqli->error) {
			
			echo("Error: ".$mysqli->error."<br>");
		}
		
		$stmt->bind_result($id, $title, $exercise, $tags);
		$stmt->execute();
		
		
		$notes = array();
		
		while($stmt->fetch()){
			$temp = new StdClass;
			$temp->id = $id;
			$temp->title = $title;
			$temp->exercise = $exercise;
			$temp->tags = $tags;
			
			array_push($notes, $temp);
		}
		
		return $notes;
		
	
	}
	
	
	function deleteNote($id){
	
		global $mysqli;
		
		$stmt= $mysqli->prepare("DELETE FROM Exercises WHERE id=?");
		$stmt->bind_param("i",$id);
		$stmt->execute();
		
	}
	
	
	function updateNote($id, $title, $exercise, $tags){
		
		global $mysqli;
		
		$stmt= $mysqli->prepare("UPDATE Exercises SET title=?, exercise=?, tags=? WHERE id=?");
		$stmt->bind_param("sssi",$title, $exercise, $tags, $id);
		$stmt->execute();
	
	}
	
	function getOneNote($id){
		
		global $mysqli;
		
		$stmt = $mysqli->prepare("SELECT id, title, exercise, tags FROM Exercises WHERE id=?");
		$stmt->bind_param("i", $id);
		$stmt->bind_result($id, $title, $exercise, $tags);
		$stmt->execute();
		
		while($stmt->fetch()){
			$one_note = new StdClass;
			$one_note->id = $id;
			$one_note->title = $title;
			$one_note->exercise = $exercise;
			$one_note->tags = $tags;
			
			return $one_note;
		}
		
	
	}
	
	
	
	
?>