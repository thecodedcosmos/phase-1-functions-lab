// Code your solution in this file!
function distanceFromHqInBlocks(pickUpLocation) {
    const scuberHeadquarters = 42;
    if (pickUpLocation >= scuberHeadquarters) {
        return pickUpLocation - scuberHeadquarters;
    } else {
    return scuberHeadquarters - pickUpLocation;
    }
}
function distanceFromHqInFeet(pickUpLocation) {
    const scuberHeadquarters = 42;
    if (pickUpLocation >= scuberHeadquarters) {
        return (pickUpLocation - scuberHeadquarters) * 264;
    } else {
    return (scuberHeadquarters - pickUpLocation) * 264;
    }
}
function distanceTravelledInFeet(start, destination) {
    if (destination >= start) {
        return (destination - start) * 264;
        } else {
    return (start - destination) * 264;
    }
  }
 
function calculatesFarePrice(start, destination) {
    if (destination >= start) {
        const feets = (destination - start) * 264;
        if (feets <= 400) {
            return 0;
        } else if (feets > 400 && feets <= 2000) {
            return 2.56;
        } else if (feets > 2000 && feets <= 2500) {
            return 25;
        } else {
            return "cannot travel that far";
        }
    }

    else {
        const feets = (start - destination) * 264;
        if (feets <= 400) {
            return 0;
        } else if (feets > 400 && feets <= 2000) {
            return 2.56;
        } else if (feets > 2000 && feets <= 2500) {
            return 25;
        } else {
            return "cannot travel that far";
        }
    }
}
