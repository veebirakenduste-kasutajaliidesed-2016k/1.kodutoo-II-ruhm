<?php 
	require_once("functions.php");
	
	if(isSet($_REQUEST["id"])){
		$note = getOneNote($_REQUEST["id"]);
		
	}elseif(isSet($_REQUEST["update_id"])){
		updateNote($_REQUEST["update_id"],$_REQUEST["new_title"], $_REQUEST["new_exercise"], $_REQUEST["new_tags"]);
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
		Content: <br><input type="text" class="new_exercise" name="new_exercise"><?php echo $note->exercise;?><br>
		Tags: <br><input type="text" name="new_tags" value='<?php echo $note->tags;?>' ><br>
		<input type="submit" value="Save">
	</form>
</body>
</html>