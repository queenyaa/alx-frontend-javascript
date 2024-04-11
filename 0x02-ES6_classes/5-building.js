export default class Building {
  constructor(sqft) {
    if evacuationWarningMessage() {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }
}
