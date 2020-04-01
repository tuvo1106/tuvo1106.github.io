$(window).on("load", function() {
  $(".loader .inner").fadeOut(50, function() {
    $(".loader").fadeOut(50)
  })
})

$(document).ready(function() {
  $("#slides").superslides({
    animation: "fade",
    play: 5000,
    pagination: false
  })

  // Lightbox Init
  $(document).on("click", '[data-toggle="lightbox"]', function(event) {
    event.preventDefault()
    $(this).ekkoLightbox()
  })

  var typed = new Typed(".typed", {
    strings: [
      "Student",
      "Software Engineer",
      "Teaching Assistant",
      "Photographer"
    ],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false
  })

  // Init scrollspy
  $("body").scrollspy({ target: "#navigation" })
  // Smooth scrolling
  $("#navigation a").on("click", function(event) {
    if (this.hash !== "") {
      event.preventDefault()
      const hash = this.hash
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          window.location.hash = hash
        }
      )
    }
  })
})
