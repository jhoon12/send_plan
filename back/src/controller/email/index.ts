import nodemailer from "nodemailer";
import { Request, Response } from "express";
import { Code } from "../../models/code";

export const sendEmail = async (req: Request, res: Response, next) => {
  try {
    const ranNum = Math.floor(Math.random() * (999999 - 111111 + 1)) + 111111;
    const { email } = req.body;
    const code = await Code.create({ email, code: ranNum.toString() });
    console.log(code);
    let transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS,
      },
    });
    transporter.sendMail({
      from: `SendPlan 인증번호입니다.`,
      to: email,
      subject: "WDMA Auth Number",
      text: `SendPlan 인증번호입니다. ${ranNum}`,
    });
    res.status(200).json({
      status: "Success",
      code: 200,
      message: "Sent Auth Email",
    });
  } catch (err) {
    console.log(err);
  }
};
