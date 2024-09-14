import connectToDatabase from '../../lib/dbConnect';
import Submission from '../../models/submission';
import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Set SendGrid API Key
const sendGridApiKey = process.env.SENDGRID_API_KEY;
if (!sendGridApiKey) {
  throw new Error('SENDGRID_API_KEY is not defined');
}
sgMail.setApiKey(sendGridApiKey);

export async function POST(request: Request) {
  await connectToDatabase();
  const body = await request.json();
  const { name, email, message } = body;

  try {  
    // Save submission to the database
    const submission = await Submission.create({
      name,
      email,
      message,
      createdAt: new Date(),
    });

    // Prepare the email message
    const msg = {
      to: 'rupam.kundu@eternajuvita.com', 
      from: 'rupam.kundu@eternajuvita.com', 
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send the email
    await sgMail.send(msg);

    return NextResponse.json({ message: 'Submission received!', submission });
  } catch (error) {
    console.error('Error processing submission:', error);
    console.log()
    return NextResponse.json(
      { message: 'Error processing submission.' },
      { status: 500 }
    );
  }
}
