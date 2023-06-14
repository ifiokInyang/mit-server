import {
  FromAdminMail,
  userSubject,
} from "../Config";
import nodemailer from "nodemailer";
const sgMail = require("@sendgrid/mail");


const transport = nodemailer.createTransport({
  service: "gmail" /*service and host are the same thing */,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export const mailSent = async (
  from: string,
  to: string,
  subject: string,
  html: string
) => {
  try {
    const response = await transport.sendMail({
      from: FromAdminMail,
      to,
      subject: userSubject,
      html,
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};


export const emailHtml3 = (link: string): string => {
  let response = `
    <div style="max-width:700px;
    margin:auto;
    border:10px solid #ddd;
    padding:50px 20px;
    font-size: 110%;
    font-style: italics
    "> 
    <h2 style="text-align:center;
    text-transform:uppercase;
    color:teal;
    ">
    Mitaka Trade Africa Company Ltd.
    </h2>
    <p>Hi there, we have received your load details, we will get in touch with you shortly.</p>
     </div>
    `;
  return response;
};

//Send grid

export const sendgridEmail = (email: string) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
    const msg = {
      to: `${email}`, 
      from: "admin@mitakatradeafrica.com", 
      subject: "Starting out with a Test Email",
      text: "and easy to do anywhere, even with Node.js",
      html: "<strong>and easy to do anywhere, even with Node.js</strong>",
    };
    sgMail
      .send(msg)
      .then(() => {
        console.log("Email sent");
      })
      .catch((error: any) => {
        console.error(error);
      });
}