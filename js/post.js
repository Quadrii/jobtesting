var listA = [{name:'5', value:'5'}, {name:'10', value:'10'}, {name:'20', value:'20'}];

 var listB = [{name:'30', value:'30'}, {name:'40', value:'40'}];
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


  var hostA = [{name:'small slice', value:'small slice'}, {name:'medium slice', value:'medium slice'}];
  var hostB = [{name:'medium', value:'medium'}, {name:'large', value:'large'}];
  $(document).ready( function() {
      $("input[name='selectedwebsite']").on('change',function() {
      if($(this).is(':checked') && $(this).val() == 'static')
      {
        $('#hosting').empty()
        $.each(hostA, function(index, value) {
         $('#hosting').append('<option value="'+value.value+'">'+value.name+'</option>');
        });                  
      }
      else if($(this).is(':checked') && $(this).val() == 'advanced')
      {
        $('#hosting').empty()
        $.each(hostB, function(index, value) {
         $('#hosting').append('<option value="'+value.value+'">'+value.name+'</option>');
        }); 
      }
      else
      {
      }
    });
 });  
      