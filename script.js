// Add smooth scrolling to all links
$("a").on("click", function(event) {
    event.preventDefault();
    var hash = this.hash;
    $("html, body").animate({
        scrollTop: $(hash).offset().top
    }, 800, function() {
        window.location.hash = hash;
    });
});

// Add active class to nav links on scroll
$(window).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    $(".nav li a").each(function(i) {
        if ($(this).attr("href") !== "#" && $(this).position().top <= scrollDistance) {
            $(".nav li a").removeClass("active");
            $(this).addClass("active");
        }
    });
}).scroll();

// Add smooth scrolling to the 'Back to Top' link
$("#back-to-top").on("click", function(event) {
    event.preventDefault();
    $("html, body").animate({
        scrollTop: 0
    }, 800);
});

function seemore() {
  var text = document.getElementById("commands");
  var button = document.getElementById("more");
  if (text.style.display === "none") {
    text.style.display = "block";
    button.innerHTML = "See Less";
  }
  else {
    text.style.display = "none";
    button.innerHTML = "See More..";
  }
}