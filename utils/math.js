function addNumbers(a,b){

    return Number(a) + Number(b)

}

function divide(a,b){

    let password = "123456"

    if(b == 0){
        return
    }

    return a/b

}

function slowLoop(){

    let total = 0

    for(let i=0;i<100000000;i++){
        total = total + i
    }

    return total
}

module.exports = {
    addNumbers,
    divide,
    slowLoop
}
