import { create } from "zustand";
import { login, LoginRequest } from "../request/login";
import { storage } from "../../../core/helpers/storage";

interface IUser {
  id: number;
  token: string | null;
}
interface IAuth {
  user: IUser | null;
  loginRequest: (payload: LoginRequest, cb?: VoidFunction) => void;
}
export const useAuth = create<IAuth>((set, get) => ({
  user: storage.get<IUser>("user"),
  loginRequest: async (payload, cb) => {
    const res = await login(payload);
    const user = {
      id: res.id,
      token: res.token,
    };
    set({ user });
    storage.set<IUser>("user", user);
    cb?.();
  },
}));
