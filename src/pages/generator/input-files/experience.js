import Domo from "@zyrab/domo";

import expTemplate from "./exp-template.js";
import createAddButton from "../../../components/add-button.js";

export default function createExpereience(exps) {
  return Domo("fieldset")
    .id("fieldset-1")
    .child([exps.map((e, i) => expTemplate(e, i)), createAddButton("მეტი გამოცდილების დამატება", "exp")]);
}
