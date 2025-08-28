export default function updateButtons(page, div, form) {
  const btnPrev = div.querySelector(".btn-1");
  const btnNext = div.querySelector(".btn-2");

  btnPrev.classList.toggle("hidden", page === 0);
  btnNext.textContent = page === form.length - 1 ? "დაასრულე" : "შემდეგი";
}
