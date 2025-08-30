import Domo from "@zyrab/domo";

import createTextInput from "../../../components/input-text.js";
import createImgInput from "../../../components/input-img.js";

export default function createPersonalInfo(info) {
  const infoContent = {
    name: {
      id: "info-name",
      label: "სახელი",
      placeholder: "ანზორ",
      hint: "მინიმუმ 2 ასო, ქართული ასოები",
      filter: "onlyGeorgian",
      value: info?.name,
    },
    surname: {
      id: "info-surname",
      label: "გვარი",
      placeholder: "მუმლაძე",
      hint: "მინიმუმ 2 ასო, ქართული ასოები",
      filter: "onlyGeorgian",
      value: info?.surname,
    },
    aboutMe: {
      input: "textarea",
      id: "info-aboutMe",
      label: "ჩემ შესახებ (არასავალდებულო)",
      placeholder: "ზოგადი ინფო შენ შესახებ",
      filter: "",
      value: info?.aboutMe,
    },
    email: {
      id: "info-email",
      label: "ელ.ფოსტა",
      placeholder: "anzorr666@redberry.ge",
      hint: "უნდა მთავრდებოდეს @redberry.ge-ით",
      filter: "mailText",
      value: info?.email,
    },
    phone: {
      id: "info-phone",
      label: "მობილურის ნომერი",
      placeholder: "+995 551 12 34 56",
      hint: "უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს",
      filter: "phoneNumber",
      value: info?.phone,
    },
  };

  return Domo("fieldset")
    .id("fieldset-0")
    .child([
      Domo()
        .cls("flex g-2")
        .child([createTextInput(infoContent.name), createTextInput(infoContent.surname)]),
      createImgInput({ id: "info-imgUpload", label: "პირადი ფოტოს ატვირთვა", uploaded: info?.imgUpload ? "1" : "0" }),
      createTextInput(infoContent.aboutMe),
      createTextInput(infoContent.email),
      createTextInput(infoContent.phone),
    ]);
}
