const REASONS = [
  {
    icon: "⚡",
    title: "Brz dolazak na teren",
    text: "Ekipa je raspoređena po celom Beogradu, pa na hitne pozive reagujemo u najkraćem mogućem roku.",
  },
  {
    icon: "🕐",
    title: "Dostupni 0-24",
    text: "Radimo svaki dan, uključujući noćne sate, vikende i praznike — kvar ne čeka radno vreme.",
  },
  {
    icon: "🛠️",
    title: "Iskusni majstori",
    text: "Vodoinstalateri, električari i serviseri grejanja sa dugogodišnjim iskustvom na terenu.",
  },
  {
    icon: "💰",
    title: "Fer i jasna cena",
    text: "Cenu i obim posla dogovaramo unapred, bez skrivenih troškova po završetku intervencije.",
  },
  {
    icon: "✅",
    title: "Garancija na rad",
    text: "Iza svake izvedene intervencije stojimo garancijom na ugrađen materijal i izveden rad.",
  },
  {
    icon: "📍",
    title: "Ceo Beograd",
    text: "Izlazimo na adresu u svim opštinama — od centra grada do Novog Beograda, Zemuna i Surčina.",
  },
];

export function WhyUs() {
  return (
    <section className="bg-primary/[0.03] py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-2xl font-extrabold text-primary sm:text-3xl">
            Zašto izabrati HausMajstor Beograd
          </h2>
          <p className="mt-3 text-base text-primary/70">
            Pouzdan majstor za hitne slučajeve, kada je najvažnije da neko
            odmah dođe i reši problem.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason) => (
            <div
              key={reason.title}
              className="rounded-xl border border-black/5 bg-white p-6 shadow-sm"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/15 text-xl">
                {reason.icon}
              </div>
              <h3 className="mt-4 font-heading text-base font-bold text-primary">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-primary/70">
                {reason.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
