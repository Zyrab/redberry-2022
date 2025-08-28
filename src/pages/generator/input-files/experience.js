import Domo from "@zyrab/domo";

import expTemplate from "../../../components/exp-template.js";
import createAddButton from "../../../components/add-button.js";

export default function createExpereience(index = 0) {
  return Domo("fieldset")
    .id("fieldset-1")
    .child([expTemplate(index), createAddButton("მეტი გამოცდილების დამატება", "add-exp")]);
}
