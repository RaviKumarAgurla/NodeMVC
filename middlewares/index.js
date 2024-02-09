function basicMiddleware(req, res, next) {
    return (req, res, next) => {
        console.log('this is my middleware')
        next()
    }
}

module.exports = {
    basicMiddleware
}