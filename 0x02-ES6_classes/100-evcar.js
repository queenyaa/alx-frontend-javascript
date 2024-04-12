import Car from './10-car';

const _range = Symbol('range');

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this[_range] = range;
  }

  get range() {
    return this[_range];
  }

  cloneCar() {
    return new Car(this[Symbol.for('_brand')], this[Symbol.for('_motor')], this[Symbol.for('_color')]);
  }
}

export default EVCar;
