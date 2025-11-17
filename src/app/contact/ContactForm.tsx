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
import { SendEmail } from "./SendEmail";
import { useEffect, useState, useRef } from "react";
import ElectricBorder from "@/shared/components/ElectricBorder";



const ContactForm = () => {
  const [isCountingDown, setIsCountingDown] = useState(false);
  const [countdown, setCountdown] = useState(10);
  const [milliseconds, setMilliseconds] = useState(0);
  const [showGlitch, setShowGlitch] = useState(false);
  const [progressBar, setProgressBar] = useState('');
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=6LeA3NoqAAAAAEguX1FK3SzG8-WtM9Tp42kTXuHx`;
    script.async = true;
    document.body.appendChild(script);
  }, []);



  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      // Check if grecaptcha is available
      if (typeof grecaptcha === 'undefined') {
        throw new Error('reCAPTCHA is not loaded. Please refresh the page and try again.');
      }

      // Wrap grecaptcha calls in promise for better error handling
      const executeRecaptcha = (): Promise<string> => {
        return new Promise((resolve, reject) => {
          try {
            grecaptcha.ready(() => {
              grecaptcha.execute('6LeA3NoqAAAAAEguX1FK3SzG8-WtM9Tp42kTXuHx', { action: 'submit' })
                .then((token: string) => resolve(token))
                .catch((error: any) => reject(new Error('reCAPTCHA verification failed')));
            });
          } catch (error) {
            reject(new Error('reCAPTCHA is not available'));
          }
        });
      };

      const token = await executeRecaptcha();
      const formData = new FormData(event.target as HTMLFormElement);
      formData.append('g-recaptcha-response', token);

      // Call server action
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
      const errorMessage = error instanceof Error ? error.message : 'An error occurred while sending the email. Please try again later.';
      alert(errorMessage);
    }
  };

  const handleCountdownComplete = () => {
    // Page shake animation
    document.body.style.animation = 'shake 0.5s ease-in-out 3';
    
    // Show glitch effect after shake animation completes
    setTimeout(() => {
      setShowGlitch(true);
      // Dispatch event to trigger letter rain
      window.dispatchEvent(new CustomEvent('glitch-activated'));
      
      // Start progress bar animation
      let progress = 0;
      progressRef.current = setInterval(() => {
        progress += 1;
        const hashes = '#'.repeat(Math.floor(progress / 2));
        const spaces = ' '.repeat(50 - Math.floor(progress / 2));
        setProgressBar(`[${hashes}${spaces}] ${progress}%`);
        
        if (progress >= 100) {
          clearInterval(progressRef.current!);
          setProgressBar('[##################################################] COMPLETE');
        }
      }, 80);
      
      // Reset states
      setIsCountingDown(false);
      setCountdown(10);
      setMilliseconds(0);
    }, 1500);
  };

  // Cleanup intervals on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (progressRef.current) {
        clearInterval(progressRef.current);
      }
    };
  }, []);

  if (showGlitch) {
    return (
        <ElectricBorder 
          color='#ec4899'
          speed={1.5}
          chaos={0.8}
          thickness={3}
          style={{ borderRadius: 16 }}
          className="w-full max-w-2xl"
        >
        <Card className="bg-transparent border-none min-h-[400px]">
          <CardHeader className="glitch-header pb-6">
            <CardTitle className="glitch-title text-3xl">SYSTEM BREACH</CardTitle>
            <CardDescription className="glitch-description text-lg">Unauthorized access detected...</CardDescription>
          </CardHeader>
          <CardContent className="glitch-content-area space-y-4 pb-6">
            <div className="glitch-text text-lg">INITIATING COUNTERMEASURES</div>
            <div className="glitch-text text-lg">FIREWALL STATUS: COMPROMISED</div>
            <div className="glitch-text text-lg">ACTIVATING DEFENSE PROTOCOLS</div>
            <div className="glitch-text text-lg">SCANNING NETWORK TOPOLOGY</div>
            <div className="glitch-text text-lg">DEPLOYING HONEYPOTS</div>
          </CardContent>
          <CardFooter className="glitch-footer flex-col justify-center space-y-4">
            <div className="glitch-text text-lg">TRACING INTRUSION SOURCE...</div>
            <div className="w-full">
              <div className="glitch-text text-sm font-mono text-pink-400 bg-black/20 p-3 rounded border border-pink-500/30 min-h-[2rem] flex items-center">
                <span className="font-mono whitespace-pre">
                  {progressBar || '[                                                  ]   0%'}
                </span>
              </div>
            </div>
          </CardFooter>
        </Card>
        </ElectricBorder>
    );
  }

  return (
    <Card>
       
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle className="icon_underline mb-2">Drop me a message!</CardTitle>
          <CardDescription>
            after sending, you will have {isCountingDown ? (
              <span className={`font-bold inline-block w-10 text-center ${countdown <= 5 ? 'text-red-500 animate-pulse' : ''}`}>
                {countdown}.{milliseconds.toString().padStart(2, '0')}
              </span>
            ) : (
              <span className="font-bold inline-block text-center">10.00</span>
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
