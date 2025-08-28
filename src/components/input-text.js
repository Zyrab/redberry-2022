import Domo from "@zyrab/domo";

export default function createTextInput({
  input = "input",
  id,
  label,
  placeholder,
  hint,
  filter,
  type = "text",
  inside = true,
  options = [],
}) {
  return Domo()
    .cls("flex col g-0.5 w-full cont")
    .child([
      Domo("label").cls("lg").attr({ for: id }).txt(label),
      Domo()
        .cls("rel")
        .cls(!inside ? "flex" : "")
        .child([
          Domo(input)
            .cls("lg w-full px-1 py-0.8")
            .data({ validator: filter }) // hook into universal validator
            .attr({ type, name: id, id, placeholder })
            .child([options]),
          Domo()
            .cls(inside ? "abs top-0 right-0 transform-1/2 w-3" : "")
            .cls("py-1 flex ai-c jc-sb")
            .child([
              Domo("img")
                .cls(!inside ? "abs transform-1/2" : "")
                .cls("w-1 valid hidden")
                .attr({ src: "/imiges/valid.png", alt: "valid" }),
              Domo("img")
                .cls(!inside ? "abs transform-1/2" : "")
                .cls("w-1 invalid hidden")
                .attr({ src: "/imiges/invalid.png" }),
            ])
            .if(filter),
        ]),
      Domo("p").cls("md").txt(hint),
    ]);
}
