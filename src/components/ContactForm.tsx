"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert } from "@/components/ui/alert"


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { SendEmail } from "./SendEmail";
import { useEffect } from "react";
import { useState } from "react";



const ContactForm = () => {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=6LeA3NoqAAAAAEguX1FK3SzG8-WtM9Tp42kTXuHx`;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const [showAlert, setShowAlert] = useState(false);


  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    grecaptcha.ready(() => {
      grecaptcha.execute('6LeA3NoqAAAAAEguX1FK3SzG8-WtM9Tp42kTXuHx', { action: 'submit' }).then(async (token: string) => {
        const formData = new FormData(event.target as HTMLFormElement);
        formData.append('g-recaptcha-response', token);

        // Call SendEmail with formData
        try {
          await SendEmail(formData);
          (event.target as HTMLFormElement).reset();
          setShowAlert(true);
          setTimeout(() => {
            setShowAlert(false);
          }, 4000);
        } catch (error) {
          console.error('Error sending email:', error);
          alert('An error occurred while sending the email. Please try again later.');
        }
      });
    });
  };

  return (
    <Card>
       
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle className="icon_underline">Leave me a message!</CardTitle>
          <CardDescription>
after sending, you will have 30 secs to leave the page          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full max-w-sm items-center gap-1.5 mt-4">
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              name="name"
              required
              placeholder=""
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 mt-4">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              name="SenderEmail"
              required
              placeholder=""
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 mt-4">
            <Label htmlFor="message">Your Message</Label>
            <textarea
              placeholder="how can I assist you?"
              name="message"
              required
              className=" resize-none flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            ></textarea>
             {showAlert && (
    <Alert
      variant="default"
      className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-full max-w-sm shadow-lg"
      style={{ backgroundColor: '#f0f4f8', color: '#333' }}
    >
      <p>Your message has been sent successfully!</p>
    </Alert>
  )}
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full bg-slate-800 text-gray-100 rounded-md border hover:text-black">
            Send
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default ContactForm;
