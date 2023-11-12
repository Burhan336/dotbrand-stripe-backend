// form.routes.ts
import { Router } from "express";
import { submitForm } from "./form.controller";
import { validateFormData } from "./form.middleware";

const router = Router();

router.post("/submit-form", validateFormData, submitForm);

export default router;
