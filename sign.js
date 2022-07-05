/*function sign(a){
    if (a < 0){
        return -1;
    }
    else if (a > 0){
        return 1;
    }
    return 0;
};

function sameSign(a, b){
    if ((a*b)>0){
        return true;
    }
    else if ((a*b)===0){
        return true;
    }
    else return false;
};*/

const sign = (i) => (i === 0) ? 0 : (i > 0) ? 1 : -1
const sameSign = (i, j) =>  (sign(i) === sign(j)) ? true : false