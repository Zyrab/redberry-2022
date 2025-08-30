// -------------------- Preview update utilities --------------------

// Text / textarea inputs
function updateTextPreview(target, value) {
  target.textContent = value;
  toggleParentVisibility(target, value);
}

// File input (image preview)
function updateFilePreview(target, file) {
  if (!file) return;
  target.src = URL.createObjectURL(file);
}

// Select input
function updateSelectPreview(target, selectEl) {
  const value = selectEl.options[selectEl.selectedIndex]?.text || "";
  target.textContent = value;
  toggleParentVisibility(target, value);
}

// Date input
function updateDatePreview(target, value) {
  if (!value) {
    target.textContent = "";
    toggleParentVisibility(target, "");
    return;
  }
  target.textContent = value;
  toggleParentVisibility(target, value);
}

// -------------------- Helper --------------------

// Handles showing/hiding parent sections based on children
function toggleParentVisibility(target, value) {
  const parent = target.closest(".hid");
  if (!parent) return;

  let count = parseInt(parent.dataset.counter || "0", 10);
  const hadValue = target.dataset.hasValue === "1";
  const hasValue = value.trim() !== "";

  if (!hadValue && hasValue) count++;
  else if (hadValue && !hasValue) count--;

  parent.dataset.counter = count;
  target.dataset.hasValue = hasValue ? "1" : "0";
  parent.classList.toggle("hidden", count === 0);
}

// -------------------- Central Preview Handler --------------------

export default function previewHandler(e) {
  const targetId = "pre-" + e.target.id;
  const target = document.getElementById(targetId);
  if (!target) {
    console.warn("target field doesn't exist for", targetId);
    return;
  }

  switch (e.target.type) {
    case "file":
      updateFilePreview(target, e.target.files[0]);
      break;

    case "select-one":
      updateSelectPreview(target, e.target);
      break;

    case "date":
      updateDatePreview(target, e.target.value);
      break;

    case "text":
    case "textarea":
    default:
      updateTextPreview(target, e.target.value);
      break;
  }
}
