const { addNumbers } = require("../utils/math")

function testAdd(){

    let result = addNumbers(5,5)

    if(result === 10){
        console.log("Test Passed")
    }else{
        console.log("Test Failed")
    }

}

testAdd()
