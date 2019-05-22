function produceDrivingRange(range) {
  return function(numberOne, numberTwo) {
    let distanceOne = parseInt(numberOne);
    let distanceTwo = parseInt(numberTwo);
    let testRange = Math.abs(distanceTwo - distanceOne);
    let returnValue = range - testRange;
     if (returnValue > 0) {
       return `within range by ${returnValue}`
     } else {
       return `${Math.abs(returnValue)} blocks out of range`;
     }

  };
};

function produceTipCalculator(percent) {
  return function(fare) {
    return fare * percent;
  }
};

function createDriver() {
  let driverId = 0;
  return class Driver {
    constructor(name) {

      this.name = name;
      this.id = ++driverId
    }
  }

};
