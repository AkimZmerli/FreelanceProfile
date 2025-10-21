"use client";

import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { SendEmail } from "../actions/SendEmail";
import { useEffect, useState, useRef } from "react";
import ElectricBorder from "@/shared/components/ElectricBorder";



const ContactForm = () => {
  const [isCountingDown, setIsCountingDown] = useState(false);
  const [countdown, setCountdown] = useState(10);
  const [milliseconds, setMilliseconds] = useState(0);
  const [showGlitch, setShowGlitch] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

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
        try {
          await SendEmail(formData);
          (event.target as HTMLFormElement).reset();
          setIsCountingDown(true);
          
          // Start countdown with milliseconds
          let totalMs = 10000; // 10 seconds in milliseconds
          intervalRef.current = setInterval(() => {
            totalMs -= 10;
            const seconds = Math.floor(totalMs / 1000);
            const ms = Math.floor((totalMs % 1000) / 10);
            
            setCountdown(seconds);
            setMilliseconds(ms);
            
            if (totalMs <= 0) {
              clearInterval(intervalRef.current!);
              handleCountdownComplete();
            }
          }, 10);
        } catch (error) {
          console.error('Error sending email:', error);
          alert('An error occurred while sending the email. Please try again later.');
        }
      });
    });
  };

  const handleCountdownComplete = () => {
    // Page shake animation
    document.body.style.animation = 'shake 0.5s ease-in-out 3';
    
    // Show glitch effect after shake animation completes
    setTimeout(() => {
      setShowGlitch(true);
      // Dispatch event to trigger letter rain
      window.dispatchEvent(new CustomEvent('glitch-activated'));
      // Reset states
      setIsCountingDown(false);
      setCountdown(10);
      setMilliseconds(0);
    }, 1500);
  };

  // Cleanup interval on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  if (showGlitch) {
    return (
        <ElectricBorder 
          color='#E91E63'
          speed={1}
          chaos={0.5}
          thickness={2}
          style={{ borderRadius: 16 }}
        >
        <Card className="bg-transparent border-none">
          <CardHeader className="glitch-header">
            <CardTitle className="glitch-title">SYSTEM BREACH</CardTitle>
            <CardDescription className="glitch-description">Unauthorized access detected...</CardDescription>
          </CardHeader>
          <CardContent className="glitch-content-area">
            <div className="glitch-text">INITIATING COUNTERMEASURES</div>
            <div className="glitch-text">FIREWALL STATUS: COMPROMISED</div>
            <div className="glitch-text">ACTIVATING DEFENSE PROTOCOLS</div>
          </CardContent>
          <CardFooter className="glitch-footer">
            <div className="glitch-text">TRACING INTRUSION SOURCE...</div>
          </CardFooter>
        </Card>
        </ElectricBorder>
    );
  }

  return (
    <Card>
       
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle className="icon_underline">Leave me a message!</CardTitle>
          <CardDescription>
            after sending, you will have {isCountingDown ? (
              <span className={`font-bold inline-block w-16 text-center ${countdown <= 5 ? 'text-red-500 animate-pulse' : ''}`}>
                {countdown}.{milliseconds.toString().padStart(2, '0')}
              </span>
            ) : (
              <span className="font-bold inline-block w-16 text-center">10<span className="invisible">.00</span></span>
            )} secs to leave the page
          </CardDescription>
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
