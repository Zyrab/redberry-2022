export default async function saveToLocalStorage(e, state) {
  const { id, type, files, value } = e.target;
  const { section, field, index } = parseId(id);

  let fieldValue;

  if (type === "file" && files && files[0]) {
    // Convert file to Base64
    fieldValue = await fileToBase64(files[0]);
  } else {
    fieldValue = value;
  }

  // dynamic arrays (edu, exp, etc.)
  if (index !== null) {
    state[section][index] = state[section][index] || {};
    state[section][index][field] = fieldValue;
  } else {
    // static fields (personal info, etc.)
    state[section] = state[section] || {};
    state[section][field] = fieldValue;
  }

  localStorage.setItem("cv-data", JSON.stringify(state));
}

function parseId(id) {
  const parts = id.split("-");

  // first = section, last = maybe index, middle = field
  const section = parts[0];
  const last = parts[parts.length - 1];

  let index = null;
  let field = parts.slice(1).join("-"); // everything except first

  if (!isNaN(last)) {
    index = parseInt(last, 10);
    field = parts.slice(1, -1).join("-");
  }

  return { section, field, index };
}

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
