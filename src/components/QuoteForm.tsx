/** @format */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronLeft, ChevronRight, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { SERVICES } from "@/lib/site";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  service: z.string().min(1),
  urgency: z.string().min(1),
  date: z.string().optional(),
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(160),
  phone: z.string().trim().min(7).max(30),
  zip: z.string().trim().min(3).max(12),
  notes: z.string().trim().max(800).optional(),
});

const URGENCY = [
  "Emergency (24h)",
  "Within a week",
  "This month",
  "Just exploring",
];

export function QuoteForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    service: "",
    urgency: "",
    date: "",
    name: "",
    email: "",
    phone: "",
    zip: "",
    notes: "",
  });

  const setField = <K extends keyof typeof data>(k: K, v: (typeof data)[K]) =>
    setData((d) => ({ ...d, [k]: v }));

  const steps = ["Service", "Schedule", "Contact", "Review"];

  const next = () => {
    if (step === 0 && !data.service)
      return toast.error("Please pick a service");
    if (step === 1 && !data.urgency)
      return toast.error("Please pick a timeframe");
    if (step === 2) {
      const parsed = schema.safeParse(data);
      if (!parsed.success)
        return toast.error("Please complete the contact details");
    }
    setStep((s) => Math.min(s + 1, steps.length - 1));
  };
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const submit = () => {
    const parsed = schema.safeParse(data);
    if (!parsed.success) return toast.error("Please review the form");
    toast.success("Quote requested! We'll call within 1 business hour.");
    setStep(0);
    setData({
      service: "",
      urgency: "",
      date: "",
      name: "",
      email: "",
      phone: "",
      zip: "",
      notes: "",
    });
  };

  return (
    <div className="rounded-3xl border border-border/60 bg-card p-6 shadow-elegant md:p-10">
      <div className="mb-8 flex items-center gap-3">
        {steps.map((s, i) => (
          <div key={s} className="flex flex-1 items-center gap-3">
            <div
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold transition-all ${
                i <= step
                  ? "bg-accent text-accent-foreground"
                  : "bg-secondary text-muted-foreground"
              }`}
            >
              {i < step ? <Check className="h-4 w-4" /> : i + 1}
            </div>
            <span
              className={`hidden text-xs font-medium md:inline ${i === step ? "text-foreground" : "text-muted-foreground"}`}
            >
              {s}
            </span>
            {i < steps.length - 1 && (
              <div
                className={`h-px flex-1 ${i < step ? "bg-accent" : "bg-border"}`}
              />
            )}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.35 }}
        >
          {step === 0 && (
            <div>
              <h3 className="font-display text-2xl font-medium">
                What can we help with?
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Pick the closest match — we'll dig into details next.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {SERVICES.map((s) => (
                  <button
                    key={s.slug}
                    type="button"
                    onClick={() => setField("service", s.title)}
                    className={`group flex items-center gap-3 rounded-2xl border-2 p-4 text-left transition-all ${
                      data.service === s.title
                        ? "border-accent bg-accent/5 text-foreground"
                        : "border-border hover:border-accent/60 text-foreground"
                    }`}
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-accent text-white">
                      <s.icon className="h-5 w-5" />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-sm font-semibold">{s.title}</span>
                      <span className="text-xs text-muted-foreground">
                        {s.short}
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 1 && (
            <div>
              <h3 className="font-display text-2xl font-medium">
                When do you need it?
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                We'll prioritize your slot accordingly.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {URGENCY.map((u) => (
                  <button
                    key={u}
                    type="button"
                    onClick={() => setField("urgency", u)}
                    className={`rounded-2xl border-2 p-4 text-left text-sm font-medium transition-all ${
                      data.urgency === u
                        ? "border-accent bg-accent/5 text-foreground"
                        : "border-border/60 hover:border-accent/60 text-muted-foreground"
                    }`}
                  >
                    {u}
                  </button>
                ))}
              </div>
              <div className="mt-6">
                <Label htmlFor="date">Preferred date (optional)</Label>
                <Input
                  id="date"
                  type="date"
                  value={data.date}
                  onChange={(e) => setField("date", e.target.value)}
                  className="mt-2 rounded-xl"
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 className="font-display text-2xl font-medium">
                Where should we reach you?
              </h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name">Full name</Label>
                  <Input
                    id="name"
                    value={data.name}
                    onChange={(e) => setField("name", e.target.value)}
                    className="mt-2 rounded-xl"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    value={data.phone}
                    onChange={(e) => setField("phone", e.target.value)}
                    className="mt-2 rounded-xl"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={data.email}
                    onChange={(e) => setField("email", e.target.value)}
                    className="mt-2 rounded-xl"
                  />
                </div>
                <div>
                  <Label htmlFor="zip">ZIP code</Label>
                  <Input
                    id="zip"
                    value={data.zip}
                    onChange={(e) => setField("zip", e.target.value)}
                    className="mt-2 rounded-xl"
                  />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="notes">Tell us more (optional)</Label>
                  <Textarea
                    id="notes"
                    rows={4}
                    value={data.notes}
                    onChange={(e) => setField("notes", e.target.value)}
                    className="mt-2 rounded-xl"
                    placeholder="Photos, brand of equipment, gate code, etc."
                  />
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h3 className="font-display text-2xl font-medium">Looks good?</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                A real human will call within 1 business hour.
              </p>
              <dl className="mt-6 divide-y divide-border/60 rounded-2xl border border-border/60 bg-secondary/50 p-2 text-sm">
                {[
                  ["Service", data.service],
                  ["Timeframe", data.urgency],
                  ["Date", data.date || "—"],
                  ["Name", data.name],
                  ["Phone", data.phone],
                  ["Email", data.email],
                  ["ZIP", data.zip],
                  ["Notes", data.notes || "—"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 px-4 py-3">
                    <dt className="text-muted-foreground">{k}</dt>
                    <dd className="font-medium text-foreground text-right">
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 flex items-center justify-between gap-3">
        <Button variant="ghost" onClick={back} disabled={step === 0}>
          <ChevronLeft className="h-4 w-4" /> Back
        </Button>
        {step < steps.length - 1 ? (
          <Button variant="hero" onClick={next}>
            Continue <ChevronRight className="h-4 w-4" />
          </Button>
        ) : (
          <Button variant="hero" onClick={submit}>
            Submit Request <Send className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
