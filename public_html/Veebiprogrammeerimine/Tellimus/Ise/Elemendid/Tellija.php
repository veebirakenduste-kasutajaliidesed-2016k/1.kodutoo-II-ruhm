<?php require("../header.php"); ?>
<!doctype html>
<html>
<div id="content">
<head>
</head>
	<body>
	<h2>Tellimuse esitamine toimub sellel lehel.</h2>
		<?php
			$con=mysqli_connect("localhost","if14","ifikas2014","if14_markuss");
			if (mysqli_connect_errno()) {
				echo "Failed to connect to MySQL: " . mysqli_connect_error();
			}
			$Toode = "";
			$Toode_sisu = "";
			$Eesnimi = "";
			$Eesnimi_sisu = "";
			$Perekonnanimi = "";
			$Perekonnanimi_sisu = "";
			$Aadress = "";
			$Aadress_sisu = "";
			$Skuupäev = "";
			$Skuupäev_sisu = "";
			$Email = "";
			$Email_sisu = "";
						
			$korras = 0;
			
			if(isSet($_POST["Toode"])){	
			
				$korras = 1;
				
				if(strlen($_POST["Toode"])<=0){
					$Toode = " Väli tühi!";
					$korras = 0;
				}

				$Toode_sisu = $_POST["Toode"];
			}
			if(isSet($_POST["Eesnimi"])){
				if(strlen($_POST["Eesnimi"])<=0){
					$Eesnimi = " Väli tühi!";
					$korras = 0;
				}

				$Eesnimi_sisu = $_POST["Eesnimi"];
			}
			if(isSet($_POST["Perekonnanimi"])){
				if(strlen($_POST["Perekonnanimi"])<=0){
					$Perekonnanimi = " Väli tühi!";
					$korras = 0;
				}
				
				$Perekonnanimi_sisu = $_POST["Perekonnanimi"];
				
			}
			if(isSet($_POST["Aadress"])){
				if(strlen($_POST["Aadress"])<=0){
					$Aadress = " Väli tühi!";
					$korras = 0;
				}

				$Aadress_sisu = $_POST["Aadress"];

			}
			if(isSet($_POST["Skuupäev"])){
				if(strlen($_POST["Skuupäev"])<=0){
					$Skuupäev = " Väli tühi!";
					$korras = 0;
				}

				$Skuupäev_sisu = $_POST["Skuupäev"];

			}
			if(isSet($_POST["Email"])){
				if(strlen($_POST["Email"])<=0){
					$Email = " Väli tühi!";
					$korras = 0;
				}

				$Email_sisu = $_POST["Email"];					

			}
			
			
			if($korras == 1){
						
				if (isSet($_POST['submit'])){
				$Toode_sisu = mysqli_real_escape_string($con, $_POST['Toode_sisu']);
				$Eesnimi_sisu = mysqli_real_escape_string($con, $_POST['Eesnimi_sisu']);
				$Perekonnanimi_sisu = mysqli_real_escape_string($con, $_POST['Perekonnanimi_sisu']);
				$Aadress_sisu = mysqli_real_escape_string($con, $_POST['Aadress_sisu']);
				$Skuupäev_sisu = mysqli_real_escape_string($con, $_POST['Skuupäev_sisu']);
				$Email_sisu = mysqli_real_escape_string($con, $_POST['Email_sisu']);
				}
				$sql="INSERT INTO Tellimus (Toode, Eesnimi, Perekonnanimi, Aadress, Skuupaev, Email) VALUES ('$Toode_sisu', '$Eesnimi_sisu', '$Perekonnanimi_sisu', '$Aadress_sisu', '$Skuupäev_sisu', '$Email_sisu')";
			
				if (!mysqli_query($con,$sql)) {
				  die('Error: ' . mysqli_error($con));
				}
				
				header("Location: Tellija.php?salvestatud");
				
				}
			
						
			if(isSet($_GET["salvestatud"])){
			
				echo "<h1>Tellimus esitatud (salvestatud andmebaasi)!</h1>";
				
			}
			
			if (mysqli_connect_errno()) {
				echo "Failed to connect to MySQL: " . mysqli_connect_error();
			}
			
			global $Toode_sisu;
			global $Eesnimi_sisu;
			global $Perekonnanimi_sisu;
			global $Aadress_sisu;
			global $Skuupäev_sisu;
			global $Email_sisu;
			global $ID;
			global $Otsitav;
			
			mysqli_close($con);
		?>
		<form method="POST" align="center" action="Tellija.php">	
			<fieldset>
			<legend>Tellimuse ankeet</legend>
			<input type="text" placeholder="Toote nimetus" name="Toode" size="40" value="<?php echo $Toode_sisu; ?>" ><span style="color:red;"><?php echo $Toode; ?></span></br>
			<input type="text" placeholder="Eesnimi" name="Eesnimi" size="40" value="<?php echo $Eesnimi_sisu; ?>" ><span style="color:red;"><?php echo $Eesnimi; ?></span></br>
			<input type="text" placeholder="Perekonnanimi" name="Perekonnanimi" size="40" value="<?php echo $Perekonnanimi_sisu; ?>" ><span style="color:red;"><?php echo $Perekonnanimi; ?></span></br>
			<input type="text" placeholder="Aadress" name="Aadress" size="40" value="<?php echo $Aadress_sisu; ?>" ><span style="color:red;"><?php echo $Aadress; ?></span></br>
			<input type="text" placeholder="Soovitud kuupäev ja kellaeg (yyyy-mm-dd hh:ii)" name="Skuupäev" size="40" value="<?php echo $Skuupäev_sisu; ?>" ><span style="color:red;"><?php echo $Skuupäev; ?></span></br>
			<input type="email" placeholder="Email" name="Email" size="40" value="<?php echo $Email_sisu; ?>" ><span style="color:red;"><?php echo $Email; ?></span></br>
			<input type="submit" value="Salvesta"/>
			</fieldset>
		</form>
	</body>
	</div>
</html>
<?php require("../footer.php"); ?>