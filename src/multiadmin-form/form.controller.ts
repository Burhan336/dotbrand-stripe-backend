// form.controller.ts
import { Request, Response } from "express";
import { send } from "../email/email.controller";

export const submitForm = async (req: Request, res: Response) => {
  try {
    const { storeName, multiAdminName, multiAdminEmail, multiAdminPassword } =
      req.body;

    // Assuming you have a dedicated email for this purpose
    const emailSubject = `New Store Creation Request for "${storeName}"`;
    const emailText = `
Dear Admin,

A new request has been received to create a multi-chain account for the following store:

Store Name: ${storeName}
Multi-Admin Name: ${multiAdminName}
Multi-Admin Email: ${multiAdminEmail}
Multi-Admin Password: ${multiAdminPassword}

This request is currently pending verification. Upon successful payment verification, the multi-chain account will be created.

Thank you for choosing DotBrand!

Best Regards,
DotBrand Team 
`;

    // Send the email
    send({
      from: "noreply@dotbrand.com",
      to: "superadmin@superadmin.io", // Replace with your actual email
      subject: emailSubject,
      text: emailText,
    });

    res.status(200).json({
      statusCode: 200,
      status: true,
      message: "Form submitted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      statusCode: 500,
      status: false,
      message: "Internal server error",
    });
  }
};
