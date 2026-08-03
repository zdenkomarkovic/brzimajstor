const STEPS = [
  {
    number: "1",
    title: "Pozovite ili pišite",
    text: "Javite se telefonom, preko Vibera ili WhatsApp-a i opišite kvar.",
  },
  {
    number: "2",
    title: "Dogovor termina",
    text: "Dogovaramo dolazak u najkraćem roku — najčešće isti dan.",
  },
  {
    number: "3",
    title: "Izlazak na teren",
    text: "Majstor dolazi na adresu, dijagnostikuje problem i predlaže rešenje uz cenu unapred.",
  },
  {
    number: "4",
    title: "Popravka i garancija",
    text: "Izvodimo intervenciju i dajemo garanciju na rad i ugrađen materijal.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-primary/[0.03] py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-2xl font-extrabold text-primary sm:text-3xl">
            Kako izgleda naša intervencija
          </h2>
          <p className="mt-3 text-base text-primary/70">
            Jednostavan proces, bez čekanja i nepotrebnog papirovanja.
          </p>
        </div>

        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <li
              key={step.number}
              className="relative rounded-xl border border-black/5 bg-white p-6 shadow-sm"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent font-heading text-sm font-bold text-primary-dark">
                {step.number}
              </span>
              <h3 className="mt-4 font-heading text-base font-bold text-primary">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-primary/70">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
