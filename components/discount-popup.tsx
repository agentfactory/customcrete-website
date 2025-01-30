'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

export function DiscountPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    // Check if the popup has been shown before
    const hasShownPopup = localStorage.getItem('hasShownDiscountPopup');
    
    if (!hasShownPopup) {
      // Show popup after 5 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Store that we've shown the popup
    localStorage.setItem('hasShownDiscountPopup', 'true');
    
    // Here you would typically send the email to your backend
    console.log('Email submitted:', email);
    
    // Show success message
    toast({
      title: "Success!",
      description: "Your 10% discount code has been sent to your email. We'll contact you shortly about your free quote!",
    });
    
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Get 10% Off Your Next Project!
          </DialogTitle>
          <DialogDescription className="text-center pt-4">
            <span className="text-orange-600 font-semibold">Limited Time Offer:</span> Sign up now to receive:
            <ul className="mt-4 space-y-2 text-left list-disc pl-4">
              <li>10% discount on your next project</li>
              <li>Free, no-obligation quote</li>
              <li>Expert consultation</li>
            </ul>
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
            />
          </div>
          <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white">
            Get My Discount
          </Button>
          <p className="text-xs text-gray-500 text-center mt-4">
            By submitting, you agree to receive promotional emails. You can unsubscribe at any time.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
