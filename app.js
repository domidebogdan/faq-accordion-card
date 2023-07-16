const questions = document.querySelectorAll(".item");
questions.forEach((question) => {
  question.addEventListener("click", () => {
    if (question.classList.contains("active")) {
      question.classList.toggle("active");
    } else {
      questions.forEach((question) => question.classList.remove("active"));
      question.classList.add("active");
    }
  });
});
