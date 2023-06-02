import jwt from "jsonwebtoken";
import { prisma } from "../prisma/prisma-client.js";

export const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      throw new Error("No token provided");
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET,
      (err, decoded) => {
        if (err) {
          console.log(err);
          throw new Error("Invalid token");
        } else {
          return decoded;
        }
      }
    );

    const user = await prisma.user.findUnique({
      where: {
        id: decoded.id,
      },
    });
    if (!user) {
      throw new Error("User doesn't exists");
    }

    req.user = user;

    next();
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};
