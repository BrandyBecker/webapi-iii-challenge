const db = require('../users/userDb.js');

function validateUserId(req,res,next){
    const id = req.params.id;

    db.getById(id)
    .then(user=>{
        console.log(user)
        (!user)
        ?
        res.status(400).json({ message: "invalid user id" })
        :
        req.user = user;
        next();
    })
}
module.exports = validateUserId;