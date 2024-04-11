export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this._validateString(name, 'Name');
    this._length = this._validateNumber(length, 'Length');
    this._students = this._validateStudents(students);
  }

  // Getter and setter for name
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = this._validateString(value, 'Name');
  }

  // Getter and setter for lenth
  get length() {
    return this._length;
  }

  set length(value) {
    this._length = this._validateNumber(value, 'Length');
  }

  // Getter and setter for students
  get students() {
    return this._students;
  }

  set students(value) {
    this._students = this._validateStudents(value);
  }

  // Private method to validate string attribute
  // eslint-disable-next-line class-methods-use-this
  _validateString(value, attributeName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attributeName} must be a string`);
    }
    return value;
  }

  // Private method to validate number attribute
  // eslint-disable-next-line class-methods-use-this
  _validateNumber(value, attributeName) {
    if (typeof value !== 'number' || Number.isNaN(value)) {
      throw new TypeError(`${attributeName} must be a number`);
    }
    return value;
  }

  // Private method to validate students attribute
  // eslint-disable-next-line class-methods-use-this
  _validateStudents(students) {
    if (!Array.isArray(students) || students.some((student) => typeof student !== 'string')) {
      throw new TypeError('Student must be an array of strings');
    }
    return students;
  }
}
