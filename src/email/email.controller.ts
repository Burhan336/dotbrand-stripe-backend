// src/controllers/email.controller.ts

import { Request, Response } from "express";
import sendEmail from "./email.service";

type EmailRequest = {
  from: string;
  to: string;
  subject: string;
  text?: string;
  html?: string;
};

export const send = ({ from, to, subject, text }: EmailRequest) => {
  const options: EmailRequest = {
    from: from || "default-sender@example.com",
    to: to,
    subject: subject,
    text: text,
    html: text,
  };

  sendEmail(options as any, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent successfully");
    }
  });
};
