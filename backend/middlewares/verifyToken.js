const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET || '9445a6f15524f201d2231f5947be26f3';


// verifyToken
const verifyToken = (req, res, next) => {
    if (!req.headers.authorization) return res.status(403).json({ msg: "Not authorized. No token" })

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) {
        const token = req.headers.authorization.split(' ')[1]
        // jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
        jwt.verify(token, JWT_SECRET, (err, data) => {
            if (err) return res.status(403).json({ msg: "Wrong or expired token." })
            else {
                req.user = data
                next()
            }
        })
    }
}

// verifyTokenAdmin
const verifyTokenAdmin = (req, res, next) => {
    if (!req.headers.authorization) return res.status(403).json({ msg: "Not authorized. No token" })

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) {
        const token = req.headers.authorization.split(' ')[1]
        jwt.verify(token, JWT_SECRET, (err, data) => {
            if (err) return res.status(403).json({ msg: "Wrong or expired token." })
            else {
                // data = {id: user._id, isAdmin: user.isAdmin}
                if (!data.isAdmin) return res.status(403).json({ msg: "You are not admin" })
                req.user = data
                next()
            }
        })
    }
}

module.exports = {
    verifyToken,
    verifyTokenAdmin
}