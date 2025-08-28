import Domo from "@zyrab/domo";

import createFormHeader from "../../components/form-header.js";
import createTextInput from "../../components/input-text.js";

export default function createExpereience() {
  return Domo("fieldset").child([
    createTextInput({
      id: "position",
      label: "თანამდებობა ",
      placeholder: "დეველოპერი, დიზაინერი, ა.შ.",
      hint: "მინიმუმ 2 სიმბოლო",
      filter: "min2Symbol",
    }),
    createTextInput({
      id: "employer",
      label: "დამსაქმებელი",
      placeholder: "დამსაქმებელი",
      hint: "მინიმუმ 2 სიმბოლო",
      filter: "min2Symbol",
    }),
    Domo()
      .cls("flex g-2")
      .child([
        createTextInput({
          type: "date",
          id: "date-of-start",
          label: "დაწყების რიცხვი",
          filter: "date",
          inside: false,
        }),
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
      id: "description",
      label: "აღწერა",
      placeholder: "როლი თანამდებობაზე დ ზოგდი აღწერა",
      filter: "textarea",
    }),
  ]);
}
