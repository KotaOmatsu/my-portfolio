$(function () {
  // text fade
  $(".main-text").delay(2000).hide().fadeIn(1000);
  // ripples
  $("#share").ripples();
  // slid
  $(".slider").slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
  });

  const IdArray = ["#about", "#works", "#skills", "#share"];

  for (let i = 0; i < IdArray.length; i++) {
    $(`a[href^="${IdArray[i]}"]`).click(function () {
      let speed = 500;
      let href = $(this).attr("href");
      let target = $(href == "#" || href == "" ? "html" : href);
      let position = target.offset().top;
      $("html, body").animate({ scrollTop: position }, speed, "swing");
      return false;
    });
  }

  // top button
  const btn = $(".button");
  $(window).on("load scroll", function () {
    if ($(this).scrollTop() > 100) {
      btn.addClass("active");
    } else {
      btn.removeClass("active");
    }
  });

  btn.on("click", function () {
    $("body,html").animate({
      scrollTop: 0,
    });
  });
});
//-------------------------------------
// top scroll
//-------------------------------------
const SiteTitle = $(".site-title");
SiteTitle.on("click", function () {
  $("body,html").animate({
    scrollTop: 0,
  });
});
// --------------------------------
//Scroll Fade
// -------------------------------

const MainFade = {
  origin: "top",
  distance: "100px",
  duration: 1000,
  delay: 400,
};
sr.reveal("#mainvisual,#share", MainFade, 100);

const HeaderFade = {
  origin: "top",
  distance: "100px",
  duration: 1000,
  delay: 1000,
};
sr.reveal("#header", HeaderFade, 100);

const SectionTitleFade = {
  duration: 2500,
  delay: 600,
};
sr.reveal(".section-title", SectionTitleFade, 100);

const ContentsFade = {
  duration: 2500,
  delay: 2000,
};
sr.reveal(".slider", ContentsFade, 100);

const TextFade = {
  origin: "left",
  distance: "100px",
  duration: 1000,
  delay: 2600,
};
sr.reveal(".prof-text", TextFade, 100);

const ImageFade = {
  origin: "right",
  distance: "100px",
  duration: 1000,
  delay: 2000,
};
sr.reveal(".prof-img", ImageFade, 100);

const SkillFade = {
  origin: "top",
  distance: "100px",
  rotate: { x: 0, y: 0, z: 0 },
  duration: 1500,
  delay: 2500,
};
sr.reveal(".images", SkillFade, 100);

const SnsFade = {
  origin: "bottom",
  distance: "100px",
  rotate: { x: 0, y: 0, z: 0 },
  duration: 1200,
  delay: 2500,
};
sr.reveal(".snsbtniti", SnsFade, 100);
