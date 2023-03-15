const jwt=require('jsonwebtoken')
module.exports.veryfiToken=(req,res,next)=>{
    jwt.verify(req.headers.token,process.env.JWT_ACCESS_KEY,function (err,decode) {
        if (err) {
            res.status(500).json(err)
        }else{
            req.user=decode
            console.log(decode);
            next()
        }
})
}