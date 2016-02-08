<?php
	// Loome uhenduse (server, knimi, parool, andmebaasi nimi)
	$mysqli = new mysqli("localhost", "if14", "ifikas2014", "if14_markuss");
	$stmt = $mysqli->prepare("SELECT regnr, mark, mudel, aasta, labisoit FROM autod");
	$stmt->bind_result($plate, $make, $model, $year, $mileage);
	$stmt->execute();
?>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Autode nimekiri</title>
</head>
<body>
	<h1>Autode loetelu</h1>
	
	<table border="2">
		<tr>
			<th>Reg nr</th>
			<th>Mark</th>
			<th>Mudel</th>
			<th>Aasta</th>
			<th>Läbisõit</th>
		</tr>
		
	<?php
	while($stmt->fetch()){
		
		echo "
		<tr>
			<td>$plate</td>
			<td>$make</td>
			<td>$model</td>
			<td>$year</td>
			<td>$mileage</td>
		</tr>
		";	
			// echo "<h2>".htmlspecialchars($plate)."</h2>";
			// echo htmlspecialchars($make)." $model $year $mileage";
		}
		
		
		?>
	</table>
	
</body>
</html>
<?php
	// Paneme uhenduse kinni
	$mysqli->close();
?>