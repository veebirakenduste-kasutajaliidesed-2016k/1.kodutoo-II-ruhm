<?php
	require_once("functions.php");
	
	if(isSet($_REQUEST["id"])){
		// Küsime andmebaasist ühe rea andmed, kus id on see, mis aadressireal
		$note = getOneNote($_REQUEST["id"]);
		
		print_r($note);
	
	}elseif(isSet($_REQUEST["update_id"])){
		updateNote($_REQUEST["update_id"], $_REQUEST["new_title"], $_REQUEST["new_content"]);
		header("Location:notes.php");
	
	}
?>

<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Edit note</title>
</head>
<body>
	<h2>Edit note</h2>
		<form action="edit.php">
				<input type="text" name='update_id' hidden='hidden' value='<?php echo $note->id;?>'>
				Title: <br><input type="text" name="new_title" value='<?php echo $note->title;?>'><br>
				Content: <br><textarea name="new_content" id="" cols="30" rows="10"><?php echo $note->id;?>
				</textarea><br>
				<input type="submit" value="Save">
		</form>
</body>
</html>