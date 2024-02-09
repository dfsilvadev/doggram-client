import { destroyCookie, parseCookies, setCookie } from "nookies";

interface IStorageMethods {
  set: (key: string, refreshToken: string) => void;
  get: () =>
    | {
        [key: string]: string;
      }
    | undefined;
  remove: (key: string) => void;
}

const storage = {} as IStorageMethods;

try {
  storage.set = (key, refreshToken) => {
    setCookie(undefined, key, refreshToken, {
      maxAge: 60 * 60, // 1 hour
      path: "/"
    });
  };
  storage.get = () => {
    const response = parseCookies();

    return response;
  };

  storage.remove = (key) => destroyCookie(undefined, key);
} catch (e) {
  throw new Error("no refreshToken storage");
}

export default storage;
