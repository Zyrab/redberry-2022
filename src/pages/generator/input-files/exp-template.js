import Domo from "@zyrab/domo";
import createTextInput from "../../../components/input-text.js";

export default function expTemplate(index) {
  const content = {
    position: {
      id: `position-${index}`,
      label: "თანამდებობა ",
      placeholder: "დეველოპერი, დიზაინერი, ა.შ.",
      hint: "მინიმუმ 2 სიმბოლო",
      filter: "min2Symbol",
    },
    employer: {
      id: `employer-${index}`,
      label: "დამსაქმებელი",
      placeholder: "დამსაქმებელი",
      hint: "მინიმუმ 2 სიმბოლო",
      filter: "min2Symbol",
    },
    dateOfStart: {
      type: "date",
      id: `date-of-start-${index}`,
      label: "დაწყების რიცხვი",
      filter: "date",
      inside: false,
    },
    dateOfEnd: {
      type: "date",
      id: `date-of-end-${index}`,
      label: "დამთავრების რიცხვი",
      filter: "date",
      inside: false,
    },
    expDescription: {
      input: "textarea",
      id: `exp-description-${index}`,
      label: "აღწერა",
      placeholder: "როლი თანამდებობაზე დ ზოგდი აღწერა",
      filter: "textarea",
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
      createTextInput(content.expDescription),
      Domo("hr").cls("field-hr"),
    ]);
}
