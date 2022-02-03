// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

//returns new array of first two drivers
const returnFirstTwoDrivers = function () { 
    return drivers.slice(0,2);
    //array.slice(start, end)
}

//returns new array of last two drivers
const returnLastTwoDrivers = function () {
    return drivers.slice(-2);
}

//array containing two previous functions
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//higher-order function takes in an integer 
//and multiplies a fare for the ride
//Example: if argument is 4, returned function takes in a fare as 
//an argument and quadruples the fare (4 x 4)

const createFareMultiplier = function (int) {
    return function() {
        return int * int;
    }
}

//function that doubles fares
let fareDoubler = fare => fare * 2
//function that triples fares
let fareTripler = fare => fare * 3

//function that 
// returns first two drivers when passed returnFirstTwoDrivers() as second argument
// returns last two drivers when passed returnLastTwoDrivers() as  second argument

function selectDifferentDrivers(drivers, functionName) {
    if (drivers, functionName === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers();
    } else if (drivers, functionName === returnLastTwoDrivers) {
        return returnLastTwoDrivers();
    }
}
/*
function selectDifferentDrivers(drivers, ) {
    if (selectDifferentDrivers(drivers, returnFirstTwoDrivers)) {
        return returnFirstTwoDrivers;
    } else if (selectDifferentDrivers(drivers, returnLastTwoDrivers)) {
        return returnLastTwoDrivers;
    }
}
*/