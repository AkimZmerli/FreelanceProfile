"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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



const ContactForm = () => {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=6LeA3NoqAAAAAEguX1FK3SzG8-WtM9Tp42kTXuHx`;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    grecaptcha.ready(() => {
      grecaptcha.execute('6LeA3NoqAAAAAEguX1FK3SzG8-WtM9Tp42kTXuHx', { action: 'submit' }).then(async (token: string) => {
        const formData = new FormData(event.target as HTMLFormElement);
        formData.append('g-recaptcha-response', token);

        // Call SendEmail with formData
        await SendEmail(formData);
      });
    });
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle className="icon_underline">Leave me a message!</CardTitle>
          <CardDescription>
after sending the form, you will be redirected to the main page          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              name="name"
              required
              placeholder="enter your name"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              name="SenderEmail"
              required
              placeholder="enter your email"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
            <Label htmlFor="message">Your Message</Label>
            <textarea
              placeholder="how can I assist you?"
              name="message"
              required
              className=" resize-none flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            ></textarea>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
          send
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default ContactForm;
