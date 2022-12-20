import { Request, Response } from "express";
import userCreateService from "../../services/user/userCreate.service";

const userCreateController = async (req: Request, res: Response) => {
  const { email, name, age } = req.body;

  if(!email || !name || !age){
    return res.status(400).json({message: "Fields name, email & age is required."})
  }

  const newUser = await userCreateService({ email, name, age });

  return res.status(201).json(newUser);
};

export default userCreateController;
