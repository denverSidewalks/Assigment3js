var $ = function (id) {
    return document.getElementById(id);
}
var join_list = function () {
	var emailAddress1 = $("email_address1").value;
	var emailAddress2 = $("email_address2").value;
	var isValid = true;
	
	if (emailAddress1 == "") { 
		$("email_address1_error").firstChild.nodeValue = "This field is required.";
		isValid = false;
	} else {
		$("email_address1_error").firstChild.nodeValue = "";
	} 

	if (emailAddress1 !== emailAddress2) { 
		$("email_address2_error").firstChild.nodeValue = "This entry must equal first entry.";
		isValid = false;
	} else {
		$("email_address2_error").firstChild.nodeValue = "";
	}  
	if ($("first_name").value == "") {
		$("first_name_error").firstChild.nodeValue = "This field is required.";
		isValid = false;
	} else {
		$("first_name_error").firstChild.nodeValue = "";
	}  
	
		if ($("last_name").value == "") {
		$("last_name_error").firstChild.nodeValue = "This field is required.";
		isValid = false;
	} else {
		$("first_name_error").firstChild.nodeValue = "";
	}  
	
	if (isValid) {
		$("email_form").submit(); 
		console.log(emailAddress1)
	}
	if (isValid) {
		window.alert( "Thankyou, " + $("first_name").value); 
		console.log($("first_name").value, $("last_name").value) ;
	}
		if (isValid) {
		window.prompt( "Please confirm last name" , $("last_name").value ) ;
		console.log($("last_name").value) ;
	}
	
}

window.onload = function () {
	if ($("#join_list")) {
	$("#join_list").click(join_list);	
	$("email_address1").focus();
	}
    init2()
    init3()
    init4()
    //$("join_list").onclick = console.log('This is the console log method.');
    
    // enter the alert statement of step 11 here
//alert("ict4510 student Russell Erickson");
//console.log('This is the console log method.');

}
/*below is the function for the header and footer*/
function init()
{
var newsidewalk = document.getElementById('jssidewalk');
var newfooter = document.getElementById('jsfooter');

newsidewalk.textContent = "";
newsidewalk.innerHTML += "<h1>DENVER SIDEWALKS</h1>";

newfooter.textContent = "";
newfooter.innerHTML += "<footer><p>&copy; Copyright by Eric</p></footer>";

}
document.addEventListener( "DOMContentLoaded" , init , false ) ;

/*below is the function for the resume*/


var pop ;

function showPop()
{
  pop.style.visibility = "visible" ;
  hideButton.style.visibility = "visible" ;
  showButton.style.visibility  = "hidden";
}

function hidePop()
{
  pop.style.visibility = "hidden" ;
   hideButton.style.visibility = "hidden" ;
  showButton.style.visibility  = "visible" ;
}

var showButton;
var hideButton;

function init2()
{
 pop = document.getElementById( "cobbleLayer") ;
 pop.style.visibility = "hidden" ; 
 showButton = document.getElementById( "cobbleShow" ) ;
 //obj.onclick = showPop ;
 showButton.addEventListener('click', showPop)
 hideButton = document.getElementById( "cobbleHide" ) ;
// obj.onclick = hidePop ;
 hideButton.addEventListener('click', hidePop)
 }
document.addEventListener("DOMContentLoaded2", init , false ) ;

/*below is the function for the resume*/
var pop2 ;

function showPop2()
{
  pop2.style.visibility = "visible" ;
  hideButton2.style.visibility = "visible" ;
  showButton2.style.visibility  = "hidden";
}

function hidePop2()
{
  pop2.style.visibility = "hidden" ;
   hideButton2.style.visibility = "hidden" ;
  showButton2.style.visibility  = "visible" ;
}

var showButton2;
var hideButton2;

function init3()
{
 pop2 = document.getElementById( "asphaltLayer") ;
 pop2.style.visibility = "hidden" ; 
 showButton2 = document.getElementById( "asphaltShow" ) ;
 //obj.onclick = showPop ;
 showButton2.addEventListener('click', showPop2)
 hideButton2 = document.getElementById( "asphaltHide" ) ;
// obj.onclick = hidePop ;
 hideButton2.addEventListener('click', hidePop2);
}
document.addEventListener("DOMContentLoaded3", init , false ) ;


/*below is the function for the resume*/
var pop3 ;

function showPop3()
{
  pop3.style.visibility = "visible" ;
  hideButton3.style.visibility = "visible" ;
  showButton3.style.visibility  = "hidden";
}

function hidePop3()
{
  pop3.style.visibility = "hidden" ;
   hideButton3.style.visibility = "hidden" ;
  showButton3.style.visibility  = "visible" ;
}

var showButton3;
var hideButton3;

function init4()
{
 pop3 = document.getElementById( "crushedLayer") ;
 pop3.style.visibility = "hidden" ; 
 showButton3 = document.getElementById( "crushedShow" ) ;
 //obj.onclick = showPop ;
 showButton3.addEventListener('click', showPop3)
 hideButton3 = document.getElementById( "crushedHide" ) ;
// obj.onclick = hidePop ;
 hideButton3.addEventListener('click', hidePop3)
 }
document.addEventListener("DOMContentLoaded4", init , false ) ;
