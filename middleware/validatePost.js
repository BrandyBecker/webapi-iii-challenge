function validatePost(req,res,next){
    (!req.body)
    ?
    res.status(400).json({ message: "missing post data" })
    :
    (!req.body.text)
    ?
    res.status(400).json({ message: "missing required text field" })
    :
    (!req.body.user_id)
    ?
    res.status(400).json({ message: "missing required user id field" })
    :
    next();
}

module.exports = validatePost