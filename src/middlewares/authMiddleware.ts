import { NextFunction, Request, Response } from "express";
import credentials from "../config/credentials";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const auth = req?.headers?.authorization;

  if (!auth) {
    res.setHeader("WWW-Authenticate", "Basic");
    return res.status(401).send("Unauthorized: missing auth headers");
  }

  const b64auth = auth.split(" ")[1];
  const [username, password] = Buffer.from(b64auth, "base64")
    .toString()
    .split(":");

  if (username === credentials.username && password === credentials.password) {
    return next();
  }

  res.setHeader("WWW-Authenticate", "Basic");
  return res.status(401).send("Unauthorized: Wrong credentials");
};

export default authMiddleware;
