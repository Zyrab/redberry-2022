import Domo from "@zyrab/domo";

export default function createAddButton(text, action) {
  return Domo()
    .cls("flex jc-sb ai-e w-full add-before")
    .child([Domo("button").attr({ type: "button" }).cls("add-button").data({ action }).txt(text)]);
}
