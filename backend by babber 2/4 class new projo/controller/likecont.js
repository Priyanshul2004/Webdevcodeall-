const Post = require("../model/postmd")
const Like = require("../model/likemd") 



exports.likepost = async(req,res)=>{
    try {
        const {post,user} = req.body;
        const like = new Like({
            post,user,
        });
        const savedlike = await like.save();

        // update like post collection basis on this 
        const updatedPost = await post.findByIdAndUpdate(post,{$push:{likes:savedlike._id} },{new:true});
        res.json({
            post:updatedPost
        })
    } catch (error) {
        return res.status(400).json({
            error:"error while like "
        });
    }
}


exports.dummylink = (req, res) => {
    res.send("This is your dummy page");
}
