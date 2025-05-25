import { Router } from 'express';
import { createUser, deleteUser, getUserById, getUsers, helloWorld, updateUser } from '../controllers/userController';

const router = Router();
router.post('/hello', helloWorld)
router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;