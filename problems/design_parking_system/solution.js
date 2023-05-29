/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
    this.big = big;
    this.medium = medium;
    this.small = small;
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    const cars = {
        1: "big",
        2: "medium",
        3: "small"
    }
    if (this[cars[carType]] > 0) {
        this[cars[carType]]--;
        return true;
    }
    return false;
};