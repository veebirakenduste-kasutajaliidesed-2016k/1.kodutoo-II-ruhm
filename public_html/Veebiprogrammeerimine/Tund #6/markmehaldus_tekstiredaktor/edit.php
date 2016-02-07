<?php 
	require_once("functions.php");
	
	if(isSet($_REQUEST["id"])){
		// Küsime andmebaasist ühe rea andmeid kus id on see mis aadressireal
		$note = getOneNote($_REQUEST["id"]);
		
		//print_r($note);
	}elseif(isSet($_REQUEST["update_id"])){
		updateNote($_REQUEST["update_id"],$_REQUEST["new_title"], $_REQUEST["new_content"]);
		header("Location: notes.php");
		
	}
	
?>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Edit Note</title>
	<script src="//cdn.ckeditor.com/4.4.5.1/standard/ckeditor.js"></script>
	</head>
<body>
	<h2>Edit Note</h2>
	<form action="edit.php">
		<input type="text" name='update_id' hidden='hidden' value='<?php echo $note->id;?>'>
		Title: <br><input type="text" name="new_title" value='<?php echo $note->title;?>' ><br>
		Content: <br><textarea class="new_content" name="new_content" id="" cols="30" rows="10"><?php echo $note->content;?></textarea><br>
		<input type="submit" value="Save">
	</form>
	<script>
		// Paneme Ckeditori käima
		CKEDITOR.replace('new_content');
	</script>
</body>
</html>