export default function autoFormatPhoneNumber(str) {
  if (!str) return "";

  // ensure it starts with +
  if (!str.startsWith("+")) {
    str = "+" + str;
  }

  // remove existing spaces
  str = str.replace(/\s+/g, "");

  // add spaces: +XXX XXX XX XX XX
  return str.replace(/^(\+\d{1,3})(\d{0,3})(\d{0,2})(\d{0,2})(\d{0,2}).*$/, (_, a, b, c, d, e) =>
    [a, b, c, d, e].filter(Boolean).join(" ")
  );
}
