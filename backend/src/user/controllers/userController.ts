import { Request, Response, NextFunction } from 'express';
import { IUser, users } from '../models/users';
import { v4 as uuidv4 } from "uuid";
import SequeliseUser from '../../database/sequeliseUserModel';

// Create a user
export const createUser = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name,role } = req.body;
    SequeliseUser.create({ id: uuidv4(), role, name })
      .then((newUser) => {
        res.status(201).json(newUser);
      })
      .catch((error) => {
        next(error);
      });
  } catch (error) {
    next(error);
  }
};

// Read all users
export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await SequeliseUser.findAll();
    console.log("Users fetched:", users);    
    res.json(users);
  } catch (error) {
    next(error);
  }
};

// Read a single user
export const getUserById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const user = await SequeliseUser.findOne({ where: { id } });
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    res.json(user);
  } catch (error) {
    next(error);
  }
};


// Update an user
export const updateUser = (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id, 10);
    const { name } = req.body;
    const userIndex = users.findIndex((i: IUser) => i.id === id.toString());
    if (userIndex === -1) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    users[userIndex].name = name;
    res.json(users[userIndex]);
  } catch (error) {
    next(error);
  }
};

// Delete a single  user
export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const user = await SequeliseUser.findOne({ where: { id } });
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    await SequeliseUser.destroy({ where: { id } });
    res.json({ message: 'User deleted successfully', user });
  } catch (error) {
    next(error);
  }
};