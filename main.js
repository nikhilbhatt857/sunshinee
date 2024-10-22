document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".main-nav ul");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("mobile");
  hamburger.classList.toggle("active");
});

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    let modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.top = "50%";
    modal.style.left = "50%";
    modal.style.transform = "translate(-50%, -50%)";
    modal.style.backgroundColor = "#fff";
    modal.style.padding = "20px";
    modal.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
    modal.innerHTML = "<h3>Thank you for contacting us!</h3>";

    let closeBtn = document.createElement("button");
    closeBtn.innerHTML = "Close";
    closeBtn.style.marginTop = "10px";
    closeBtn.onclick = function () {
      document.body.removeChild(modal);
    };
    modal.appendChild(closeBtn);

    document.body.appendChild(modal);
  });

let currentPosition = 0;
const blogsWrapper = document.querySelector(".blogs-wrapper");
const blogCount = document.querySelectorAll(".blog").length;
const blogsPerView = 2;
const maxPosition = blogCount - blogsPerView;

// Slide to the right
function slideRight() {
  if (currentPosition < maxPosition) {
    currentPosition++;
    blogsWrapper.style.transform = `translateX(-${currentPosition * 50}%)`;
  }
}

function slideLeft() {
  if (currentPosition > 0) {
    currentPosition--;
    blogsWrapper.style.transform = `translateX(-${currentPosition * 50}%)`;
  }
}

document.querySelector(".btn-view-all").addEventListener("click", function () {
  blogsWrapper.style.transform = "translateX(0)"; // Reset to show all blogs
  blogsWrapper.style.transition = "none"; // Disable sliding animation
});

const storyList = document.querySelector('.story-list');
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');

// Set a fixed width for each scroll, matching the width of a card
const scrollAmount = document.querySelector('.story-card').offsetWidth + 20; // Adjust for padding/margins

rightArrow.addEventListener('click', () => {
  storyList.scrollBy({
    left: scrollAmount, 
    behavior: 'smooth'
  });
});

leftArrow.addEventListener('click', () => {
  storyList.scrollBy({
    left: -scrollAmount,
    behavior: 'smooth'
  });
});
