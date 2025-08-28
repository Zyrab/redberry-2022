import Domo from "@zyrab/domo";

export default function createImgInput({ id, label }) {
  let fileImage = null;
  return Domo()
    .cls("flex ai-c g-0.5 w-full cont")
    .child([
      Domo("label").cls("lg").attr({ for: id }).txt(label),
      Domo("input")
        .cls("hidden abs")
        .data({ validator: "file" }) // use universal validator
        .ref((el) => (fileImage = el))
        .attr({ type: "file", id, accept: "image/*" }),
      Domo("button")
        .attr({ type: "button" })
        .cls("image-upload")
        .txt("ატვირთვა")
        .on("click", () => fileImage.click()),
      Domo()
        .cls("h-full flex ai-c")
        .child([
          Domo("img").cls("w-1 abs valid hidden").attr({ src: "/imiges/valid.png", alt: "valid" }),
          Domo("img").cls("w-1 abs invalid hidden").attr({ src: "/imiges/invalid.png" }),
        ]),
    ]);
}
