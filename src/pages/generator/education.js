import Domo from "@zyrab/domo";

import createFormHeader from "../../components/form-header.js";
import createTextInput from "../../components/input-text.js";
import createSelectOptions from "../../components/select-options.js";

export default async function createEducation() {
  return Domo("fieldset").child([
    createTextInput({
      id: "school",
      label: "სასწვლებელი ",
      placeholder: "სასწვლებელი",
      hint: "მინიმუმ 2 სიმბოლო",
      filter: "min2Symbol",
    }),

    Domo()
      .cls("flex g-2")
      .child([
        createTextInput({
          id: "diploma",
          label: "ხარისხი",
          input: "select",
          filter: "select",
          inside: false,
          options: await createSelectOptions(),
        }),
        ,
        createTextInput({
          type: "date",
          id: "date-of-end",
          label: "დამთავრების რიცხვი",
          filter: "date",
          inside: false,
        }),
      ]),
    createTextInput({
      input: "textarea",
      id: "educationDescription",
      label: "აღწერა",
      placeholder: "განათლების აღწერა",
      filter: "textarea",
    }),
  ]);
}
