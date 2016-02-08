<!doctype html>
	<html>
		<head>
			<Title>Veebiprogrammeerimine</title>
		</head>
		<body>
			<form action="form.php" method="get">
			<input type="text" name="first_name">
			<input type="text" name="last_name">
			<input type="submit" value="Tervita">
			</form>
			
			<?php if(isSet($_REQUEST['first_name'])){
			echo "<h1>Tere, ".$_REQUEST['first_name']." ".$_REQUEST['last_name']."!</h1>";
			
			} ?>
			
		</body>
	</html>