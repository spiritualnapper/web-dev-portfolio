var $logo = $('#my_name');
$(document).scroll(function() {
    if($(this).scrollTop()> 0)
    {   //alert("scop");
 //  $logo.css({display: $(this).scrollTop() > 100? "block":"none"});
     $('#my_name').css("display", "block");
    }else{
         $('#my_name').css("display", "none");
    }

});
