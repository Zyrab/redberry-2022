import Domo from "@zyrab/domo";

import createPersonalInfo from "./input-files/personal-info.js";
import createExpereience from "./input-files/experience.js";
import createEducation from "./input-files/education.js";
import createPageButtons from "../../components/page-buttons.js";
import createFormHeader from "../../components/form-header.js";

import createPreviewe from "./preview/preview.js";

import inputValidator from "../../hendlers/input-validator.js";
import pageHandler from "../../hendlers/page-handler.js";
import addHandler from "../../hendlers/add-handler.js";
import previewHandler from "../../hendlers/preview-handler.js";
import saveToLocalStorage from "../../hendlers/save-to-local-storage.js";

export default async function createGenerator() {
  const data = loadFromLocalStorage();
  const form = [createPersonalInfo(data.info), createExpereience(data.exp), await createEducation(data.edu)];

  let page = 0;
  let indices = { exp: data?.exp?.length - 1 || 0, edu: data?.edu?.length - 1 || 0 };
  let header = createFormHeader("პირადი ინფო", 0);

  return Domo("section")
    .onClosest()
    .cls("p-4")
    .on("input", (e) => {
      inputValidator(e);
      previewHandler(e);
    })
    .on("change", async (e) => {
      inputValidator(e);
      await saveToLocalStorage(e, data);
    })
    .onClosest("click", {
      ".page-button": (e, btn) => ({ page, header } = pageHandler(e, btn, form, page, header)),
      ".add-button": async (e, btn) => (indices = await addHandler(e, btn, indices)),
    })
    .child([
      Domo("form").child([header, form[0], form[1].show(false), form[2].show(false), createPageButtons()]),
      createPreviewe(data),
    ]);
}
function loadFromLocalStorage() {
  const raw = localStorage.getItem("cv-data");
  return raw ? JSON.parse(raw) : { edu: [""], exp: [""], info: {} };
}
