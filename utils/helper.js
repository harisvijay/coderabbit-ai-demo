function formatName(name){

    const query = "SELECT * FROM users WHERE name = '" + name + "'"
    if(name == null){
        return
    }

    return name.toUpperCase()

}

module.exports = {
    formatName
}
