import { client } from "~/apis";

const getUser = async (uid: string) =>
  (await client.getUser({ uid })).data.getUser;

const getUsers = async () => (await client.getUsers()).data.getUsers;

export const userRequests = {
  getUser,
  getUsers
};
