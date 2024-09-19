import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
    const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_FORM_KEY || '');

    if (state.succeeded) {
        return (
            <div id="contact" className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
                <p className="text-center text-green-600 font-semibold">
                    Thank you! Your message has been sent.
                </p>
            </div>
        );
    }

    return (
        <div id="contact">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
            </div>
            <div className="max-w-md mx-auto mt-10 p-6 bg-white border rounded-lg shadow-md">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="fullName" className="block text-base font-medium text-gray-700">
                            Full Name
                        </label>
                        <input
                            id="fullName"
                            type="text"
                            name="fullName"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm
                       focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                        <ValidationError
                            prefix="Full Name"
                            field="fullName"
                            errors={state.errors}
                            className="text-red-600 text-sm mt-1"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-base font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm
                       focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                            className="text-red-600 text-sm mt-1"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-base font-medium text-gray-700">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm
                       focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        ></textarea>
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                            className="text-red-600 text-sm mt-1"
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={state.submitting}
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md
                       shadow-sm text-xl font-medium text-white bg-indigo-900 hover:bg-indigo-700
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                       disabled:opacity-50"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
