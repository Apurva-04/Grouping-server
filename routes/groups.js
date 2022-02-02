import express from 'express';

import { getGroups, createGroup} from '../controllers/groups.js';
//, , updateGroup, deleteGroup 

const router = express.Router();

router.get('/', getGroups);
router.post('/createGroup', createGroup);
// router.patch('/:id', auth, updatePost);
// router.delete('/:id', auth, deletePost);
// router.patch('/:id/likePost', auth, likePost);

export default router;