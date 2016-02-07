<!doctype html>
<html>
	<body>
		<h1>Sisesta 2 arvu </h1> </br>
		<form action="form.php" method="get">
			<input type="text" name="first_number">
			x
			<input type="text" name="second_number">
			<input type="submit" value="Arvuta">
			</form>
			
			<?php if(isSet($_REQUEST['first_number'])){
				$first_number = $_REQUEST['first_number'];
				$second_number = $_REQUEST['second_number'];
				
				$answer = $first_number * $second_number;
				echo "<h3>".$first_number."x".$second_number"=".$answer."</h3>";
			
			} ?>
	</body>
</html>