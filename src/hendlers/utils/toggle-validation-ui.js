export default function toggleValidationUI(input, isValid, { toggleClasses = true } = {}) {
  const wrapper = input.closest(".cont");
  const validImg = wrapper.querySelector(".valid");
  const invalidImg = wrapper.querySelector(".invalid");
  const label = wrapper.querySelector("label");

  if (toggleClasses) {
    input.classList.toggle("success", isValid);
    input.classList.toggle("error", !isValid);
  }

  if (validImg && invalidImg) {
    validImg.classList.toggle("hidden", !isValid);
    invalidImg.classList.toggle("hidden", isValid);
  }

  if (isValid && label) {
    label.classList.remove("labelError");
  }
}
