jQuery("input, textarea").blur(function(){
    if (jQuery(this).val()!="") {
      jQuery(this).addClass("active");
    } else {
      jQuery(this).removeClass("active");
    }
  })