import Domo from "@zyrab/domo";
import createSelectOptions from "../../../components/select-options.js";
import createTextInput from "../../../components/input-text.js";

export default async function eduTemplate(index) {
  const content = {
    school: {
      id: `school-${index}`,
      label: "სასწვლებელი ",
      placeholder: "სასწვლებელი",
      hint: "მინიმუმ 2 სიმბოლო",
      filter: "min2Symbol",
    },
    diploma: {
      id: `diploma-${index}`,
      label: "ხარისხი",
      input: "select",
      filter: "select",
      inside: false,
      options: await createSelectOptions(),
    },
    dateOfEnd: {
      type: "date",
      id: `date-of-end-${index}`,
      label: "დამთავრების რიცხვი",
      filter: "date",
      inside: false,
    },
    eduDescription: {
      input: "textarea",
      id: `edu-description-${index}`,
      label: "აღწერა",
      placeholder: "განათლების აღწერა",
      filter: "textarea",
    },
  };
  return Domo()
    .cls("flex col g-2")
    .child([
      createTextInput(content.school),
      Domo()
        .cls("flex g-2")
        .child([createTextInput(content.diploma), createTextInput(content.dateOfEnd)]),
      createTextInput(content.eduDescription),
      Domo("hr").cls("field-hr"),
    ]);
}
