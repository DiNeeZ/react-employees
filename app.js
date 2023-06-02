import express, { json, urlencoded } from "express";
// import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import * as dotenv from "dotenv";
dotenv.config();
import usersRouter from "./routes/users.js";
import employeesRouter from "./routes/employees.js";

const app = express();

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/user", usersRouter);
app.use("/api/employees", employeesRouter);

export default app;
