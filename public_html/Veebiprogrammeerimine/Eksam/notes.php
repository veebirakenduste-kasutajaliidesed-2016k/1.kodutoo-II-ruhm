<?php 
	require_once("functions.php");
	$mysqli = new mysqli("localhost", "if14", "ifikas2014", "if14_markuss");
	
	if(isSet($_REQUEST["title"])){
		
		addNote($_REQUEST["title"], $_REQUEST["exercise"], $_REQUEST["tags"]);
		
		header("Location: notes.php?notice=Lisatud");
		
	}elseif(isSet($_REQUEST["delete"])){
		
		deleteNote($_REQUEST["delete"]);
		header("Location: notes.php?notice=Kustutatud");
	
	}
	global $sort;
	if(isSet($_REQUEST["search"])){
		$notes = getAllNotes($_REQUEST["search"]);		;
	}else{
		$notes = getAllNotes();
	}
	// Siit algab sortimine, mis kahjuks ei tööta
	$sort = "title";
	if(isSet($_REQUEST["sort"])){
		if(!in_array($_REQUEST["sort"],(array("title", "exercise")))){
		die("Lubamatu tulbanimi!");
		}
		
		$sort = $_REQUEST["sort"];
	}
	$stmt = $mysqli->prepare("SELECT id, title, exercise, tags FROM Exercises ORDER BY $sort")
	
?>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Edit</title>
</head>
<body>
	<?php 
		if(isSet($_REQUEST["notice"])){
			echo "<h2>".$_REQUEST["notice"]."</h2>";
		}
	?>
	<a href="?add">Add note</a><br><br>
	
	<form action = "notes.php">
		<input type = "text" name = "search">
		<input type = "submit" value = "Search">
	</form>
	
	<?php 
		if(isSet($_REQUEST["add"])){
		?>
			<form action="notes.php">
				Title: <br><input type="text" name="title" ><br>
				Exercise: <br><input type="text" name="exercise"><br>
				Tags: <br><input type="text" name="tags"><br>
				<input type="submit" value="Add">
			</form>
		<?php
		}else{
			// muul juhul tabelit märkustest
		?>
			<table>
				<th>ID</th>
				<th><input type = "submit" value = "Title"></th>
				<th><a href="?sort=exercise">Exercise</a></th>
				<th>Tags</th>
				<tr>
					<th></th>
				</tr>
				
				<?php
					foreach($notes as $note){
						
							echo "
							<tr>
								<td>$note->id</td>
								<td>$note->title</td>
								<td>$note->exercise</td>
								<td>$note->tags</td>
								<td>
									<a href='edit.php?id=$note->id'>Edit</a>
									<a href='?delete=$note->id'>Delete</a>
								</td>
							</tr>
							";
						
					}
				?>
				
			</table>
		
		<?php
		}
	?>
	
</body>
</html>