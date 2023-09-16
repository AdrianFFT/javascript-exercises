const repeatString = function(str, nr) {
    if (nr<0){
        return 'ERROR';
    }
    result='';
    for (let i=0; i<nr; i++){
        result+=str;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
