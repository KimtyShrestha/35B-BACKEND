import { Router } from "express";
//import admin controller
import { AdminUserController } from "../../controllers/admin/user.controller";
import { authorizedMiddleware } from "../../middlewares/authorized.middleware";
import { de } from "zod/v4/locales";
import router from "../auth.route";


let adminUserController = new AdminUserController();

router.get("/:id",authorizedMiddleware, adminUserController.getOneUser);
//define admin suer routes

export default router;