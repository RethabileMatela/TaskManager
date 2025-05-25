import { Request, Response, NextFunction } from 'express';
import { IUser, users } from '../models/users';
import { v4 as uuidv4 } from "uuid";
import SequeliseUser from '../../database/sequeliseUserModel';


// Create a user
// export const createUser = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const { name, role } = req.body;
//     const user = await SequeliseUser.create({ name, role });
//     users.push({ ...user, id: uuidv4()
//     });
//     res.status(201).json(user);
//   } catch (error) {
//     next(error);
//   }
// };

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



// export async createUser(req: Request, res: Response) {
//   const id = uuidv4();
//   try {
//     const record = await TodoInstance.create({ ...req.body, id });
//     return res.json({ record, msg: "Successfully create todo" });
//   } catch (e) {
//     return res.json({ msg: "fail to create", status: 500, route: "/create" });
//   }
// }


// Read all users
export const getUsers = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(users);
  } catch (error) {
    next(error);
  }
};

// Read single user
export const getUserById = (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id, 10);
    const user = users.find((i) => i.id === id.toString());
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

// Delete an user
export const deleteUser = (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id, 10);
    const userIndex = users.findIndex((i) => i.id === id.toString());
    if (userIndex === -1) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    const deletedUser = users.splice(userIndex, 1)[0];
    res.json(deletedUser);
  } catch (error) {
    next(error);
  }
};