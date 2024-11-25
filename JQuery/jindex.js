$(document).ready(function()
{
     $('.head1').html("hello everyone this is js class")
     $('.head1').css("background-color","red")

     let a = $('#head2')
     a.html("praveen")
     a.css({
        "color":"green",
        "background-color":"red",
        "padding":"20px",
        "text-shadow":"2px 0px 2px black"
     })
  

     $('#btn').click(function(){
        $('#para').slideUp(2000)
     })


     $('#btn1').click(function()
    {
        $('#para').slideDown(2000)
    })


    $('#btn2').click(function()
{
    $('#para').slideToggle(2000)
})


    $('#btn3').click(function()
{
    $('#para').fadeIn(2000)
})


    $('#btn4').click(function()
{
    $('#para').fadeOut(1000)
})


    $('#btn5').click(function()
{
    $('#para').fadeToggle(1000)
})

  

}

)