import Domo from "@zyrab/domo";

import createPersonalInfo from "./personal-info.js";
import createExpereience from "./experience.js";
import createEducation from "./education.js";
import createPageButtons from "../../components/page-buttons.js";
import createFormHeader from "../../components/form-header.js";

import inputValidator from "../../hendlers/input-validator.js";
import pageHandler from "../../hendlers/page-handler.js";

export default async function createGenerator() {
  const form = [createPersonalInfo(), createExpereience(), await createEducation()];
  let page = 0;
  let header = createFormHeader("პირადი ინფო", 0);
  return Domo("section")
    .onClosest()
    .cls("p-4")
    .on("input", inputValidator)
    .on("change", inputValidator)
    .onClosest("click", {
      ".page-button": (e, btn) => ({ page, header } = pageHandler(e, btn, form, page, header)),
    })
    .child([header, Domo("form").child([form[0], form[1].show(false), form[2].show(false), createPageButtons()])]);
}
