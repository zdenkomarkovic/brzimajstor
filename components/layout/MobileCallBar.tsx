import { PHONE_HREF, VIBER_HREF, WHATSAPP_HREF } from "@/lib/constants";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-black/10 bg-white shadow-[0_-4px_16px_rgba(0,0,0,0.08)] lg:hidden">
      <a
        href={PHONE_HREF}
        className="flex flex-1 items-center justify-center gap-2 bg-accent py-3.5 text-sm font-bold text-primary-dark"
      >
        📞 Pozovite odmah
      </a>
      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 bg-[#25D366] py-3.5 text-sm font-bold text-white"
      >
        WhatsApp
      </a>
      <a
        href={VIBER_HREF}
        className="flex flex-1 items-center justify-center gap-2 bg-[#7360F2] py-3.5 text-sm font-bold text-white"
      >
        Viber
      </a>
    </div>
  );
}
