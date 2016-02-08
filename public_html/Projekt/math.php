<?php
	$(document).ready(function(){
	var lht = parseInt($('esimene').css('lineHeight'),10);
	var lines = $('esimene').attr('scrollHeight') / lht;
	console.log(lines);
	})
?>