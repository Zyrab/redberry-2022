export default async function fetchDiplomas() {
  const url = "/diplomas.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Failed to fetch diplomas:", err);
    return [];
  }
}
