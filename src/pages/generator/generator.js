import Domo from "@zyrab/domo";

import createPersonalInfo from "./input-files/personal-info.js";
import createExpereience from "./input-files/experience.js";
import createEducation from "./input-files/education.js";
import createPageButtons from "../../components/page-buttons.js";
import createFormHeader from "../../components/form-header.js";

import inputValidator from "../../hendlers/input-validator.js";
import pageHandler from "../../hendlers/page-handler.js";
import addHandler from "../../hendlers/add-handler.js";

export default async function createGenerator() {
  const form = [createPersonalInfo(), createExpereience(), await createEducation()];
  let page = 0;
  let index = 0;
  let header = createFormHeader("პირადი ინფო", 0);
  return Domo("section")
    .onClosest()
    .cls("p-4")
    .on("input", inputValidator)
    .on("change", inputValidator)
    .onClosest("click", {
      ".page-button": (e, btn) => ({ page, header } = pageHandler(e, btn, form, page, header)),
      ".add-button": async (e, btn) => (index = await addHandler(e, btn, index)),
    })
    .child([header, Domo("form").child([form[0], form[1].show(false), form[2].show(false), createPageButtons()])]);
}
