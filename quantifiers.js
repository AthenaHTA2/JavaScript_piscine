function every(arr,func){
    let res = 0
    for (let i = 0; i < arr.length;i++){
        if (!func(arr[i])) {
            return false
        } else {
            res++
        }
        if (res == 3) return true
    }
    return true
}

function some(arr,func){
    let res = false
    let res2 = 0
    for (let i = 0; i <arr.length;i++){
        if (func(arr[i])) {
            res = true
        }
            res2++
        if (res2 == 3) return res
    }
    return res
}

function none(arr,func){
    let res =0
    for (let i = 0; i < arr.length;i++){
        if (func(arr[i])) return false
        res++
        if (res == 3) return true
    }
    return true
}
