export default function validatePage(pageEl) {
  const inputs = pageEl.querySelectorAll("input, textarea, select");
  let hasErrors = false;

  inputs.forEach((input) => {
    const validator = input.dataset.validator;
    const invalid = validator && (input.classList.contains("error") || input.value === "");
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
