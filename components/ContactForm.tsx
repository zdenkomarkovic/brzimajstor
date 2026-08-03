"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: formData.get("phone") ? String(formData.get("phone")) : undefined,
      message: String(formData.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();

      if (!response.ok || !data.success) {
        setStatus("error");
        setErrorMessage(data.message ?? "Došlo je do greške. Pokušajte ponovo.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Došlo je do greške. Proverite internet konekciju i pokušajte ponovo.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-6 text-sm text-green-800">
        ✅ Hvala! Vaša poruka je uspešno poslata, javićemo vam se u najkraćem roku.
        Za hitne slučajeve, najbrže je da nas pozovete telefonom.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-primary">
            Ime i prezime
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            minLength={2}
            maxLength={100}
            className="mt-1.5 w-full rounded-lg border border-black/10 px-3.5 py-2.5 text-sm outline-none focus:border-primary"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-primary">
            Telefon (opciono)
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="mt-1.5 w-full rounded-lg border border-black/10 px-3.5 py-2.5 text-sm outline-none focus:border-primary"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-primary">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1.5 w-full rounded-lg border border-black/10 px-3.5 py-2.5 text-sm outline-none focus:border-primary"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-primary">
          Opišite kvar
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={2000}
          rows={5}
          className="mt-1.5 w-full rounded-lg border border-black/10 px-3.5 py-2.5 text-sm outline-none focus:border-primary"
        />
      </div>

      {status === "error" && errorMessage && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center rounded-lg bg-primary px-6 py-3.5 text-base font-bold text-white transition hover:bg-primary-light disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Slanje..." : "Pošaljite poruku"}
      </button>
    </form>
  );
}
