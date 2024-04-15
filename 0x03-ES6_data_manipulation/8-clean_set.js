export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || typeof startString !== 'string' || startString.length === 0) {
    return '';
  }

  const cleanedValues = [];

  set.forEach((value) => {
    if (value.startsWith(startString)) {
      cleanedValues.push(value.slice(startString.length));
    }
  });
  return cleanedValues.join('-');
}
