
console.log("Index is loading correctly!");


$('.card').click(function(){
  let index = $(this).index()
  let currentCard = $('.card').eq(index)
  let currentBody = $(`.card:eq(${index}) .card-body`)

  //if(currentBody.css('display') == 'block') {
  //  currentBody.slideUp()
  //} else {
  //  $('.card-body').slideUp()
  //  currentBody.slideDown()
  //}
  
  if(currentCard.hasClass('active')) {
    currentBody.slideUp()
  } else {
    currentBody.slideDown()
  }

  currentCard.toggleClass('active')

})