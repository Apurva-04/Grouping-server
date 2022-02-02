import express from 'express';
import mongoose from 'mongoose';

import Groups from '../models/groups.js';

const router = express.Router();

export const getGroups = async (req, res) => { 
    try {
        const groups = await Groups.find();
        res.status(200).json(groups);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


// export const getPost = async (req, res) => { 
//     const { id } = req.params;

//     try {
//         const post = await PostMessage.findById(id);
        
//         res.status(200).json(post);
//     } catch (error) {
//         res.status(404).json({ message: error.message });
//     }
// }

export const createGroup = async (req, res) => {
    try {
        const {place, start_date, end_date, lower_budget, upper_budget} = req.body;
        const newgroup = new Groups({ place: place});
        await newgroup.save();
        res.status(201).json(newgroup);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// export const updatePost = async (req, res) => {
//     const { id } = req.params;
//     const { title, message, purpose, audience, version, creator, selectedFile, tags } = req.body;
    
//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

//     const updatedPost = { creator, title, message, purpose, audience, version, tags, selectedFile, _id: id };

//     await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

//     res.json(updatedPost);
// }

// export const deletePost = async (req, res) => {
//     const { id } = req.params;

//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

//     await PostMessage.findByIdAndRemove(id);

//     res.json({ message: "Post deleted successfully." });
// }

// export const likePost = async (req, res) => {
//     const { id } = req.params;

//     if (!req.userId) {
//         return res.json({ message: "Unauthenticated" });
//       }

//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
//     const post = await PostMessage.findById(id);

//     const index = post.likes.findIndex((id) => id ===String(req.userId));

//     if (index === -1) {
//       post.likes.push(req.userId);
//     } else {
//       post.likes = post.likes.filter((id) => id !== String(req.userId));
//     }
//     const updatedPost = await PostMessage.findByIdAndUpdate(id, post, { new: true });
//     res.status(200).json(updatedPost);
// }


export default router;