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
