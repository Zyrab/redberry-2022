import Domo from "@zyrab/domo";

export default function createPageButtons() {
  return Domo()
    .cls("flex jc-sb ai-e w-full")
    .child([
      Domo("button").attr({ type: "button" }).cls("page-button btn-1 hidden").data({ action: "prev" }).txt("უკან"),
      Domo("button").attr({ type: "button" }).cls("page-button btn-2").data({ action: "next" }).txt("შემდეგი"),
    ]);
}
