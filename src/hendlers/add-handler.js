import eduTemplate from "../pages/generator/input-files/edu-template.js";
import expTemplate from "../pages/generator/input-files/exp-template.js";

const tmplts = { "add-edu": eduTemplate, "add-exp": expTemplate };

export default async function addHandler(e, btn, index) {
  index++;
  const action = btn.dataset.action;

  const before = btn.closest(".add-before");
  const parent = before.parentNode;
  const newChild = await tmplts[action](index);
  parent.insertBefore(newChild.build(), before);
  return index;
}
