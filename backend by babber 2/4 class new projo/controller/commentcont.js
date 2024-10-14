const Post = require("../model/postmd");
const commment = require("../model/comentmd");

exports.createcommant = async(req,res)=>{
      try {
        const{post,user,body} = req.body;
        // creating a comment object 
        const comment = new commment({
            post,user,body
        });
        // save the obj in the database 
        const savedComment = await comment.save();
         
        // find the post by id add the new comment to its comment array
         const updatedPost = await Post.findByIdAndUpdate(post, { $push: { comments: savedComment._id } }, { new: true })
            .populate("comments")
            .exec();
        
        res.json({
            post:updatedPost
        })

      } catch (error) {
        return res.status(500).json({
            error:"error creating comment",
           
        });
      }
}