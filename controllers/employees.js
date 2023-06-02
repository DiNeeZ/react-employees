import { Prisma } from "@prisma/client";
import { prisma } from "../prisma/prisma-client.js";

/**
 * @route GET /api/employees
 * @desc Получение всех сотрудников
 * @access Private
 */

export const getAll = async (_, res) => {
  try {
    const employees = await prisma.employee.findMany();

    return res.status(200).json(employees);
  } catch (error) {
    return res
      .status(400)
      .json({ message: `Ошибка получения пользователя (${error.message})` });
  }
};

/**
 * @route GET /api/employees/:id
 * @desc Получение одного сотрудника
 * @access Private
 */

export const getOne = async (req, res) => {
  const id = req.params.id;

  try {
    const employee = await prisma.employee.findUnique({
      where: {
        id,
      },
    });

    return res.status(200).json(employee);
  } catch (error) {
    return res.status(400).json({ message: `Не удалось получить сотрудника` });
  }
};

/**
 * @route POST /api/employees
 * @desc Создание сотрудника
 * @access Private
 */

export const add = async (req, res) => {
  try {
    const data = req.body;

    if (!data.firstName || !data.lastName || !data.address || !data.age)
      throw new Error("Все поля обязательные!");

    const employee = await prisma.employee.create({
      data: {
        ...data,
        userId: req.user.id,
      },
    });

    return res.status(201).json(employee);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return res.status(500).json({ message: "Ошибка создания сотрудника" });
    }

    return res.status(400).json({ message: error.message });
  }
};

/**
 * @route POST /api/employees/remove/:id
 * @desc Удаление сотрудника
 * @access Private
 */

export const remove = async (req, res) => {
  try {
    const id = req.params.id;

    const employee = await prisma.employee.findUnique({
      where: {
        id,
      },
    });

    const fullName = `${employee.firstName} ${employee.lastName}`;

    await prisma.employee.delete({
      where: {
        id,
      },
    });

    return res
      .status(200)
      .json({ message: `Сотрудник ${fullName} успешно удалён` });
  } catch (error) {
    return res.status(500).json({ message: "Не удалось удалить сотрудника" });
  }
};

/**
 * @route PUT /api/employees/edit/:id
 * @desc Редактирование сотрудника
 * @access Private
 */

export const edit = async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  try {
    if (!data.firstName && !data.lastName && !data.address && !data.age) {
      return res
        .status(400)
        .json({
          message:
            "Для изменения данных должно быть заполнено хотя бы одно поле",
        });
    }

    const updatedEmployee = await prisma.employee.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });

    return res.status(200).json({
      message: `Данные сотрудника ${updatedEmployee.firstName} ${updatedEmployee.lastName} изменены.`,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Не удалось обновить профайл сотрудника." });
  }
};
