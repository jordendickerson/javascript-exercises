const leapYears = function(year) {
    if (isDivisible(year, 4)){
        if (isDivisible(year, 100)){
            if (isDivisible(year, 400)){
                return true;
            }
            return false;
        }
        return true;
    }else{
        return false;
    }
};

const isDivisible = function(number, divider){
    if (number % divider == 0){
        return true;
    }else{
        return false;
    }
}

// Do not edit below this line
module.exports = leapYears;
