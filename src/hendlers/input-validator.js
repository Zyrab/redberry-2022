import { regex } from "./utils/text-regex.js";
import toggleValidationUI from "./utils/toggle-validation-ui.js";
import autoFormatPhoneNumber from "./utils/auto-format-phone-number.js";

export default function inputValidator(e) {
  const input = e.target;
  const filter = input.dataset.validator;
  if (!filter) return;

  let isValid = false;
  let toggleClasses = true;

  if (regex[filter]) {
    if (filter === "phoneNumber") input.value = autoFormatPhoneNumber(input.value);
    isValid = regex[filter].test(input.value.trim());
  } else if (filter === "date") {
    isValid = input.valueAsNumber > 0 || input.value !== "";
  } else if (filter === "select") {
    isValid = input.valueAsNumber > 0 || input.value !== "";
  } else if (filter === "file") {
    isValid = input.files.length > 0;
    isValid && (input.dataset.uploaded = "1");
  }

  toggleValidationUI(input, isValid, { toggleClasses });
}
