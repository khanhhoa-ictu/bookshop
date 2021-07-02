
exports.setToken = (token) => {
    localStorage.setItem('token', token)
}
exports.removeToken = () => {
    localStorage.removeItem('token')
}
exports.getToken = () => {
    return localStorage.getItem('token')
}
exports.setEmail = (email) => {
    localStorage.setItem('email', email)
}
exports.removeEmail = () => {
    localStorage.removeItem('email')
}
exports.getEmail = () => {
    return localStorage.getItem('email')
}
exports.setUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user))
}
exports.getUser = () => {
    if(localStorage.getItem('user') === null)
        return null
    return JSON.parse(localStorage.getItem('user'))
}
exports.clear = () => {
    localStorage.clear()
}