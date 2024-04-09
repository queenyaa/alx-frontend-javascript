export default function createIteratorObject(report) {
  const allEmployees = report.allEmployees;
  const departments = Object.values(allEmployees).flatMap(e => e);

  let index = 0;

  const iterator = {
    next() {
        if (index >= departments.length) {
            return { done: true };
        }

        return { value: departments[index++], done: false };
    },
    [Symbol.iterator]() {
        return this;
    }
  };

  return iterator;
}
