// form.middleware.ts
import { Request, Response, NextFunction } from "express";
import Joi from "joi";

export const validateFormData = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const schema = Joi.object({
    storeName: Joi.string().required(),
    multiAdminName: Joi.string().required(),
    multiAdminEmail: Joi.string().email().required(),
    multiAdminPassword: Joi.string()
      .pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).+$/)
      .required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({
      statusCode: 400,
      status: false,
      message: "Backend validation failed",
      payload: { errors: error.details.map((x) => x.message) },
    });
  }
  next();
};
