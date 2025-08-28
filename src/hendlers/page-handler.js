import createFormHeader from "../components/form-header.js";

import validatePage from "./utils/validate-page.js";
import updateButtons from "./utils/update-buttons.js";
export default function pageHandler(e, btn, form, page, header) {
  const action = btn.dataset.action;
  if (validatePage(form[page].element) && action === "next") return { page, header };

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

const title = {
  0: "პირადი ინფო",
  1: "გამოცდილება",
  2: "განათლება",
};
