<?php require("../header.php"); ?>
<!doctype html>
<html lang="en">
<div id="content">
<head>
	<meta charset="UTF-8">
</head>
<body>
	<h2>Sellel lehel majandab sekretär.</h2>
	<h3>Peaks olema sekretäri esimene leht, kus ta näeb tellijate sisestusi ning vastavalt sellele võib valida, kas neid muuta või mitte.</h3>
	<?php		
		$con=mysqli_connect("localhost","if14","ifikas2014","if14_markuss");
		if (mysqli_connect_errno()) {
			echo "Failed to connect to MySQL: " . mysqli_connect_error();
		}
					
		$result = mysqli_query($con,"SELECT * FROM Tellimus");
				
		echo "<table border='1'>
		<tr>
		<th>Toode</th>
		<th>Eesnimi</th>
		<th>Perekonnanimi</th>
		<th>Aadress</th>
		<th>Soovitud kuupäev ja kellaaeg</th>
		<th>Email</th>
		<th>Aktsepteeritud?</th>
		<th>Summa</th>
		<th>Arve tasutud?</th>
		<th>Muuda</th>
		<th>Kustuta</th>
		</tr>";

		while($row = mysqli_fetch_array($result)) {
		echo "<tr>";
		echo "<td>" . $row['Toode'] . "</td>";
		echo "<td>" . $row['Eesnimi'] . "</td>";
		echo "<td>" . $row['Perekonnanimi'] . "</td>";
		echo "<td>" . $row['Aadress'] . "</td>";
		echo "<td>" . $row['Skuupaev'] . "</td>";
		echo "<td>" . $row['Email'] . "</td>";
		echo "<td>" . $row['Aktsepteeritud'] . "</td>";
		echo "<td>" . $row['Summa'] . "</td>";
		echo "<td>" . $row['ArveTasutud'] . "</td>";
		echo "<td><a href='edit.php?ID=" . $row['ID'] . "'>Muuda</a></td>";
		echo "<td><a href='Sekretär.php?Delete=" . $row['ID'] . "'>Kustuta</a></td>";
		echo "</tr>";
		}
		
		echo "</table>";
		
		if(isset($_GET['Delete'])){
				
			echo "<h1>Kustutatud andmebaasist</h1>";
			$sql="DELETE FROM Tellimus WHERE ID=".$_GET['Delete'];
			mysqli_query($con,$sql);
		}
		global $ID;		
		mysqli_close($con);
	?>
</body>
</div>
</html>
<?php require("../footer.php"); ?>