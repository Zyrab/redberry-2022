import Domo from "@zyrab/domo";

export default function createPrevExp(exp, index) {
  return Domo()
    .cls(exp !== "" ? "" : "hidden")
    .cls("hid flex col g-1")
    .data({ counter: Object.keys(exp).length })
    .child([
      Domo("h3")
        .txt("გამოცდილება")
        .if(index === 0),
      ,
      Domo()
        .cls("flex col g-0.5")
        .child([
          Domo()
            .cls("flex g-0.5")
            .child([
              Domo("h4")
                .id(`pre-exp-position-${index}`)
                .data({ hasValue: exp?.position ? "1" : "0" })
                .txt(exp?.position + ","),
              Domo("h4")
                .id(`pre-exp-employer-${index}`)
                .data({ hasValue: exp?.employer ? "1" : "0" })
                .txt(exp?.employer),
            ]),
          Domo("p").child([
            Domo("date")
              .id(`pre-exp-dateOfStart-${index}`)
              .data({ hasValue: exp?.dateOfStart ? "1" : "0" })
              .txt(exp?.dateOfStart),
            " - ",
            Domo("date")
              .id(`pre-exp-dateOfEnd-${index}`)
              .data({ hasValue: exp?.dateOfEnd ? "1" : "0" })
              .txt(exp?.dateOfEnd),
          ]),
        ]),
      Domo("p")
        .id(`pre-exp-description-${index}`)
        .data({ hasValue: exp?.description ? "1" : "0" })
        .txt(exp?.description),
    ]);
}
