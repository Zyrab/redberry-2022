import Domo from "@zyrab/domo";
import fetchDiplomas from "../hendlers/fetch-diplomas.js";

export default async function createSelectOptions() {
  const diplomas = await fetchDiplomas();

  return [
    Domo("option").attr({ value: "", selected: true }).txt("აირჩიეთ დიპლომი"),
    ...diplomas.map((diplom) => Domo("option").val(diplom.title).id(diplom.id).txt(diplom.title)),
  ];
}
