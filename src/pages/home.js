import Domo from "@zyrab/domo";
import Router from "@zyrab/domo-router";

export default function createHome() {
  return Domo("main").child([
    Domo("header")
      .cls(" px-2.5")
      .child([Domo("img").cls("py-1.5").attr({ src: "/imiges/logo-text.png", alt: "Redberry logo" }), Domo("hr")]),

    Domo("div")
      .cls("button-container")
      .child([
        Domo("button")
          .txt("რეზიუმეს დამატება")
          .on("click", () => {
            Router.goTo("/generator");
          }),
      ]),
    Domo("img").cls("bg-img").attr({ src: "/imiges/shutterstock.png" }),
    Domo("img").cls("bg-logo").attr({ src: "/imiges/logo-circle.png" }),
  ]);
}
