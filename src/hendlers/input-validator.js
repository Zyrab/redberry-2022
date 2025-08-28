import { regex } from "./utils/text-regex.js";
import toggleValidationUI from "./utils/toggle-validation-ui.js";

export default function inputValidator(e) {
  const input = e.target;
  const filter = input.dataset.validator;
  if (!filter) return;

  let isValid = false;
  let toggleClasses = true;

  if (regex[filter]) {
    isValid = regex[filter].test(input.value.trim());
  } else if (filter === "date") {
    isValid = input.valueAsNumber > 0 || input.value !== "";
  } else if (filter === "select") {
    isValid = input.valueAsNumber > 0 || input.value !== "";
  } else if (filter === "file") {
    isValid = input.files.length > 0;
  }

  toggleValidationUI(input, isValid, { toggleClasses });
}
