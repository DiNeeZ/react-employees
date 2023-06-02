import { prisma } from "../prisma/prisma-client.js";
import { compare, genSalt, hash } from "bcrypt";
import jwt from "jsonwebtoken";
import userDto from "../dtos/user.js";

/**
 * @route POST api/user/login
 * @desc Login
 * @access Public
 */

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      throw new Error(
        "Ну пожалуйста, умоляю вас, ну заполните вы уже эти поля. Они ведь обязательные!"
      );

    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    const isPasswordCorrect = user && (await compare(password, user.password));
    const secret = process.env.JWT_SECRET;

    if (!user || !isPasswordCorrect)
      throw new Error("Неверные логин или пароль");

    return res.status(200).json({
      id: user.id,
      email: user.email,
      name: user.name,
      token: jwt.sign({ id: user.id }, secret, { expiresIn: "30d" }),
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

/**
 * @route POST api/user/register
 * @desc  Registration
 * @access Public
 */

export const register = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    if (!email || !password || !name)
      throw new Error(
        "Ну пожалуйста, умоляю вас, ну заполните вы уже эти поля. Они ведь обязательные!"
      );

    const registeredUser = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (registeredUser)
      throw new Error("Пользователь с таким email уже существует!");

    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    const secret = process.env.JWT_SECRET;

    if (!user && !secret) throw new Error("Что-то пошло не так");

    return res.status(201).json({
      id: user.id,
      email: user.email,
      name,
      token: jwt.sign({ id: user.id }, secret, { expiresIn: "30d" }),
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

/**
 * @route GET api/user/current
 * @desc  Cuurent user
 * @access Private
 */

export const current = async (req, res) =>
  res.status(200).json(userDto(req.user));
