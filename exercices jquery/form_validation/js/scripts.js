$(document).ready(function() {

$('input[name=otherMember]').click( function(){
if ($('input[name=otherMember]').is(':checked')){
  $('.subscription2').css('display', 'block');
}
else {
  $('.subscription2').css('display', 'none');
}

});




function validateEmail($email){
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	if(!emailReg.test($email)){
		return false;
	}
	else{
		return true;
	}
}

})
