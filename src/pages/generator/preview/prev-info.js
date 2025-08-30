import Domo from "@zyrab/domo";

export default function createPrevInfo(info) {
  return Domo()
    .cls("flex jc-sb")
    .child([
      Domo()
        .cls("flex col g-2 w-1/2")
        .child([
          Domo()
            .cls("flex g-2 names")
            .child([
              Domo("p").id("pre-info-name").txt(info?.name),
              Domo("p").id("pre-info-surname").txt(info?.surname),
            ]),
          Domo()
            .cls("flex col g-0.5")
            .child([
              Domo()
                .cls(info?.email ? "" : "hidden")
                .cls("hid flex g-0.5 ai-c")
                .child([
                  Domo("img").attr({ src: "/public/images/mail-icon.png" }),
                  Domo("p").id("pre-info-email").txt(info?.email),
                ]),
              Domo()
                .cls(info?.phone ? "" : "hidden")
                .cls("hid flex g-0.5 ai-c")
                .child([
                  Domo("img").attr({ src: "/public/images/phone-icon.png" }),
                  Domo("p").id("pre-info-phone").txt(info?.phone),
                ]),
            ]),
          Domo()
            .cls(info?.aboutMe ? "" : "hidden")
            .cls("hid flex col g-1")
            .child([Domo("h3").txt("ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ"), Domo("p").cls("w-full").id("pre-info-aboutMe").txt(info?.aboutMe)]),
        ]),
      Domo()
        .cls("profile-img")
        .child([Domo("img").cls("w-full").id("pre-info-imgUpload").attr({ src: info?.imgUpload })]),
    ]);
}
