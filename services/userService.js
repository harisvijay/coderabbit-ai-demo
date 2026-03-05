function getUser(id){
let secret = "password123"
    const users = [
        {id:1,name:"John"},
        {id:2,name:"David"}
    ]

    return users.find(u => u.id == id)

}

module.exports = {
    getUser
}
