import Domo from "@zyrab/domo";
import createSelectOptions from "../../../components/select-options.js";
import createTextInput from "../../../components/input-text.js";

export default async function eduTemplate(edu, index) {
  const content = {
    school: {
      id: `edu-school-${index}`,
      label: "სასწვლებელი ",
      placeholder: "სასწვლებელი",
      hint: "მინიმუმ 2 სიმბოლო",
      filter: "min2Symbol",
      value: edu?.school,
    },
    diploma: {
      id: `edu-diploma-${index}`,
      label: "ხარისხი",
      input: "select",
      filter: "select",
      inside: false,
      options: await createSelectOptions(),
      value: edu?.diploma,
    },
    dateOfEnd: {
      type: "date",
      id: `edu-dateOfEnd-${index}`,
      label: "დამთავრების რიცხვი",
      filter: "date",
      inside: false,
      value: edu?.dateOfEnd,
    },
    description: {
      input: "textarea",
      id: `edu-description-${index}`,
      label: "აღწერა",
      placeholder: "განათლების აღწერა",
      filter: "textarea",
      value: edu?.description,
    },
  };
  return Domo()
    .cls("flex col g-2")
    .child([
      createTextInput(content.school),
      Domo()
        .cls("flex g-2")
        .child([createTextInput(content.diploma), createTextInput(content.dateOfEnd)]),
      createTextInput(content.description),
      Domo("hr").cls("field-hr"),
    ]);
}
