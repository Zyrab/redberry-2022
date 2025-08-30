import eduTemplate from "../pages/generator/input-files/edu-template.js";
import expTemplate from "../pages/generator/input-files/exp-template.js";

import createPrevEdu from "../pages/generator/preview/prev-edu.js";
import createPrevExp from "../pages/generator/preview/prev-exp.js";

const formTemplates = { edu: eduTemplate, exp: expTemplate };
const previewTemplates = { edu: createPrevEdu, exp: createPrevExp };

export default async function addSectionHandler(event, button, indices) {
  const sectionType = button.dataset.action;

  indices[sectionType]++;
  const currentIndex = indices[sectionType];

  const insertBeforeEl = button.closest(".add-before");
  const formContainer = insertBeforeEl.parentNode;
  const newFormField = await formTemplates[sectionType]("", currentIndex);
  formContainer.insertBefore(newFormField.build(), insertBeforeEl);

  const previewContainer = document.getElementById(`${sectionType}-prev`);
  const newPreview = previewTemplates[sectionType]("", currentIndex);
  previewContainer.appendChild(newPreview.build());

  return indices;
}
