import Domo from "@zyrab/domo";

import eduTemplate from "./edu-template.js";
import createAddButton from "../../../components/add-button.js";

export default async function createEducation(edus) {
  const eduNodes = await Promise.all(edus.map((edu, i) => eduTemplate(edu, i)));

  return Domo("fieldset")
    .id("fieldset-2")
    .child([...eduNodes, createAddButton("სხვა სასწვლებელის დამატება", "edu")]);
}
