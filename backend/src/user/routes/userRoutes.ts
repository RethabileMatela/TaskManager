// @ts-ignore
import { Router } from "express";
import { getUserById, getAllUsers, updateUser, createUser, deleteUser, createTask } from "../controllers/userController";

const router = Router();

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.post('/:id/tasks', createTask);

export default router;