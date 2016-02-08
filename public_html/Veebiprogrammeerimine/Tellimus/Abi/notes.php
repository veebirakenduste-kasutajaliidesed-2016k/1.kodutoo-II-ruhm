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
	
	}elseif(isSet($_REQUEST["update_id"])){
		updateNote($_REQUEST["update_id"],$_REQUEST["new_title"], $_REQUEST["new_content"]);
		
	}
	
	getAllNotes();
	
?>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Notes</title>
</head>
<body>
	<?php 
		if(isSet($_REQUEST["notice"])){
			echo "<h2>".$_REQUEST["notice"]."</h2>";
		}
	?>
	<a href="?add">Add note</a><br><br>
	
	<?php 
		if(isSet($_REQUEST["add"])){
			// Kui ADD on aadressireal, siis näitame lisamisvormi
		?>
			<form action="notes.php">
				Title: <br><input type="text" name="title" ><br>
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
					<th>Edit / Delete</th>
				</tr>
				
				<?php 
					// järjest kõik read (id, title, content)
					// FOREACH $notes ---- näide: $note->id (nagu temp muutujas)
					foreach($notes as $note){
						if(isSet($_REQUEST["update"]) AND $_REQUEST["update"] == $note->id){
							
							// Kuvame input väljad
							echo "
							<tr>
								<form action='notes.php' >
									<td><input readonly='readonly' type='text' name='update_id' value='$note->id' ></td>
									<td><input type='text' name='new_title' value='$note->title' ></td>
									<td><input type='text' name='new_content' value='$note->content' ></td>
									<td>
										<input type='submit' value='Save'> 
										<a href='notes.php'>
											<input type='button' value='Cancel'>
										</a>
									</td>
								</form>
							</tr>
							";
							
						}else{
							echo "
							<tr>
								<td>$note->id</td>
								<td>$note->title</td>
								<td>$note->content</td>
								<td>
									<a href='?update=$note->id'>Edit</a>
									<a href='edit.php?id=$note->id'>edit.php</a>
									<a href='?delete=$note->id'>Del</a>
								</td>
							</tr>
							";
						}
					}
				?>
				
			</table>
		
		<?php
		}
	?>
	
</body>
</html>