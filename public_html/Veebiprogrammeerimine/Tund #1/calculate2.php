<!doctype html>
<html>
	<body>
		<h1>Sisesta 2 arvu </h1> </br>
		<form action="calculate2.php" method="get">
			<input type="text" name="first" value = "<?php echo $_REQUEST['first']; ?>">
			<select name ="operator">
				<option value="multiply">x</option>
				<option value="divide">/</option>
				<option value="sum">+</option>
				<option value=" substract">/</option>
			</select>
			<input type="text" name="second">
			<input type="submit" value="Arvuta">
			</form>
			
			<?php if(isSet($_REQUEST['first'])){
			
				$first = $_REQUEST['first'];
				$second = $_REQUEST['second'];
				$operator = $_REQUEST['operator'];
				
				if($operator == "multiply"){
					// KORRUTAME
					$answer = $first * $second;
					echo "<h3>".$first."x".$second."=".$answer."</h3>";
					
				}elseif($operator == "divide"){
					// JAGAME
					$answer = $first / $second;
					echo "<h3>".$first."/".$second."=".$answer."</h3>";
					
				}elseif($operator == "sum"){
					// LIIDAME
					$answer = $first + $second;
					echo "<h3>".$first."+".$second."=".$answer."</h3>";
					
				}elseif($operator == "substract"){
					// LAHUTAME
					$answer = $first - $second;
					echo "<h3>".$first."-".$second."=".$answer."</h3>";
				}	
			
			} ?>
	</body>
</html>