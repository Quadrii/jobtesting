var FormStuff = {
  init: function() {
    this.applyConditionalRequired();
    this.bindUIActions();
  },
  
  bindUIActions: function() {
    $("input[type='radio'], input[type='checkbox']").on("change", this.applyConditionalRequired);
  },
  
  applyConditionalRequired: function() {
    
    $(".require-if-active").each(function() {
      var el = $(this);
      if ($(el.data("require-pair")).is(":checked")) {
        el.prop("required", true);
      } else {
        el.prop("required", false);
      }
    });
    
  }
  
};
FormStuff.init();

var radio_buttons = document.getElementsByName("group");
var dropdowns = document.getElementsByTagName("select");

for (var i = 0; i < radio_buttons.length; i++) {
    radio_buttons[i].addEventListener("change", setDropDown);
}

function setDropDown() {
    setDropDownsForNoDisplay();
    if (this.checked) {
        setDropDownForDisplay(this.value);        
    }
}

function setDropDownsForNoDisplay() {
    for (var i = 0; i < dropdowns.length; i++) {
        dropdowns[i].classList.add("no-display");
    }
}

function setDropDownForDisplay(x) {
    if (x === "1") {
        document.getElementById("drop1").classList.remove("no-display");
    } else if (x === "2") {
        document.getElementById("drop2").classList.remove("no-display");
    } else if (x === "3") {
        document.getElementById("drop3").classList.remove("no-display");
      }
    }


    jQuery(document).ready(function() {
    jQuery('.tabs .tab-links a').on('click', function(e)  {
        var currentAttrValue = jQuery(this).attr('href');
 
        // Show/Hide Tabs
        jQuery('.tabs ' + currentAttrValue).show().siblings().hide();
 
        // Change/remove current tab to active
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
 
        e.preventDefault();
    });
});


  var website_prices = new Array();
      website_prices["None"]=0;
      website_prices["five"]=5;
      website_prices["ten"]=5;
      website_prices["thirty"]=7;
      website_prices["fifty"]=8;
      website_prices["sixty"]=10;
      website_prices["seventy"]=5;

function websitePrice () {
  var cakeSelect = document.getElementById('drop1')
  return filling_prices[cakeSelect.value];
}
