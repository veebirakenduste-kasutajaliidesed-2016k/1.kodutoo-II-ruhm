<?php
	// Loome uhenduse (server, knimi, parool, andmebaasi nimi)
	$mysqli = new mysqli("localhost", "if14", "ifikas2014", "if14_markuss");
	
	// Sorteerimise muutuja(vaikimisi "regnr")
	$columns = array("regnr", "mark", "mudel", "aasta", "labisoit");
	
	$sort = "regnr";
	$direction = "";
	
	// Sorteerimise muutuja
	if(isSet($_REQUEST["sort"])){
		if(!in_array($_REQUEST["sort"],(array("regnr", "mark", "mudel", "aasta", "labisoit")))){
		die("Lubamatu tulbanimi!");
		}
		
		$sort = $_REQUEST["sort"];
	}
	
	// Kas on olemas muutuja, mis määrab DESC järjekorra
	if(isSet($_REQUEST["direction"])){
		if(!$_REQUEST["direction"] == "DESC"){
		die("Ei sobi");
		
		}
		
		$direction = $_REQUEST["direction"];
		
	}
	
	$stmt = $mysqli->prepare("SELECT regnr, mark, mudel, aasta, labisoit FROM autod ORDER BY $sort $direction");
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
			
				<?php
					
					// Tekitada header $colums array-st (kasutades FOREACH)
					// $colums = array("regnr", "mark", "mudel", "aasta", "labisoit");
					// <th><a href="?sort=Tulba nimi">Tulba nimi</a></th>
					
					foreach($columns as $column){
					
						$direction = "";
						$style = "";
						
						// Üldjuhul ülevalt alla
						$arrow = "&#9660";
						
						
						if(isSet($_REQUEST['sort']) AND $column == $_REQUEST['sort'] AND !isSet($_REQUEST['direction'])){
						
							$direction = "&direction=DESC";
	
						}
					
						echo "<th><a href='?sort=$column$direction'>$column $arrow</a></th>";
					}
				
				?>				
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