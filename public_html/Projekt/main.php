<!DOCTYPE HTML>
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<title>Projekt</title>
</head>
<style>
#ta {
    width: 300px;
    line-height: 20px;
}
</style>
<script>
function myFunction() { //Valideerimine vaja lõpetada, et tegemist on numbritega, mitte tekstiga
    var inpObj = document.getElementById("esimene");
    if (inpObj.checkValidity() == false) {
        document.getElementById("esimene").innerHTML = inpObj.validationMessage;
    } else {
        document.getElementById("esimene").innerHTML = "Input OK";
    } 
}

function countLines(){ //Keskväärtus = arvude summa/ridade arv, kus on andmed olemas
	var rows = document.querySelector('textarea').value.split("\n");
	var lines = document.querySelector('textarea').value.split("\n").length;
	//console.log(rows);
	for (i = 0; i < rows.length; i++){ //Tuleb saada ainult andmetega value, mitte tühjad ka
		var sum =(eval(rows.join('+')));		
		//if (typeof rows[i] !== 'undefined' && rows[i] !== null) {
			//console.log(i);
			
		//}
	}
	kv = (sum/i);
	document.getElementById("vArv").innerHTML = lines;
	document.getElementById("keskvaartus").innerHTML = kv;
}

function countRows(){ //Keskväärtus = arvude summa/ridade arv, kus on andmed olemas
	var rows2 = document.querySelector('textarea').value.split("\n");
	var lines2 = document.querySelector('textarea').value.split("\n").length;
	//console.log(rows);
	for (i = 0; i < rows2.length; i++){ //Tuleb saada ainult andmetega value, mitte tühjad ka
		var sum2 =(eval(rows2.join('+')));		
		//if (typeof rows[i] !== 'undefined' && rows[i] !== null) {
			//console.log(i);
			
		//}
	}
	kv2 = (sum2/i);
	document.getElementById("vArv2").innerHTML = lines2;
	document.getElementById("keskvaartus2").innerHTML = kv2;
}
</script>
<body>
    <div id="prof_picture">
        <form id="testForm2">
          <div style="float:left; position:relative; margin-right: 40px">
            <dl>
              <dd>
				<dt>Esimese grupi vastused</dt>
                <textarea style="width:200px; height:50px;" id="esimene" type="textarea" name="esimene" cols="40"/></textarea>
              </dd>
            </dl>
			
			<dl>
              <dd>
                <input type="button" name="arvutaNupp" id="arvutaNupp"  value="Arvuta" onclick="countLines()"/>
              </dd>
            </dl>
				
			<dl>
				Vastuste arv N =<p id="vArv"></p>
				Keskväärtus M = <p id="keskvaartus"></p>
				Standardhälve SD = <p id="standarhalve"></p>
			</dl>
          </div>
		  
		  <div style="float:left; position: relative; margin-left: 40px">
            <dl>
              <dd>
				<dt>Teise grupi vastused</dt>
                <textarea style="width:200px; height:50px;" id="esimene" type="textarea" name="esimene" cols="40"/></textarea>
              </dd>
            </dl>
      
            <dl>
              <dd>
                <input type="button" name="arvutaNupp2" id="arvutaNupp2" value="Arvuta" onclick="countRows()"/>
              </dd>
            </dl>
			
			<dl>
				Vastuste arv N = <p id="vArv2"></p>
				Keskväärtus M = <p id="keskvaartus2"></p>
				Standardhälve SD = <p id="standarhalve2"></p>
			</dl>
			</div>
        </form>
	</div>

</body>
</html>