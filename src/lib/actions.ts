// actions.ts
'use server'

import { contactSchema } from './zodSchema';
import prisma from "./prisma";
import nodemailer from 'nodemailer';

// rate limiting
// recaptcha

function getAdminEmailTemplate({ name, email, phone, message }) {
    return `
      <h1>New Contact Request from ${name}</h1>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `;
}

function getContactEmailTemplate() {
    return `
      <h1>Thank you for contacting Take Offer</h1>
      <p>We have received your message and will be in touch soon.</p>
      <p>In the meantime, you can visit our website:</p>
      <p><a href="https://TakeOffer.net">Take Offer</a></p>
    `;
}

const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.NODE_EMAIL,
        pass: process.env.NODE_EMAIL_PASSWORD,
    },
});

async function sendEmail(target, subject, htmlContent) {
    const mailOptions = {
        from: process.env.NODE_EMAIL,
        to: target,
        subject,
        html: htmlContent,
    };

    return new Promise((resolve, reject) => {
        transport.sendMail(mailOptions, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve('Email sent');
            }
        });
    });
}

export default sendEmail;

type ContactCreateInput = {
    name: string;
    company?: string | null;
    email: string;
    phone?: string;
    message?: string | null;
};


export async function createContact(formData: FormData) {
    console.log('Creating contact...');
    try {
        const data = {
            name: formData.get('name') as string | null,
            company: formData.get('company') as string | null,
            email: formData.get('email') as string | null,
            phone: formData.get('phone') as string | null,
            message: formData.get('message') as string | null,
        };

        if (!data.name) {
            throw new Error('Name is required');
        }

        const parsedData = contactSchema.parse(data);

        const contact = await prisma.contact.create({
            data: parsedData as ContactCreateInput
        });

        const { name, email, phone, message } = contact;

        if (contact) {
            const adminEmailTemplate = getAdminEmailTemplate({ name, email, phone, message });
            const contactEmailTemplate = getContactEmailTemplate();

            await sendEmail('kwsaund@gmail.com', `New contact from ${name}`, adminEmailTemplate);
            await sendEmail('ssssylassss@gmail.com', `New contact from ${name}`, adminEmailTemplate);
            await sendEmail(email, 'We received your message', contactEmailTemplate);
        }

        return { success: true, contact };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
}