<?php require("../header.php"); ?>
<!doctype html>
<html lang="en">
<div id="content">
<head>
	<meta charset="UTF-8">
</head>
<body>
	<h2>Sellel lehel saab jälgida paki teekonna kulgemist.</h2>
	<?php
		$ID = "";
		$con=mysqli_connect("localhost","if14","ifikas2014","if14_markuss");

		if (mysqli_connect_errno()){
			echo "Failed to connect to MySQL: " . mysqli_connect_error();
		}
			if (isSet($_GET['ID'])){
			echo "<table border='1'>
			<tr>
			<th>Toode</th>
			<th>Eesnimi</th>
			<th>Perekonnanimi</th>
			<th>Aadress</th>
			<th>Soovitud kuupäev ja kellaaeg</th>
			<th>Email</th>
			<th>Summa</th>
			<th>Arve tasutud?</th>
			<th>Pakk posti pandud?</th>
			</tr>";
			$ID=$_GET['ID'];
			
			}
			if (isSet($_POST['submit'])){
				$ID = mysqli_real_escape_string($con, $_POST['ID']);
			}
			$result = mysqli_query($con,"SELECT * FROM Tellimus WHERE ID='$ID'");{
			}
						
			while($row = mysqli_fetch_array($result)){
			echo "<tr>";
			echo "<td>" . $row['Toode'] . "</td>";
			echo "<td>" . $row['Eesnimi'] . "</td>";
			echo "<td>" . $row['Perekonnanimi'] . "</td>";
			echo "<td>" . $row['Aadress'] . "</td>";
			echo "<td>" . $row['Skuupaev'] . "</td>";
			echo "<td>" . $row['Email'] . "</td>";
			echo "<td>" . $row['Summa'] . "</td>";
			echo "<td>" . $row['ArveTasutud'] . "</td>";
			echo "<td>" . $row['Aktsepteeritud'] . "</td>";
			echo "</tr>";
			}
			echo "</table>";
		global $ID;
		mysqli_close($con);
	?></br>
	<form>
		<input type="text" placeholder="Sisesta otsitava tellimuse ID" name="ID" size="20" value="<?php echo $ID; ?>">
		<input type="submit" value="Otsi"/>
	</form>
	</body>
</div>
</html>
<?php require("../footer.php"); ?>