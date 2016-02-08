<?php
	// Loome uhenduse (server, knimi, parool, andmebaasi nimi)
	$mysqli = new mysqli("localhost", "if14", "ifikas2014", "if14_markuss");
	
	// Vaikimisi muutuja(vaikimisi "regnr")
	$sort = "regnr";
	if(isSet($_REQUEST["sort"])){
		if(!in_array($_REQUEST["sort"],(array("regnr", "mark", "mudel", "aasta", "labisoit")))){
		die("Lubamatu tulbanimi!");
		}
		
		$sort = $_REQUEST["sort"];
	}
	
	$stmt = $mysqli->prepare("SELECT regnr, mark, mudel, aasta, labisoit FROM autod ORDER BY $sort");
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
			<th><a href="?sort=regnr">Reg nr</a></th>
			<th><a href="?sort=mark">Mark</a></th>
			<th><a href="?sort=mudel">Mudel</a></th>
			<th><a href="?sort=aasta">Aasta</a></th>
			<th><a href="?sort=labisoit">Läbisõit</a></th>
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