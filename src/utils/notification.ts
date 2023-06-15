import {
  FromAdminMail,
  userSubject,
} from "../Config";
const sgMail = require("@sendgrid/mail");




export const emailHtml = (firstName: string): string => {
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
    color:#c89116;
    ">
    Mitaka Trade Africa Company Ltd.
    </h2>
    <p>Dear ${firstName}, thank you for choosing Mitaka Trade Company.</p>
    <p><strong>We have received your load request and we will respond to you shortly about your quotation.</strong></p>
     
    <p>Best,<p>
    <div style="font-family: Arial, sans-serif; font-size: 14px; line-height: 1.5; color: #333333;">
        Olabimpe Enike<br>
        General Manager, Mitaka Trade Africa Limited<br><br>

        M: <a href="tel:+2348038384141" style="color: #333333; text-decoration: none;">+234-803-838-4141</a><br>
        T: <a href="tel:091MITAKA" style="color: #333333; text-decoration: none;">091MITAKA (0913 612 6191)</a><br>
        E: <a href="mailto:admin@mitakatradeafrica.com" style="color: #333333; text-decoration: none;">admin@mitakatradeafrica.com</a><br>
        W: <a href="http://www.mitakatradeafrica.com" style="color: #333333; text-decoration: none;">www.mitakatradeafrica.com</a><br><br>

        Plot 3b, Oko Awo Street,<br>
        Victoria Island, Lagos.<br><br>
    </div>
    </div>
    `;
  return response;
};

//Send grid

export const sendgridEmail = (email: string, firstName: string) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
    const msg = {
      to: `${email}`,
      from: `${process.env.ADMIN_MAIL!}`,
      subject: "Thank you for reaching out to Mitaka",
      text: "Invest now and save 10 year upfront mainenance cost.",
      html: `${emailHtml(firstName)}`,
    };
    sgMail
      .send(msg)
      .then(() => {
        console.log("Email sent");
      })
      .catch((error: any) => {
        console.error(error.response.body);
      });
}