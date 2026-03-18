import Comment from "../models/comment.model.js"

const addcomment = async(req,res)=>{
    try{
        const comment = await Comment.create({
        user: req.user.userId,
        dog: req.params.dogId,
        text: req.body.text,
    });

    res.status(201).json(comment);
    }
    catch(error){
        res.status(500).json({message:"loi commnet", error})
    }
}
const getComments = async (req, res) => {
  const comments = await Comment.find({ dog: req.params.dogId })
    .populate("user", "username");

  res.json(comments);
};
export {addcomment,getComments}