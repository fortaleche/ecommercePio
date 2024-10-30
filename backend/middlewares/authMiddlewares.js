const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).json({ error: 'No token provided' });
    }
    try {
        const verifiend = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verifiend;
        next();
    }catch (error) {
        return res.status(401).json({ error: 'Invalid token' });
    }
};

exports.verifyAdmin = (req, res, next) => {
    this.verifyToken = (req, res, next) => {
        if (req.user.role !== 'admin') next();
        else res.status(403).json({ error: 'you are not authorized' });
    }
};