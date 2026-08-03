import { JsonLd } from "@/components/seo/JsonLd";

export interface FaqItem {
  question: string;
  answer: string;
}

export function FAQ({
  items,
  title = "Često postavljana pitanja",
}: {
  items: FaqItem[];
  title?: string;
}) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <JsonLd data={faqJsonLd} />
      <h2 className="text-center font-heading text-2xl font-extrabold text-primary sm:text-3xl">
        {title}
      </h2>
      <div className="mt-8 space-y-3">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded-xl border border-black/10 bg-white p-5 open:shadow-sm"
          >
            <summary className="cursor-pointer list-none font-heading text-base font-semibold text-primary marker:content-none">
              <span className="flex items-center justify-between gap-4">
                {item.question}
                <span className="shrink-0 text-accent-dark transition group-open:rotate-45">
                  +
                </span>
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-primary/70">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
