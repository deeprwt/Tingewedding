"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { Check } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  phone: string;
  date: string;
  guests: string;
  location: string;
  message: string;
}

const INITIAL: FormState = {
  name: "",
  email: "",
  phone: "",
  date: "",
  guests: "",
  location: "",
  message: "",
};

export function ContactForm(): JSX.Element {
  const [data, setData] = React.useState<FormState>(INITIAL);
  const [status, setStatus] = React.useState<"idle" | "submitting" | "sent">(
    "idle",
  );

  const update =
    (k: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      setData((d) => ({ ...d, [k]: e.target.value }));
    };

  const onSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setStatus("submitting");
    await new Promise((r) => window.setTimeout(r, 800));
    setStatus("sent");
    setData(INITIAL);
  };

  return (
    <ScrollReveal>
      <form onSubmit={onSubmit} className="grid gap-8 md:grid-cols-2">
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="name">Your name</Label>
          <Input
            id="name"
            required
            value={data.name}
            onChange={update("name")}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            required
            value={data.email}
            onChange={update("email")}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" value={data.phone} onChange={update("phone")} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="date">Wedding date</Label>
          <Input
            id="date"
            type="date"
            value={data.date}
            onChange={update("date")}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="guests">Estimated guests</Label>
          <Input
            id="guests"
            inputMode="numeric"
            value={data.guests}
            onChange={update("guests")}
          />
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="location">Preferred location</Label>
          <Input
            id="location"
            placeholder="Udaipur, Goa, Tuscany…"
            value={data.location}
            onChange={update("location")}
          />
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="message">Tell us about the celebration</Label>
          <Textarea
            id="message"
            rows={5}
            value={data.message}
            onChange={update("message")}
          />
        </div>

        <div className="md:col-span-2 flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
          <Button
            type="submit"
            size="lg"
            variant="default"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Sending…" : "Send enquiry"}
          </Button>
          {status === "sent" ? (
            <p className="inline-flex items-center gap-2 text-sm text-primary">
              <Check className="h-4 w-4 text-accent" />
              Thank you — we'll be in touch within 48 hours.
            </p>
          ) : (
            <p className="text-xs text-muted-foreground">
              We respond to every enquiry personally.
            </p>
          )}
        </div>
      </form>
    </ScrollReveal>
  );
}
