const faqHeads = document.querySelectorAll(".faq-head");
const faqAnswers = document.querySelectorAll(".faq-answer");
const sliderLeftBut = document.querySelector(".slider-btn--left");
const sliderRightBut = document.querySelector(".slider-btn--right");
const slider = document.querySelector(".shows-grid");

// Faq
const headsInit = function () {
  faqHeads.forEach((head, i) => {
    head.dataset.ques = i;
  });
};
headsInit();

const answersInit = function () {
  faqAnswers.forEach((answer, i) => {
    answer.id = `ans--${i}`;
  });
};
answersInit();

faqHeads.forEach((head) => {
  head.addEventListener("click", (e) => {
    const question = e.target.closest(".faq-head");
    const questionId = question.dataset.ques;
    const questionImg = question.querySelector("img");
    const ans = document.querySelector(`#ans--${questionId}`);
    console.log(questionImg);
    questionImg.style.transform = "rotate(45deg)";
    ans.classList.contains("open")
      ? (questionImg.style.transform = "rotate(0deg)")
      : (questionImg.style.transform = "rotate(45deg)");
    ans.classList.toggle("open");
  });
});

// Slider
sliderRightBut.addEventListener("click", () => {
  slider.scrollLeft += slider.clientWidth;
});
sliderLeftBut.addEventListener("click", () => {
  slider.scrollLeft -= slider.clientWidth;
});
