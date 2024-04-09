export default function createIteratorObject(report) {
  const { allEmployees } = report; // Using obj destructuring
  const departments = Object.values(allEmployees).flatMap((e) => e);
  // Using arrow function parenthesis

  let index = 0;

  const iterator = {
    next() {
      if (index >= departments.length) {
        return { done: true };
      }

      const value = departments[index];
      index += 1;
      return { value, done: false };
    },
    [Symbol.iterator]() {
      return this;
    },
  };

  return iterator;
}
