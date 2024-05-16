'use client';
import { useState } from 'react';
import { contactSchema } from '../lib/zodSchema';
import { createContact } from "@/lib/actions";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import LoadingSpinner from './loading-spinner';
import { SendHorizontal } from "lucide-react"

export default function ContactForm() {
    const [status, setStatus] = useState('idle'); // 'loading', 'success', 'error'
    const [errorMessage, setErrorMessage] = useState('');
    const [formErrors, setFormErrors] = useState({});
    const [contact, setContact] = useState({ name: '', email: '' });

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        setStatus('loading');

        const formData = new FormData(event.target);
        const data = {
            name: formData.get('name'),
            company: formData.get('company'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            message: formData.get('message')
        };

        // Client-side validation
        const result = contactSchema.safeParse(data);

        if (!result.success) {
            setStatus('error');
            setFormErrors(result.error.formErrors.fieldErrors);
            return;
        }

        const response = await createContact(formData);

        if (response.success) {
            setStatus('success');
            setContact(response.contact)
        } else {
            setStatus('error');
            setErrorMessage(response.error);
        }
    };

    if (status === 'loading') {
        return <LoadingSpinner />;
    }

    if (status === 'success') {
        return <div className="flex flex-col items-center justify-center space-y-6 py-12 md:py-24">
            <div className="flex flex-col items-center space-y-2">
                <div className="text-4xl font-bold">Thanks, {contact.name}!</div>
                <p className="text-gray-500 dark:text-gray-400">
                    We've received your information and will be in touch soon at
                    <span className="font-medium">{" "}{contact.email}</span>.{"\n            "}
                </p>
            </div>
            <p className="max-w-md text-center text-gray-500 dark:text-gray-400">
                We're excited to work with you and help you achieve your goals. Our team will be in touch shortly to discuss the
                next steps.
            </p>
        </div>
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {status === 'error' && errorMessage && <p>Error: {errorMessage}</p>}
            <div className="flex flex-col md:flex-row md:space-x-4">
                <div className="flex-1 space-y-1">
                    <Label htmlFor="name">Name</Label>
                    <Input placeholder="Full Name" name="name" required />
                    {/* {formErrors.name && <span>{formErrors.name[0]}</span>} */}
                </div>
                <div className="flex-1 space-y-1">
                    <Label htmlFor="company">Company</Label>
                    <Input placeholder="Your Company" name="company" />
                    {/* {formErrors.company && <span>{formErrors.company[0]}</span>} */}
                </div>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-4">
                <div className="flex-1 space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input placeholder="example@domain.com" name="email" required type="email" />
                    {/* {formErrors.email && <span>{formErrors.email[0]}</span>} */}
                </div>
                <div className="flex-1 space-y-1">
                    <Label htmlFor="phone">Phone</Label>
                    <Input placeholder="(012)-345-6789" name="phone" required type="tel" />
                    {/* {formErrors.phone && <span>{formErrors.phone[0]}</span>} */}
                </div>
            </div>
            <div className="space-y-1">
                <Label htmlFor="message">Message</Label>
                <Textarea placeholder="Type your message" name="message" />
                {/* {formErrors.message && <span>{formErrors.message[0]}</span>} */}
            </div>
            <Button className="bg-radius-md text-black text-lg bg-blue-300 hover:bg-blue-400" type="submit"> <SendHorizontal className="text-xl text-gray-800 dark:text-gray-50" /></Button>
        </form>
    );
}
