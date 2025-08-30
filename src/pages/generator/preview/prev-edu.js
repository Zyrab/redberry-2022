import Domo from "@zyrab/domo";

export default function createPrevEdu(edu, index) {
  return Domo()
    .cls(edu ? "" : "hidden")
    .cls("hid flex col g-1")
    .data({ counter: Object.keys(edu).length })
    .child([
      Domo("h3")
        .txt("განათლება")
        .if(index === 0),
      Domo()
        .cls("flex col g-0.5")
        .child([
          Domo()
            .cls("flex g-0.5")
            .child([
              Domo("h4")
                .id(`pre-edu-school-${index}`)
                .data({ hasValue: edu?.school ? "1" : "0" })
                .txt(edu?.school),
              Domo("h4")
                .id(`pre-edu-diploma-${index}`)
                .data({ hasValue: edu?.diploma ? "1" : "0" })
                .txt(edu?.diploma),
            ]),
          Domo("date")
            .id(`pre-edu-dateOfEnd-${index}`)
            .data({ hasValue: edu?.dateOfEnd ? "1" : "0" })
            .txt(edu?.dateOfEnd),
        ]),
      Domo("p")
        .id(`pre-edu-description-${index}`)
        .data({ hasValue: edu?.description ? "1" : "0" })
        .txt(edu?.description),
    ]);
}
