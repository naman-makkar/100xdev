// middleware > authorisation header retireve > header or bearer check > return 403 if no > else split and extract token > token ko verify with jwt secret > if verifies > user id extract kro > else return catch err

const { JWT_SECRET } = require("./config");
const jwt = require("jsonwebtoken");

const authMiddleware=(req,res,next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer')){
        return res.status(403).json({});
    }

    const tokenExtract = authHeader.split(' ')[1];

    try{
        const verify = jwt.verify(tokenExtract, JWT_SECRET);

        req.userId = verify.userId;

        console.log(`Authenticated user ID: ${req.userId}`);

        next();
    } catch(err) {
        return res.status(403).json({});
    }
};

module.exports = {
    authMiddleware
}