const { addNumbers } = require("./utils/math")
const { getUser } = require("./services/userService")

function main(){

    let a = "10"
    let b = 20

    // type mismatch
    let result = addNumbers(a,b)

    console.log("Result is " + result)

    const user = getUser(1)

    console.log(user)

}

main()
