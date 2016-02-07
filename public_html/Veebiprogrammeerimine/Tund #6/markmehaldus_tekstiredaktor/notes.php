<?php 

	require_once("functions.php"); 
	
	// Kas lisame uue märkme
	if(isSet($_REQUEST["title"])){
		
		addNote($_REQUEST["title"], $_REQUEST["content"]);
		
		// pärast lisamist suuname kasutaja teisele lehele
		header("Location: notes.php?notice=Lisatud");
		
	}elseif(isSet($_REQUEST["delete"])){
		
		deleteNote($_REQUEST["delete"]);
		header("Location: notes.php?notice=Kustutatud");
	
	}
	if(isSet($_REQUEST["search"])){
		$notes = getAllNotes($_REQUEST["search"]);
	}else{
		$notes = getAllNotes();
	}
	
?>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Joogiautomaat</title>
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
			// Kui ADD on aadressireal, siis näitame lisamisvormi
		?>
			<form action="notes.php">
				Joogi nimi: <br><input type="text" name="title" ><br>
				Content: <br><textarea name="content" id="" cols="30" rows="10"></textarea><br>
				<input type="submit" value="Add">
			</form>
		<?php
		}else{
			// muul juhul tabelit märkustest
		?>
			<table>
				<tr>
					<?php foreach($columns as $column){
						echo "<th>$column</th>";
					} ?>
					<th>+/-</th>
				</tr>
				
				<?php 
					// järjest kõik read (id, title, content)
					// FOREACH $notes ---- näide: $note->id (nagu temp muutujas)
					foreach($notes as $note){
						
							echo "
							<tr>
								<td>$note->id</td>
								<td>$note->title</td>
								<td>".htmlspecialchars_decode($note->content)."</td>
								<td>
									<a href='edit.php?id=$note->id'>edit.php</a>
									<a href='?delete=$note->id'>Del</a>
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