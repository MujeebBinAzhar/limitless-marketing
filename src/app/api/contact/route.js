import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request, response) {
  const myEmail = process.env.EMAIL;
  const password = process.env.EMAIL_PASS;

  if (!myEmail) {
    console.error("Personal email is not defined in the environment variables");
    return NextResponse.json(
      { message: "Internal Server Error: Email configuration is missing" },
      { status: 500 }
    );
  }

  try {
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const phone = formData.get("phone");
    const service = formData.get("service");
    const wantToReceiveMessages = formData.get("wantToReceiveMessages");
    const acceptedTerms = formData.get("acceptedTerms");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: myEmail,
        pass: password,
      },
    });

    const mailOptions = {
      from: myEmail,
      to: `admin@limitless-marketing.ie `,
      subject: `New Contact Request from ${name}`,
      html: `
             
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Service Needed:</strong> ${service}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
            <p><strong>Want to receive messages:</strong> ${wantToReceiveMessages}</p>
            <p><strong>Accepted Terms:</strong> ${acceptedTerms}</p>
        `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(info);
    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Error sending email: ", error);
    return NextResponse.json(
      { message: "Internal Server Error: Failed to send email" },
      { status: 500 }
    );
  }
}
