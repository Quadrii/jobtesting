var listA = [{name:'1', value:'1'}, {name:'5', value:'5'}, {name:'10', value:'10'}];

 var listB = [{name:'20', value:'20'}, {name:'30', value:'30'}];

  $(document).ready( function() {
      $("input[name='selectedwebsite']").on('change',function() {
          
          if($(this).is(':checked') && $(this).val() == 'static')
          {
            $('#describe').empty()
            $.each(listA, function(index, value) {
             $('#describe').append('<option value="'+value.value+'">'+value.name+'</option>');
            });                  
          }
          else if($(this).is(':checked') && $(this).val() == 'advanced')
          {
            $('#describe').empty()
            $.each(listB, function(index, value) {
             $('#describe').append('<option value="'+value.value+'">'+value.name+'</option>');
            }); 
          }
          else
          {
              
          }
         });
    });  

$('#option_9').on('click', function() { 
  if ($('#option_9').is(':checked')) { 
    $('#field_19').closest('.editfield').show();
  } else {
    $('#field_19').closest('.editfield').hide();
  }
});


// var radio_buttons = document.getElementsByName("selectedwebsite");
// var dropdowns = document.getElementsByTagName("select");

// for (var i = 0; i < radio_buttons.length; i++) {
//     radio_buttons[i].addEventListener("change", setDropDown);
// }

// function setDropDown() {
//     setDropDownsForNoDisplay();
//     if (this.checked) {
//         setDropDownForDisplay(this.value);         
//     }
// }

// function setDropDownsForNoDisplay() {
//     for (var i = 0; i < dropdowns.length; i++) {
//         dropdowns[i].classList.add("no-display");
//     }
// }

// function setDropDownForDisplay(x) {
//     if (x === "static") {
//         document.getElementById("drop1").classList.remove("no-display");
//     } else if (x === "advanced") {
//         document.getElementById("drop2").classList.remove("no-display");
//     } else if (x === "professional") {
//         document.getElementById("drop3").classList.remove("no-display");
//     }
// }

