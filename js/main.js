$(function () {
  $(".main-text").delay(4000).hide().fadeIn(1400);
  $("#share").ripples();
  $(".slider").slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
  });

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
const SiteTitle = $(".site-title");
SiteTitle.on("click", function () {
  $("body,html").animate({
    scrollTop: 0,
  });
});
const about = $(".about");
about.on("click", function () {
  $("body,html").animate({
    scrollTop: 875,
  });
});
const works = $(".works");
works.on("click", function () {
  $("body,html").animate({
    scrollTop: 1640,
  });
});
const skills = $(".skills");
skills.on("click", function () {
  $("body,html").animate({
    scrollTop: 2580,
  });
});
const share = $(".share");
share.on("click", function () {
  $("body,html").animate({
    scrollTop: 3480,
  });
});

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

const MainFade = {
  origin: "top",
  distance: "100px",
  duration: 1000,
  delay: 1800,
};
sr.reveal("#mainvisual,#share", MainFade, 100);

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

sr.reveal(".images,.inner", SkillFade, 100);

const SnsFade = {
  origin: "bottom",
  distance: "100px",
  rotate: { x: 0, y: 0, z: 0 },
  duration: 1200,
  delay: 2500,
};

sr.reveal(".snsbtniti", SnsFade, 100);
