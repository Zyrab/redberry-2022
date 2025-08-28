import Domo from "@zyrab/domo";

import createTextInput from "../../../components/input-text.js";
import createImgInput from "../../../components/input-img.js";

export default function createPersonalInfo() {
  return Domo("fieldset")
    .id("fieldset-0")
    .child([
      Domo()
        .cls("flex g-2")
        .child([createTextInput(infoContent.name), createTextInput(infoContent.surname)]),
      createImgInput({ id: "img-upload", label: "პირადი ფოტოს ატვირთვა" }),
      createTextInput(infoContent.aboutMe),
      createTextInput(infoContent.email),
      createTextInput(infoContent.phone),
    ]);
}

const infoContent = {
  name: {
    id: "name",
    label: "სახელი",
    placeholder: "ანზორ",
    hint: "მინიმუმ 2 ასო, ქართული ასოები",
    filter: "onlyGeorgian",
  },
  surname: {
    id: "surname",
    label: "გვარი",
    placeholder: "მუმლაძე",
    hint: "მინიმუმ 2 ასო, ქართული ასოები",
    filter: "onlyGeorgian",
  },
  aboutMe: {
    input: "textarea",
    id: "about-me",
    label: "ჩემ შესახებ (არასავალდებულო)",
    placeholder: "ზოგადი ინფო შენ შესახებ",
    filter: "",
  },
  email: {
    id: "email",
    label: "ელ.ფოსტა",
    placeholder: "anzorr666@redberry.ge",
    hint: "უნდა მთავრდებოდეს @redberry.ge-ით",
    filter: "mailText",
  },
  phone: {
    id: "phone",
    label: "მობილურის ნომერი",
    placeholder: "+995 551 12 34 56",
    hint: "უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს",
    filter: "phoneNumber",
  },
};
