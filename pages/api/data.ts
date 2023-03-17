// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer';
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'andre.flamand1998@gmail.com',
    pass: 'htyui8967',
  },
});

const sendMail = (name: string, phone: string) => {
  const mailOptions = {
    from: ' andre.flamand1998@gmail.com',
    to: 'carmenhernandez.888342@gmail.com',
    subject: 'New form submission',
    html: `
      <h2>New form submission</h2>
      <p>Name: ${name}</p>
      <p>Phone: ${phone}</p>
    
    `,
  };

  transporter.sendMail(mailOptions, (error: any, info: { response: string; }) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
   let phone = req.body.phone
   let name = req.body.name
    sendMail(name, phone);
   

    res.status(200).json({ success: true });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
