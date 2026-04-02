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
import { contactPageMeta, contactPageSocials } from "@/data/contactPage";
import { useTranslation } from "@/app/providers";

const socialIcons = {
  github: GitBranch,
  x: Send,
  "stack-overflow": ExternalLink,
} as const;

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
          ? "border-[var(--card-featured-border)] bg-card-featured shadow-card-featured"
          : "border-card-border bg-card-gradient shadow-card",
      ].join(" ")}
    >
      <h2 className="text-[18px] font-semibold tracking-[-0.02em] text-heading/92">
        {title}
      </h2>
      <div className="mt-3">{children}</div>
    </article>
  );
}

export function ContactPage() {
  const t = useTranslation();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent(
      form.subject || t.contact.formDefaultSubject,
    );
    const body = encodeURIComponent(
      [
        `${t.contact.formName}: ${form.name}`,
        `${t.contact.formEmail}: ${form.email}`,
        "",
        form.message,
      ].join("\n"),
    );

    window.location.href = `mailto:${contactPageMeta.email}?subject=${subject}&body=${body}`;
  }

  const inputClassName =
    "h-11 w-full rounded-[12px] border border-input-border bg-input-bg px-4 text-[14px] text-heading/88 outline-none transition-colors duration-300 placeholder:text-body-secondary focus:border-input-focus";

  return (
    <Section className="relative min-h-[calc(100vh-64px)] overflow-hidden py-24 sm:py-28 lg:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-section-label/40 to-transparent" />
      <div className="glow pointer-events-none absolute left-1/2 top-20 h-72 w-[44rem] -translate-x-1/2 bg-[radial-gradient(circle,rgba(46,74,166,0.10),transparent_70%)] blur-3xl" />

      <div className="mx-auto max-w-[1008px]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <h1 className="text-[48px] font-bold tracking-[-0.04em] text-heading sm:text-[60px] lg:text-[64px]">
            {t.contact.title}
          </h1>
          <p className="mt-5 max-w-[780px] text-[17px] leading-8 text-body sm:text-[18px]">
            {t.contact.subtitle}
          </p>
          <div className="mt-10 h-px w-full bg-gradient-to-r from-section-label/60 via-section-label/20 to-transparent" />
          <div className="mt-2 h-7 w-full bg-gradient-to-b from-surface/60 to-transparent" />
        </motion.div>

        <motion.div
          className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,0.96fr)_minmax(420px,1.04fr)] lg:items-start"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          <div className="space-y-7">
            <InfoCard title={t.contact.emailTitle} highlighted>
              <a
                href={`mailto:${contactPageMeta.email}`}
                className="inline-flex items-center gap-2 text-[15px] text-body transition-colors duration-300 hover:text-heading"
              >
                <Mail size={15} className="text-body" />
                {contactPageMeta.email}
              </a>
            </InfoCard>

            <InfoCard title={t.contact.locationTitle}>
              <div className="inline-flex items-center gap-2 text-[15px] text-body">
                <MapPin size={15} className="text-body" />
                {t.contact.location}
              </div>
            </InfoCard>

            <InfoCard title={t.contact.socialTitle}>
              <div className="space-y-3">
                {contactPageSocials.map((social) => {
                  const Icon = socialIcons[social.icon];
                  const isPlaceholder = social.href === "#";

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target={isPlaceholder ? undefined : "_blank"}
                      rel={
                        isPlaceholder ? undefined : "noopener noreferrer"
                      }
                      className="flex items-center gap-2 text-[15px] text-body transition-colors duration-300 hover:text-heading"
                    >
                      <Icon size={15} className="text-body" />
                      {social.label}
                    </a>
                  );
                })}
              </div>
            </InfoCard>
          </div>

          <div className="rounded-[24px] border border-card-border bg-card-gradient px-5 py-6 shadow-card sm:px-6 sm:py-7">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-[14px] font-medium text-heading/90">
                    {t.contact.formName}
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
                    placeholder={t.contact.formNamePlaceholder}
                    className={inputClassName}
                    required
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-[14px] font-medium text-heading/90">
                    {t.contact.formEmail}
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
                    placeholder={t.contact.formEmailPlaceholder}
                    className={inputClassName}
                    required
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-[14px] font-medium text-heading/90">
                  {t.contact.formSubject}
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
                  placeholder={t.contact.formSubjectPlaceholder}
                  className={`${inputClassName} w-full`}
                  required
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-[14px] font-medium text-heading/90">
                  {t.contact.formMessage}
                </span>
                <textarea
                  value={form.message}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      message: event.target.value,
                    }))
                  }
                  placeholder={t.contact.formMessagePlaceholder}
                  className="min-h-[96px] w-full resize-none rounded-[14px] border border-input-border bg-input-bg px-4 py-3 text-[14px] text-heading/88 outline-none transition-colors duration-300 placeholder:text-body-secondary focus:border-input-focus sm:min-h-[116px]"
                  required
                />
              </label>

              <button
                type="submit"
                className="inline-flex h-10 items-center gap-2 rounded-full bg-[#6f8dfd] px-5 text-sm font-semibold text-[#0a0d18] shadow-[0_10px_28px_rgba(111,141,253,0.28)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                <Send size={14} />
                {t.contact.formSubmit}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
