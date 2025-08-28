import Domo from "@zyrab/domo";
import Router from "@zyrab/domo-router";

export default function createFormHeader(title, page) {
  return Domo("header")
    .cls("flex ai-c g-2 py-1.5")
    .child([
      Domo("nav")
        .cls("flex ai-c")
        .child([
          Domo("img")
            .cls("pointer")
            .attr({ src: "/imiges/Vector.png", alt: "back-arrow" })
            .on("click", () => {
              Router.goTo("/");
            }),
        ]),
      Domo()
        .cls("w-full flex col g-1 jc-s")
        .child([
          Domo()
            .cls("flex jc-sb ai-c w-full")
            .child([Domo("h1").txt(title), Domo("img").attr({ src: `/imiges/${page + 1}.png`, alt: "page-counter" })]),
          Domo("hr"),
        ]),
    ]);
}
