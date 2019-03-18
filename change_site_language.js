var changeWords=function(){
var language={
	'en':{
		'welcome':'Welcome'
	},
	'ar':{
		'welcome':'مرحبا'
	}
}

return language[localStorage.language];

}

 function defaultLanguageTest(){
	 var language=changeWords();
	 if(localStorage.language == undefined){
		 localStorage.language='ar';
		 var lang=localStorage.language;
		 $('.lang').each(function(index,element){
			$(this).text(language[$(this).attr('key')]);
		});
	 }else{
		 if(localStorage.language == 'ar'){
		  var language=changeWords();
		 $('.lang').each(function(index,element){
			$(this).text(language[$(this).attr('key')]);
		});
		 }
		 if(localStorage.language == 'en'){
			 var language=changeWords();
		 $('.lang').each(function(index,element){
			$(this).text(language[$(this).attr('key')]);
		});
		 }

	 }
 }

$(function(){
	defaultLanguageTest();
});

/*
to use it in HTML page
<html>
<head>
<script src='change_site_language.js'></script>
</head>
<body>
<span class='lang' key='welcome'></span>

<button id='english'>English</button>
<button id='arabic'>Arabic</button>

just added click event listner to change localStorage.language to ar or en.

</body>
</html>



*/