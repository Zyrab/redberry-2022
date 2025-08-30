import Domo from "@zyrab/domo";
import createPrevInfo from "./prev-info.js";
import createPrevExp from "./prev-exp.js";
import createPrevEdu from "./prev-edu.js";

export default function createPreviewe(data) {
  const experiences = data.exp;
  const education = data.edu;
  return Domo("aside").child([
    Domo().child([createPrevInfo(data?.info), Domo("hr")]),
    Domo()
      .cls("flex col g-1")
      .id("exp-prev")
      .child(experiences.map((exp, i) => createPrevExp(exp, i))),
    Domo("hr"),
    Domo()
      .cls("flex col g-1")
      .id("edu-prev")
      .child(education.map((edu, i) => createPrevEdu(edu, i))),
    Domo("hr"),
    Domo()
      .css({ marginTop: "auto" })
      .child([Domo("img").attr({ src: "/public/images/logo-symbol.png" })]),
  ]);
}
