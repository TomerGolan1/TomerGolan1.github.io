window.onload = () => {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    //   direction: "vertical",
    loop: true,
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });

  // Stop any playing video when we leave its slide
swiper.on("slideChangeTransitionStart", () => {
  document.querySelectorAll(".swiper-slide video").forEach((vid) => {
    const parentSlide = vid.closest(".swiper-slide");
    if (!parentSlide.classList.contains("swiper-slide-active")) {
      vid.pause();          // stop sound
      vid.currentTime = 0;  // rewind to the start (remove this line if you prefer resume)
    }
  });
});

  const observer = new IntersectionObserver((items) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        item.target.style.transform = "translateY(-10px)";
        item.target.style.opacity = 1;
      } else {
        item.target.style.transform = "translateY(0px)";
        item.target.style.opacity = 0;
        /* If the hidden element is a video, stop it */
        if (item.target.tagName === "VIDEO") {
        item.target.pause();
        item.target.currentTime = 0;   // rewind to the start (optional)
        }
      }
    });
  });

  const allRepoTitles = document.querySelectorAll(".single-repo-title");
  const allSubRepoTitles = document.querySelectorAll(".single-repo-sub-title");
  const allRepoLinks = document.querySelectorAll(".repo-link");
  const images = document.querySelectorAll("img");

  allRepoTitles.forEach((item) => {
    observer.observe(item);
  });

  allSubRepoTitles.forEach((item) => {
    observer.observe(item);
  });

  allRepoLinks.forEach((item) => {
    observer.observe(item);
  });

  images.forEach((item) => {
    observer.observe(item);
  });
  const media = document.querySelectorAll("img, video");
  media.forEach((item) => observer.observe(item));
};
