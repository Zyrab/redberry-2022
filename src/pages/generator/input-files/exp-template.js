import Domo from "@zyrab/domo";
import createTextInput from "../../../components/input-text.js";

export default function expTemplate(exp, index) {
  const content = {
    position: {
      id: `exp-position-${index}`,
      label: "თანამდებობა ",
      placeholder: "დეველოპერი, დიზაინერი, ა.შ.",
      hint: "მინიმუმ 2 სიმბოლო",
      filter: "min2Symbol",
      value: exp?.position,
    },
    employer: {
      id: `exp-employer-${index}`,
      label: "დამსაქმებელი",
      placeholder: "დამსაქმებელი",
      hint: "მინიმუმ 2 სიმბოლო",
      filter: "min2Symbol",
      value: exp?.employer,
    },
    dateOfStart: {
      type: "date",
      id: `exp-dateOfStart-${index}`,
      label: "დაწყების რიცხვი",
      filter: "date",
      inside: false,
      value: exp?.dateOfStart,
    },
    dateOfEnd: {
      type: "date",
      id: `exp-dateOfEnd-${index}`,
      label: "დამთავრების რიცხვი",
      filter: "date",
      inside: false,
      value: exp?.dateOfEnd,
    },
    description: {
      input: "textarea",
      id: `exp-description-${index}`,
      label: "აღწერა",
      placeholder: "როლი თანამდებობაზე დ ზოგდი აღწერა",
      filter: "textarea",
      value: exp?.description,
    },
  };
  return Domo()
    .cls("flex col g-2")
    .child([
      createTextInput(content.position),
      createTextInput(content.employer),
      Domo()
        .cls("flex g-2")
        .child([createTextInput(content.dateOfStart), createTextInput(content.dateOfEnd)]),
      createTextInput(content.description),
      Domo("hr").cls("field-hr"),
    ]);
}
