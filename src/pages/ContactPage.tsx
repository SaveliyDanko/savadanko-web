import { useState, type FormEvent, type ReactNode } from "react";
import {
  ExternalLink,
  GitBranch,
  Link2,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { motion } from "framer-motion";
import { Section } from "@/components/layout";
import {
  contactFormPlaceholders,
  contactPageHero,
  contactPageMeta,
  contactPageSocials,
} from "@/data/contactPage";

const socialIcons = {
  github: GitBranch,
  linkedin: Link2,
  x: Send,
  "stack-overflow": ExternalLink,
} as const;

const inputClassName =
  "h-11 w-full rounded-[12px] border border-white/[0.08] bg-white/[0.03] px-4 text-[14px] text-white/88 outline-none transition-colors duration-300 placeholder:text-[#5b627b] focus:border-[#3453a8]";

function InfoCard({
  title,
  highlighted = false,
  children,
}: {
  title: string;
  highlighted?: boolean;
  children: ReactNode;
}) {
  return (
    <article
      className={[
        "rounded-[22px] border px-5 py-5 sm:px-6 sm:py-6",
        highlighted
          ? "border-[#23386f] bg-[linear-gradient(180deg,rgba(7,10,20,0.98),rgba(5,8,16,0.98))] shadow-[inset_0_0_0_1px_rgba(58,92,184,0.08),0_0_0_1px_rgba(25,37,77,0.18)]"
          : "border-white/[0.04] bg-[linear-gradient(180deg,rgba(5,7,14,0.96),rgba(4,6,12,0.98))]",
      ].join(" ")}
    >
      <h2 className="text-[18px] font-semibold tracking-[-0.02em] text-white/92">
        {title}
      </h2>
      <div className="mt-3">{children}</div>
    </article>
  );
}

export function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent(form.subject || "New contact request");
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        "",
        form.message,
      ].join("\n"),
    );

    window.location.href = `mailto:${contactPageMeta.email}?subject=${subject}&body=${body}`;
  }

  return (
    <Section className="relative min-h-[calc(100vh-64px)] overflow-hidden py-24 sm:py-28 lg:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#22346a] to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-[44rem] -translate-x-1/2 bg-[radial-gradient(circle,rgba(46,74,166,0.10),transparent_70%)] blur-3xl" />

      <div className="mx-auto max-w-[1008px]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <h1 className="text-[48px] font-bold tracking-[-0.04em] text-white sm:text-[60px] lg:text-[64px]">
            {contactPageHero.title}
          </h1>
          <p className="mt-5 max-w-[780px] text-[17px] leading-8 text-[#6e748b] sm:text-[18px]">
            {contactPageHero.subtitle}
          </p>
          <div className="mt-10 h-px w-full bg-[linear-gradient(90deg,rgba(62,94,186,0.68),rgba(31,39,70,0.9)_22%,rgba(255,255,255,0.04)_72%,transparent)]" />
          <div className="mt-2 h-7 w-full bg-[linear-gradient(180deg,rgba(6,10,21,0.62),rgba(4,7,14,0))]" />
        </motion.div>

        <motion.div
          className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,0.96fr)_minmax(420px,1.04fr)] lg:items-start"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          <div className="space-y-7">
            <InfoCard title="Email" highlighted>
              <a
                href={`mailto:${contactPageMeta.email}`}
                className="inline-flex items-center gap-2 text-[15px] text-[#666d85] transition-colors duration-300 hover:text-white"
              >
                <Mail size={15} className="text-[#5a617b]" />
                {contactPageMeta.email}
              </a>
            </InfoCard>

            <InfoCard title="Location">
              <div className="inline-flex items-center gap-2 text-[15px] text-[#666d85]">
                <MapPin size={15} className="text-[#5a617b]" />
                {contactPageMeta.location}
              </div>
            </InfoCard>

            <InfoCard title="Social">
              <div className="space-y-3">
                {contactPageSocials.map((social) => {
                  const Icon = socialIcons[social.icon];
                  const isPlaceholder = social.href === "#";

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target={isPlaceholder ? undefined : "_blank"}
                      rel={isPlaceholder ? undefined : "noopener noreferrer"}
                      className="flex items-center gap-2 text-[15px] text-[#666d85] transition-colors duration-300 hover:text-white"
                    >
                      <Icon size={15} className="text-[#5a617b]" />
                      {social.label}
                    </a>
                  );
                })}
              </div>
            </InfoCard>
          </div>

          <div className="rounded-[24px] border border-white/[0.04] bg-[linear-gradient(180deg,rgba(5,7,14,0.96),rgba(4,6,12,0.98))] px-5 py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] sm:px-6 sm:py-7">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-[14px] font-medium text-white/90">
                    Name
                  </span>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        name: event.target.value,
                      }))
                    }
                    placeholder={contactFormPlaceholders.name}
                    className={inputClassName}
                    required
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-[14px] font-medium text-white/90">
                    Email
                  </span>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        email: event.target.value,
                      }))
                    }
                    placeholder={contactFormPlaceholders.email}
                    className={inputClassName}
                    required
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-[14px] font-medium text-white/90">
                  Subject
                </span>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      subject: event.target.value,
                    }))
                  }
                  placeholder={contactFormPlaceholders.subject}
                  className={`${inputClassName} w-full`}
                  required
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-[14px] font-medium text-white/90">
                  Message
                </span>
                <textarea
                  value={form.message}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      message: event.target.value,
                    }))
                  }
                  placeholder={contactFormPlaceholders.message}
                  className="min-h-[96px] w-full resize-none rounded-[14px] border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-[14px] text-white/88 outline-none transition-colors duration-300 placeholder:text-[#5b627b] focus:border-[#3453a8] sm:min-h-[116px]"
                  required
                />
              </label>

              <button
                type="submit"
                className="inline-flex h-10 items-center gap-2 rounded-full bg-[#6f8dfd] px-5 text-sm font-semibold text-[#0a0d18] shadow-[0_10px_28px_rgba(111,141,253,0.28)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                <Send size={14} />
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
