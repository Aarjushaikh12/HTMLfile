 $(document).ready(function()
 {
    $('#menu').click(function()
    {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

        $(window).on('scroll load',function()
        {

            $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
    });

});

document.querySelectorAll("img").forEach((item) => {
    item.addEventListener("click", (event) => {
      const image = event.target.getAttribute("src");
      event.target.setAttribute("src", image);
    });
  });