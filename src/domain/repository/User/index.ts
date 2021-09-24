import { userRequests } from "~/apis/user";
import { User } from "~/domain/entity/User";

const getUser = async (uid: string): Promise<User> => {
  const data = await userRequests.getUser(uid);
  return data;
};

const getUsers = async () => {
  const data = await userRequests.getUsers();
  return data;
};

export const userImpl = {
  getUser,
  getUsers,
};
