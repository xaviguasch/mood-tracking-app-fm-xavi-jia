export function calculateAverage(entries, field) {
  return entries.reduce((sum, entry) => sum + entry[field], 0) / entries.length;
}
