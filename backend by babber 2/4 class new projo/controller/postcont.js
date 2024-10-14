const Post = require("../model/postmd");

exports.createPost = async(req,res)=>{
    try {
        const {title,body} = req.body;
        const post = new Post({
               title,body
        });
        const savePost = await post.save();
        res.json({
            post:savePost
        })
    } catch (error) {
        return res.status(400).json({
            error:"error while creating post"
        });
    }
}

exports.getAllPost = async(req,res)=>{
    try {
        const posts = await Post.find()
        res.json({
            posts
        })
    } catch (error) {
        return res.status(400).json({
            error:"error while feating post"
        });
    }
}