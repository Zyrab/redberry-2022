import Domo from "@zyrab/domo";

import createTextInput from "../../components/input-text.js";
import eduTemplate from "../../components/edu-template.js";
import createAddButton from "../../components/add-button.js";

export default async function createEducation() {
  return Domo("fieldset")
    .id("fieldset-2")
    .child([await eduTemplate(0), createAddButton("სხვა სასწვლებელის დამატება", "add-edu")]);
}
