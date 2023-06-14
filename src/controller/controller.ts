import express, { Request, Response } from "express";
import { sendgridEmail } from "../utils/notification";

const processLoad = async (req: Request, res: Response) => {
    try {
        const { email, name } = req.body;
        
        sendgridEmail(email)
        return res.status(200).json({
    message: "hello"
})
    } catch (error) {
      return res.status(500).json({
        Error: "Internal server error /get-loads",
        error,
      });
    }
};

export default {
  processLoad,
};

