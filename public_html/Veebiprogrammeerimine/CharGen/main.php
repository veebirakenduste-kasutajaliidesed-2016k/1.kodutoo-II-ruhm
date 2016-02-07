<?php
	require("header.php");
	require_once("config.php");
	
	if(!isSet($_SESSION["id"])){
		header("Location: login.php");
	}
	
	if(isSet($_REQUEST["logout"])){
		session_destroy();
		header("Location: login.php");
	}

?> 
<!doctype html>
<html>
<div class="bs-example">
		<ul class="nav nav-tabs">
			<li><a href="home.php">Home</a></li>
			<li class="active" ><a href="main.php">Generate</a></li>
			<li><a href="overview.php">Characters</a></li>
		</ul>
	</div>
<div id="content">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap-theme.min.css">
<link rel="stylesheet" type="text/css" href="stiilid.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>
<head>
</head>
	<body>
	<section>
	<img src="onlywarlogo.png"></img>
		<?php			
			$con = mysql_connect("localhost", "if14", "ifikas2014", "if14_markuss") or die(mysql_error());
		    $query = "SELECT talents FROM if14_markuss.talents"; 
			
			$mysqli = new mysqli("localhost", "if14", "ifikas2014", "if14_markuss");
			
			$stmt = $mysqli->prepare("SELECT skills, trained, ten, twenty, thirty FROM skills");
			$stmt->bind_result($skills, $trained, $ten, $twenty, $thirty);
			$stmt->execute();
			
			mysql_select_db("if14_markuss");
			 
		    $result = mysql_query($query) or die(mysql_error());

		    while($row = mysql_fetch_array($result)){
			//echo $row['talents'];
		    }
			$name = "";
			$name_sisu = "";
			$charname = "";
			$charname_sisu = "";
			$description = "";
			$description_sisu = "";
			$demeanour = "";
			$demeanour_sisu = "";
			$speciality = "";
			$speciality_sisu = "";
			$Weapon_Skill = "";
			$Ballistic_Skill = "";
			$Strength = "";
			$Toughness = "";
			$Agility = "";
			$Intelligence = "";
			$Perception = "";
			$Willpower = "";
			$Fellowship = "";
			$currentfate = "";
			$totalfate = "";
			$halfmov = "";
			$fullmov = "";
			$chargemov = "";
			$runmov = "";
			$Talents1 = "";
			$Talents2 = "";
			$Talents3 = "";
			$Talents4 = "";
			$Talents5 = "";
			$Insanity = "";
			$Disorder = "";
			$Corruption = "";
			$Comrade = "";
			$psychicpow = "";
			$psychicrat = "";
			$currentxp = "";
			$totalxp = "";
						
			$korras = 0;
			
			if(isSet($_POST["name"])){	
			
				$korras = 1;
				
				if(strlen($_POST["name"])<=0){
					$name = "Empty field!";
					$korras = 0;
				}

				$name_sisu = $_POST["name"];
			}
			if(isSet($_POST["charname"])){
				if(strlen($_POST["charname"])<=0){
					$charname = "Empty field!";
					$korras = 0;
				}

				$charname_sisu = $_POST["charname"];
			}
			if(isSet($_POST["description"])){
				if(strlen($_POST["description"])<=0){
					$description = "Empty field!";
					$korras = 0;
				}
				
				$description_sisu = $_POST["description"];
				
			}
			if(isSet($_POST["demeanour"])){
				if(strlen($_POST["demeanour"])<=0){
					$demeanour = "Empty field!";
					$korras = 0;
				}

				$demeanour_sisu = $_POST["demeanour"];

			}
			if(isSet($_POST["speciality"])){
				if(strlen($_POST["speciality"])<=2){
					$speciality = "Empty field!";
					$korras = 0;
				}

				$speciality_sisu = $_POST["speciality"];

			}
			if(isSet($_POST["Weapon_Skill"])){
				if(strlen($_POST["Weapon_Skill"])<=0){
					$Weapon_Skill = "Empty field!";
					$korras = 0;
				}

				$Weapon_Skill = $_POST["Weapon_Skill"];

			}
			if(isSet($_POST["Ballistic_Skill"])){
				if(strlen($_POST["Ballistic_Skill"])<=0){
					$Ballistic_Skill = "Empty field!";
					$korras = 0;
				}

				$Ballistic_Skill = $_POST["Ballistic_Skill"];

			}
			if(isSet($_POST["Strength"])){
				if(strlen($_POST["Strength"])<=0){
					$Strength = "Empty field!";
					$korras = 0;
				}

				$Strength = $_POST["Strength"];

			}
			if(isSet($_POST["Toughness"])){
				if(strlen($_POST["Toughness"])<=0){
					$Toughness = "Empty field!";
					$korras = 0;
				}

				$Toughness = $_POST["Toughness"];

			}
			if(isSet($_POST["Agility"])){
				if(strlen($_POST["Agility"])<=0){
					$Agility = "Empty field!";
					$korras = 0;
				}

				$Agility = $_POST["Agility"];

			}
			if(isSet($_POST["Intelligence"])){
				if(strlen($_POST["Intelligence"])<=0){
					$Intelligence = "Empty field!";
					$korras = 0;
				}

				$Intelligence = $_POST["Intelligence"];

			}
			if(isSet($_POST["Perception"])){
				if(strlen($_POST["Perception"])<=0){
					$Perception = "Empty field!";
					$korras = 0;
				}

				$Perception = $_POST["Perception"];

			}
			if(isSet($_POST["Willpower"])){
				if(strlen($_POST["Willpower"])<=0){
					$Willpower = "Empty field!";
					$korras = 0;
				}

				$Willpower = $_POST["Willpower"];

			}
			if(isSet($_POST["Fellowship"])){
				if(strlen($_POST["Fellowship"])<=0){
					$Fellowship = "Empty field!";
					$korras = 0;
				}

				$Fellowship = $_POST["Fellowship"];

			}
			if(isSet($_POST["currentfate"])){
				if(strlen($_POST["currentfate"])<=0){
					$currentfate = "Empty field!";
					$korras = 0;
				}

				$currentfate = $_POST["currentfate"];

			}
			if(isSet($_POST["totalfate"])){
				if(strlen($_POST["totalfate"])<=0){
					$totalfate = "Empty field!";
					$korras = 0;
				}

				$totalfate = $_POST["totalfate"];

			}
			if(isSet($_POST["halfmov"])){
				if(strlen($_POST["halfmov"])<=0){
					$halfmov = "Empty field!";
					$korras = 0;
				}

				$halfmov = $_POST["halfmov"];

			}
			if(isSet($_POST["fullmov"])){
				if(strlen($_POST["fullmov"])<=0){
					$fullmov = "Empty field!";
					$korras = 0;
				}

				$fullmov = $_POST["fullmov"];

			}
			if(isSet($_POST["chargemov"])){
				if(strlen($_POST["chargemov"])<=0){
					$chargemov = "Empty field!";
					$korras = 0;
				}

				$chargemov = $_POST["chargemov"];

			}
			if(isSet($_POST["runmov"])){
				if(strlen($_POST["runmov"])<=0){
					$runmov = "Empty field!";
					$korras = 0;
				}

				$runmov = $_POST["runmov"];

			}
			if(isSet($_POST["Talents1"])){
				if(strlen($_POST["Talents1"])<=0){
					$Talents1 = "Empty field!";
					$korras = 0;
				}

				$Talents1 = $_POST["Talents1"];

			}
			if(isSet($_POST["Talents2"])){
				if(strlen($_POST["Talents2"])<=0){
					$Talents2 = "Empty field!";
					$korras = 0;
				}

				$Talents2 = $_POST["Talents2"];

			}
			if(isSet($_POST["Talents3"])){
				if(strlen($_POST["Talents3"])<=0){
					$Talents3 = "Empty field!";
					$korras = 0;
				}

				$Talents3 = $_POST["Talents3"];

			}
			if(isSet($_POST["Talents4"])){
				if(strlen($_POST["Talents4"])<=0){
					$Talents4 = "Empty field!";
					$korras = 0;
				}

				$Talents4 = $_POST["Talents4"];

			}
			if(isSet($_POST["Talents5"])){
				if(strlen($_POST["Talents5"])<=0){
					$Talents5 = "Empty field!";
					$korras = 0;
				}

				$Talents5 = $_POST["Talents5"];

			}
			if(isSet($_POST["Insanity"])){
				if(strlen($_POST["Insanity"])<=0){
					$Insanity = "Empty field!";
					$korras = 0;
				}

				$Insanity = $_POST["Insanity"];

			}
			if(isSet($_POST["Disorder"])){
				if(strlen($_POST["Disorder"])<=0){
					$Disorder = "Empty field!";
					$korras = 0;
				}

				$Disorder = $_POST["Disorder"];

			}
			if(isSet($_POST["Corruption"])){
				if(strlen($_POST["Corruption"])<=0){
					$Corruption = "Empty field!";
					$korras = 0;
				}

				$Corruption = $_POST["Corruption"];

			}
			if(isSet($_POST["Comrade"])){
				if(strlen($_POST["Comrade"])<=0){
					$Comrade = "Empty field!";
					$korras = 0;
				}

				$Comrade = $_POST["Comrade"];

			}
			if(isSet($_POST["psychicpow"])){
				if(strlen($_POST["psychicpow"])<=0){
					$psychicpow = "Empty field!";
					$korras = 0;
				}

				$psychicpow = $_POST["psychicpow"];

			}
			if(isSet($_POST["psychicrat"])){
				if(strlen($_POST["psychicrat"])<=0){
					$psychicrat = "Empty field!";
					$korras = 0;
				}

				$psychicrat = $_POST["psychicrat"];

			}
			if(isSet($_POST["currentxp"])){
				if(strlen($_POST["currentxp"])<=0){
					$currentxp = "Empty field!";
					$korras = 0;
				}

				$currentxp = $_POST["currentxp"];

			}
			if(isSet($_POST["totalxp"])){
				if(strlen($_POST["totalxp"])<=0){
					$totalxp = "Empty field!";
					$korras = 0;
				}

				$totalxp = $_POST["totalxp"];

			}
			
			if($korras == 1){
						
				if (isSet($_POST['submit'])){
				$name_sisu = mysqli_real_escape_string($con, $_POST['name_sisu']);
				$charname_sisu = mysqli_real_escape_string($con, $_POST['charname_sisu']);
				$description_sisu = mysqli_real_escape_string($con, $_POST['description_sisu']);
				$demeanour_sisu = mysqli_real_escape_string($con, $_POST['demeanour_sisu']);
				$speciality_sisu = mysqli_real_escape_string($con, $_POST['speciality_sisu']);
				$Weapon_Skill = mysqli_real_escape_string($con, $_POST["Weapon_Skill"]);
				$Ballistic_Skill = mysqli_real_escape_string($con, $_POST["Ballistic_Skill"]);
				$Strength = mysqli_real_escape_string($con, $_POST["Strength"]);
				$Toughness = mysqli_real_escape_string($con, $_POST["Toughness"]);
				$Agility = mysqli_real_escape_string($con, $_POST["Agility"]);
				$Intelligence = mysqli_real_escape_string($con, $_POST["Intelligence"]);
				$Perception = mysqli_real_escape_string($con, $_POST["Perception"]);
				$Willpower = mysqli_real_escape_string($con, $_POST["Willpower"]);
				$Fellowship = mysqli_real_escape_string($con, $_POST["Fellowship"]);
				$currentfate = mysqli_real_escape_string($con, $_POST["currentfate"]);
				$totalfate = mysqli_real_escape_string($con, $_POST["totalfate"]);
				$halfmov = mysqli_real_escape_string($con, $_POST["halfmov"]);
				$fullmov = mysqli_real_escape_string($con, $_POST["fullmov"]);
				$chargemov = mysqli_real_escape_string($con, $_POST["chargemov"]);
				$runmov = mysqli_real_escape_string($con, $_POST["runmove"]);
				$Talents1 = mysqli_real_escape_string($con, $_POST["Talents1"]);
				$Talents2 = mysqli_real_escape_string($con, $_POST["Talents2"]);
				$Talents3 = mysqli_real_escape_string($con, $_POST["Talents3"]);
				$Talents4 = mysqli_real_escape_string($con, $_POST["Talents4"]);
				$Talents5 = mysqli_real_escape_string($con, $_POST["Talents5"]);
				$Insanity = mysqli_real_escape_string($con, $_POST["Insanity"]);
				$Disorder = mysqli_real_escape_string($con, $_POST["Disorder"]);
				$Corruption = mysqli_real_escape_string($con, $_POST["Corruption"]);
				$Comrade = mysqli_real_escape_string($con, $_POST["Comrade"]);
				$psychicpow = mysqli_real_escape_string($con, $_POST["psychicpow"]);
				$psychicrat = mysqli_real_escape_string($con, $_POST["psychicrat"]);
				$currentxp = mysqli_real_escape_string($con, $_POST["currentxp"]);
				$totalxp = mysqli_real_escape_string($con, $_POST["totalxp"]);
				
				}
				$sql="INSERT INTO profile (name, charname, description, demeanour, speciality) VALUES ('$name_sisu', '$charname_sisu', '$description_sisu', '$demeanour_sisu', '$speciality_sisu')";
				$sql2="INSERT INTO characteristics (ws, bs, s, t, ag, i, per, wp, fel) VALUES ('$Weapon_Skill', '$Ballistic_Skill', '$Strength', '$Toughness', '$Agility', '$Intelligence', '$Perception', '$Willpower', '$Fellowship')";
				$sql4="INSERT INTO fate (current, total) VALUES ('$currentfate', '$totalfate')";
				$sql3="INSERT INTO movement (half, full, charge, run) VALUES ('$halfmov', '$fullmov', '$chargemov', '$runmov')";
				$sql5="INSERT INTO character_talents (talentid1, talentid2, talentid3, talentid4, talentid5) VALUES ('$Talents1', '$Talents2', '$Talents3', '$Talents4', '$Talents5')";
				$sql6="INSERT INTO insanity (insanity, disorder) VALUES ('$Insanity', '$Disorder')";
				$sql7="INSERT INTO corruption (corruption) VALUES ('$Corruption')";
				$sql8="INSERT INTO comrade (name) VALUES ('$Comrade')";
				$sql9="INSERT INTO psychic (ability, rating) VALUES ('$psychicpow', '$psychicrat')";
				$sql10="INSERT INTO xp (current, total) VALUES ('$currentxp', '$totalxp')";
				
				
				if (!mysql_query($sql, $con)) {
				  die('Error: ' . mysql_error($con));
				}
				
				if (!mysql_query($sql2, $con)) {
				  die('Error: ' . mysql_error($con));
				}
				
				if (!mysql_query($sql4, $con)) {
				  die('Error: ' . mysql_error($con));
				}
				
				if (!mysql_query($sql3, $con)) {
				  die('Error: ' . mysql_error($con));
				}
				
				if (!mysql_query($sql5, $con)) {
				  die('Error: ' . mysql_error($con));
				}
				
				if (!mysql_query($sql6, $con)) {
				  die('Error: ' . mysql_error($con));
				}
				
				if (!mysql_query($sql7, $con)) {
				  die('Error: ' . mysql_error($con));
				}
				
				if (!mysql_query($sql8, $con)) {
				  die('Error: ' . mysql_error($con));
				}
				
				if (!mysql_query($sql9, $con)) {
				  die('Error: ' . mysql_error($con));
				}
				
				if (!mysql_query($sql10, $con)) {
				  die('Error: ' . mysql_error($con));
				}
				header("Location: main.php?salvestatud");
				
				}
			
						
			if(isSet($_GET["salvestatud"])){
			
				echo "<h1>Character created and saved to database!</h1>";
				
			}
			
			if (mysqli_connect_errno()) {
				echo "Failed to connect to MySQL: " . mysqli_connect_error();
			}
			
		?>
		<form method="POST" align="left" action="main.php">	
			<fieldset>
			<input type="text" placeholder="Player name" name="name" size="40" value="<?php echo $name_sisu; ?>" ><span style="color:red;"><?php echo $name; ?></span></br>
			<input type="text" placeholder="Character name" name="charname" size="40" value="<?php echo $charname_sisu; ?>" ><span style="color:red;"><?php echo $charname; ?></span></br>
			<input type="text" placeholder="Description" name="description" size="40" value="<?php echo $description_sisu; ?>" ><span style="color:red;"><?php echo $description; ?></span></br>
			<input type="text" placeholder="Demeanour" name="demeanour" size="40" value="<?php echo $demeanour_sisu; ?>" ><span style="color:red;"><?php echo $demeanour; ?></span></br>
				<select name="speciality" id="speciality">
				   <option value="0" style="display:none;">--Speciality--</option>
				   <option value="Heavy Gunner">Heavy Gunner</option>
				   <option value="Medic">Medic</option>
				   <option value="Operator">Operator</option>
				   <option value="Sergeant">Sergeant</option>
				   <option value="Weapon Specialist">Weapon Specialist</option>
				   <option value="Commissar">Commissar</option>
				   <option value="Ministorum Priest">Ministorum Priest</option>
				   <option value="Ogryun">Ogryun</option>
				   <option value="Ratling">Ratling</option>
				   <option value="Sanctioned Psyker">Sanctioned Psyker</option>
				   <option value="Storm Trooper">Storm Trooper</option>
				   <option value="Tech-Priest Enginseer">Tech-Priest Enginseer</option>
				 </select name="speciality" id="speciality" value="<?php echo $speciality_sisu; ?>" ><span style="color:red;"><?php echo $speciality; ?></span></br>
				 <div id="Esimene">
					 <table>
						 <tr align="left">
							<td><b>Weapon Skill (WS)</b></td>
							<td><b>Ballistic Skill (BS)</b></td>
							<td><b>Strength (S)</b></td>
							<td><b>Toughness (T)</b></td>
							<td><b>Agility (Ag)</b></td>
							<td><b>Intelligence (Int)</b></td>
							<td><b>Perception (Per)</b></td>
							<td><b>Willpower (WP)</b></td>
							<td><b>Fellowship (Fel)</b></td>
						 </tr>
						 <tr align="center">
							<td><input type="number" placeholder="Weapon Skill (WS)" name="Weapon_Skill" readonly value="<?php echo rand(2, 20)+20?>"></td>
							<td><input type="number" placeholder="Ballistic Skill (BS)" name="Ballistic_Skill" readonly value="<?php echo rand(2, 20)+20?>"></td>
							<td><input type="number" placeholder="Strength (S)" name="Strength" readonly value="<?php echo rand(2, 20)+20?>"></td>
							<td><input type="number" placeholder="Toughness (T)" name="Toughness" readonly value="<?php echo rand(2, 20)+20?>"></td>
							<td><input type="number" placeholder="Agility (Ag)" name="Agility" readonly value="<?php echo rand(2, 20)+20?>"></td>
							<td><input type="number" placeholder="Intelligence (Int)" name="Intelligence" readonly value="<?php echo rand(2, 20)+20?>"></td>
							<td><input type="number" placeholder="Perception (Per)" name="Perception" readonly value="<?php echo rand(2, 20)+20?>"></td>
							<td><input type="number" placeholder="Willpower (WP)" name="Willpower" readonly value="<?php echo rand(2, 20)+20?>"></td>
							<td><input type="number" placeholder="Fellowship (Fel)" name="Fellowship" readonly value="<?php echo rand(2, 20)+20?>"></td></br></br>
						</tr>
					</table><br>
				</div>
				<div id="Viies">
					<table border="1">
						<tr>
							<td><b>Skill name</b></td>
							<td><b>Trained</b></td>
							<td><b>+10</b></td>
							<td><b>+20</b></td>
							<td><b>+30</b></td>
						</tr>
						<?php
							while($stmt->fetch()){
								
								echo "
								<tr>
									<td>$skills</td>
									<td>$trained</td>
									<td>$ten</td>
									<td>$twenty</td>
									<td>$thirty</td>
								</tr>
								";
							}
						?>
					</table>
				</div>
				<div id="Kolmas">
					<table width="50%" border="0">
						<tr align="center">
							<td colspan="5"><b>Talents</b></td>
						</tr>
						<tr align="center">
							<td><input type="text" size="30" placeholder="Talents1" name="Talents1" value="<?php $query = "SELECT talents FROM if14_markuss.talents order by rand() limit 1"; 
							$result = mysql_query($query) or die(mysql_error());
							while($row = mysql_fetch_array($result)){
								echo $row['talents'];
							} ?>"/></td>
							<td><input type="text" size="30" placeholder="Talents2" name="Talents2" value="<?php $query = "SELECT talents FROM if14_markuss.talents order by rand() limit 1"; 
							$result = mysql_query($query) or die(mysql_error());
							while($row = mysql_fetch_array($result)){
								echo $row['talents'];
							} ?>"/></td>
							<td><input type="text" size="30" placeholder="Talents3" name="Talents3" value="<?php $query = "SELECT talents FROM if14_markuss.talents order by rand() limit 1"; 
							$result = mysql_query($query) or die(mysql_error());
							while($row = mysql_fetch_array($result)){
								echo $row['talents'];
							} ?>"/></td>
							<td><input type="text" size="30" placeholder="Talents4" name="Talents4" value="<?php $query = "SELECT talents FROM if14_markuss.talents order by rand() limit 1"; 
							$result = mysql_query($query) or die(mysql_error());
							while($row = mysql_fetch_array($result)){
								echo $row['talents'];
							} ?>"/></td>
							<td><input type="text" size="30" placeholder="Talents5" name="Talents5" value="<?php $query = "SELECT talents FROM if14_markuss.talents order by rand() limit 1"; 
							$result = mysql_query($query) or die(mysql_error());
							while($row = mysql_fetch_array($result)){
								echo $row['talents'];
							} ?>"/></td>
						</tr>
					</table><br>
				</div>
				<div id="Teine">
					<table width="30%" border="0">
						<tr align="center">
							<td colspan="2" style=""><b>Wounds</b></td>
							<td colspan="2"><b>Fate Points</b></td>
							<td colspan="2"><b>Insanity</b></td>
							<td><b>Corruption</b></td>
							<td colspan="4"><b>Movement</b></td>
						</tr>
						<tr align="center">
							<td><input type="number" placeholder="Wounds" name="Wounds" min="11" max="15" value="<?php echo 10+ rand(1, 5)?>"/></td>
							<td><input type="text" size="2" value="<?php echo '/15'?>" readonly></td>
							<td><input type="number" placeholder="Fate Points" name="currentfate" min="1" max="4" value="<?php echo rand(1, 4)?>"></td>
							<td><input type="text" size="2" name="totalfate" value="<?php echo '/4'?>" readonly></td>
							<td align="right"><input type="number" placeholder="Insanity" name="Insanity" min="0" value="<?php echo 0?>"></td>
							<td align="left"><input type="text" placeholder="Disorder" name="Disorder" value=""></td>
							<td><input type="number" placeholder="Corruption" name="Corruption" min="0" value="<?php echo 0?>"></td>
							<td align="right"><input type="number" placeholder="Half move" name="halfmov" min="0" value="<?php echo ''?>"></td>
							<td align="center"><input type="number" placeholder="Full move" name="fullmov" min="0" value="<?php echo ''?>"></td>
							<td align="center"><input type="number" placeholder="Charge move" name="chargemov" min="0" value="<?php echo ''?>"></td>
							<td align="left"><input type="number" placeholder="Run move" name="runmov" min="0" value="<?php echo ''?>"></td>
						</tr>
					</table><br>
				</div>
				<div id="Neljas">
					<table width="60%" border="0">
						<tr align="left">
							<td><b>Comrade</b></td>
							<td><b>Psychic Powers</b></td>
							<td><b>Psychic Rating</b></td>
							<td><b>Current Experience</b></td>
							<td><b>Total Experience</b></td>
						</tr>
						<tr align="left">
							<td><input type="text" placeholder="Comrade" name="comrade" value=""></td>
							<td><input type="text" placeholder="Pshychic Powers" name="psychicpow" value=""></td>
							<td><input type="number" placeholder="Pshychic Rating" name="psychicrat" min="0" value=""></td>
							<td><input type="number" placeholder="Current Experience" name="currentxp" min="0" value=""></td>
							<td><input type="number" placeholder="Total Experience" name="totalxp" min="0" value="600"></td>
						</tr>
					</table><br>
			<input type="submit" class="btn btn-default btn-lrg" role="button" value="Save/Generate"/>
			</div>
			</fieldset>
		</form>
		</section>
	</body>
</html>