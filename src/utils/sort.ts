/**
 * Sorts an array of objects alphabetically by a given field
 * @param array The array of objects to sort
 * @param fieldName The field on which to sort alphabetically
 * @returns The sorted array of objects
 */
export function sortAlphabetical<T = Record<string, unknown>>(
  array: Array<T>,
  fieldName: keyof T,
) {
  return array.sort((a, b) => {
    const aText = (a[fieldName] as string).toLowerCase();
    const bText = (b[fieldName] as string).toLowerCase();
    if (aText < bText) {
      return -1;
    } else if (aText > bText) {
      return 1;
    }
    return 0;
  });
}
