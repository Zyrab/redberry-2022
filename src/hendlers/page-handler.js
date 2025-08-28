import createFormHeader from "../components/form-header.js";

export default function pageHandler(e, btn, form, page, header) {
  const action = btn.dataset.action;
  if (action === "next") {
    if (page === form.length - 1) {
      console.log("Submit or Finish logic here");
      return { page, header };
    }
    form[page].show(false);
    page++;
    form[page].show(true, "flex");
  } else if (action === "prev") {
    if (page === 0) return;
    form[page].show(false);
    page--;
    form[page].show(true, "flex");
  }

  updateButtons(page, btn.closest("div"), form);
  header = header.replace(header.build(), createFormHeader(title[page], page));
  return { page, header };
}

function updateButtons(page, div, form) {
  const btnPrev = div.querySelector(".btn-1");
  const btnNext = div.querySelector(".btn-2");

  btnPrev.classList.toggle("hidden", page === 0);
  btnNext.textContent = page === form.length - 1 ? "დაასრულე" : "შემდეგი";
}

const title = {
  0: "პირადი ინფო",
  1: "გამოცდილება",
  2: "განათლება",
};
