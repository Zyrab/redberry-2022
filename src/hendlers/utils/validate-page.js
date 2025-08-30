export default function validatePage(pageEl) {
  const inputs = pageEl.querySelectorAll("input, textarea, select");
  let hasErrors = false;

  inputs.forEach((input) => {
    const validator = input.dataset.validator;
    let value;
    if (validator === "file") {
      value = input.dataset.uploaded === "0";
    } else {
      value = input.value === "";
    }
    const invalid = validator && (input.classList.contains("error") || value);

    const label = input.labels?.[0] || pageEl.querySelector(`label[for="${input.id}"]`);
    if (invalid && label) {
      label.classList.add("labelError");
      input.classList.add("error");
      input.parentNode.querySelector(".invalid").classList.remove("hidden");
      hasErrors = true;
    }
  });
  return hasErrors;
}
