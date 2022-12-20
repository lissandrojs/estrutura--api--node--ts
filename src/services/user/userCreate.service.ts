import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import ErrorHTTP from "../../errors/ErrorHTTP";
import { IUser } from "../../interfaces/user";

const userCreateService = async ({ email, name, age }: IUser) => {
  const userRepository = AppDataSource.getRepository(User);

  const doUserAlreadyExists = await userRepository.findOne({
    where: {
      email
    }
  })

  if (doUserAlreadyExists) throw new ErrorHTTP ("E-mail already in use.")

  const newUser = userRepository.create({
    email: email,
    name: name,
    age: age,
  });

  await userRepository.save(newUser);

  return newUser;
};

export default userCreateService;
