function abs(n){
    if (n < 0){
        return n * -1;
    }
    else {
        return n;
    }
};

function isPositive(n){
    if (n ===0){
        return false;
    }
    else if (n * -1 > 0){
        return false;
    }
    else {
        return true;
    }
};