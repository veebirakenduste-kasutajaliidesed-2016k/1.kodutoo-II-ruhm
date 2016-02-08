<link rel="stylesheet" type="text/css" href="stiilid.css">
<?php 
	require_once("config.php");
	$registreerunud = 0;
	if(isSet($_SESSION["id"])){
		header("Location: home.php");
	}
	
	if(isSet($_REQUEST["email"]) AND isSet($_REQUEST["username"])){
		// Uue kasutaja loomine
		
		$notice = $user->addUser(	$_REQUEST["username"],
						$_REQUEST["email"],
						$_REQUEST["password"]
						);
						
		if($notice != ""){
			// Kasutaja loomine ebaõnnestus
			echo $notice;
		}else{
			echo "Kasutaja loodud";
		}
	
	}elseif(isSet($_REQUEST["email"]) AND isSet($_REQUEST["password"])){
		// Kasutaja logib sisse
		$profile = $user->loginUser($_REQUEST["email"], $_REQUEST["password"]);
		
		// Kas õnnestus?
		if(empty($profile)){
			echo "Vale kasutajanimi või parool";
		}else {
			echo "Tere tulemast id:$profile->id nimi:$profile->username";
			
			$_SESSION["id"] = $profile->id;
			$_SESSION["username"] = $profile->username;
			header("Location: home.php");
		}
	}	
?>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Login</title>
	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">

	<!-- Optional theme -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap-theme.min.css">
	
	<style>
	body{
		background-position: center;
		}
	</style>

	<!-- Latest compiled and minified JavaScript -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>
</head>
<body>
	 <div class="container">
		<form class="form-signin" align="center" role="form" action="login.php">
			<h2>Login</h2>
			<input autofocus id="inputEmail" class="form-control" type="email" name="email" placeholder="E-mail">
			<input id="inputPassword" class="form-control" type="password" name="password" placeholder="Password"><br>
			<input  class="btn btn-lg btn-primary btn-block" type="submit" value="Sign in"><br>
			<a href="?create_user" class="btn btn-default btn-sm" role="button">Create User</a>
		</form><br>
		
		<?php if(isSet($_REQUEST["create_user"])): ?>
			<form class="form-signin" align="center" role="form" action="login.php">
				<h2>Create User</h2>
				<input class="form-control" type="text" name="username" id="username" placeholder="Username"><br>
				<br>
				<input id="inputEmail" class="form-control" type="email" name="email" placeholder="E-mail">
				<input id="inputPassword" class="form-control" type="password" name="password" placeholder="Password">
				<input  class="btn btn-lg btn-primary btn-block" type="submit" value="Sign up">
			</form>
		<?php endif; ?>
	</div>
</body>
</html>