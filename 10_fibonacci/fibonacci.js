const fibonacci = function(place) {
    let x = 1;
    let y = 1;
    if (parseInt(place) < 0){
        return "OOPS";
    }
    for (let i=2; i<parseInt(place); i++){
        let xValue = x;
        x=y;
        y+=xValue;
    }
    return y;
};

// Do not edit below this line
module.exports = fibonacci;
