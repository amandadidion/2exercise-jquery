$(() =>{
    
    const dropDown = $(".dropDown");
  
    dropDown.hide();
    $('.container').on('click', () => {
      dropDown.slideToggle();
    });
  
    $('#num').on('click', () => {
      $('#letters').hide();
      $('#numbers').show();
      dropDown.slideToggle();
    });
    $('#alpha').on('click', () => {
      $('#numbers').hide();
      $('#letters').show();
      dropDown.slideToggle();
    });
  })
  