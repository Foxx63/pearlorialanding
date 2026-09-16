import {
  ArrowUpRight,
  Building2,
  Check,
  Handshake,
  Headset,
  Landmark,
  ClipboardCheck,
  FileCheck2,
  MessagesSquare,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UserRoundCheck,
} from "lucide-react";

import { FeatureCard } from "@/components/feature-card";
import { PlaceholderVisual } from "@/components/placeholder-visual";
import { SectionWrapper } from "@/components/section-wrapper";
import { SiteFooter } from "@/components/site-footer";
import { StepCard } from "@/components/step-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { TrustBar } from "@/components/trust-bar";
import { WhatsAppCTA } from "@/components/whatsapp-cta";

const whatsappHref =
  "https://wa.me/2347072613455?text=Hi%2C%20I%20want%20to%20register%20my%20business";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F6F0] text-[#0F1E3D]">
      <SectionWrapper className="overflow-hidden bg-[#0F1E3D] py-6 text-white sm:py-8 lg:py-10">
        <div className="flex items-center justify-between">
          <a href="#hero" className="text-lg font-semibold tracking-tight text-white">
            Pearloria<span className="text-[#D4A017]">.</span>
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-white sm:flex"
          >
            Start your registration
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        </div>
      </SectionWrapper>

      <section id="hero" className="overflow-hidden bg-[#0F1E3D] text-white">
        <div className="mx-auto grid w-full max-w-7xl gap-14 px-6 pb-20 pt-12 sm:px-8 sm:pb-24 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-16 lg:px-12 lg:pb-28 lg:pt-20">
          <div className="max-w-2xl">
            <div className="mb-7 flex items-center gap-3 text-sm font-medium text-[#F3CD66]">
              <span className="flex size-8 items-center justify-center rounded-full border border-[#D4A017]/40 bg-[#D4A017]/10">
                <Sparkles aria-hidden="true" className="size-4" />
              </span>
              When businesses think legal &amp; compliant, they think Pearloria.
            </div>

            <h1 className="max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-balance sm:text-6xl lg:text-7xl">
              Make Your Business Official in 24 Hours.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Fast, fully CAC-compliant business registration handled from start to finish. No
              bureaucratic guesswork, no endless waiting, and absolutely zero hidden fees.
            </p>

            <div className="mt-9 flex flex-col items-start gap-4">
              <WhatsAppCTA href={whatsappHref} size="lg" />
              <p className="flex items-center gap-2 text-sm text-slate-300">
                <ShieldCheck aria-hidden="true" className="size-4 text-[#F3CD66]" />
                Trusted by Nigerian founders and NGOs doing it the right way.
              </p>
            </div>

            <div className="mt-12 grid max-w-2xl grid-cols-2 gap-3 border-t border-white/15 pt-6 text-sm text-slate-300 sm:grid-cols-4">
              <span className="flex items-center gap-2">
                <Check aria-hidden="true" className="size-4 text-[#F3CD66]" />
                100% CAC compliant
              </span>
              <span className="flex items-center gap-2">
                <Check aria-hidden="true" className="size-4 text-[#F3CD66]" />
                Trusted by Nigerian founders & NGOs
              </span>
              <span className="flex items-center gap-2">
                <Check aria-hidden="true" className="size-4 text-[#F3CD66]" />
                Zero hidden charges
              </span>
              <span className="flex items-center gap-2">
                <Check aria-hidden="true" className="size-4 text-[#F3CD66]" />
                End-to-end support
              </span>
            </div>
          </div>

          <PlaceholderVisual
            label="Temporary hero visual"
            caption="A real Pearloria registration image will be added here. This temporary stand-in is intentionally not a certificate or customer document."
            className="min-h-[21rem] lg:min-h-[31rem]"
          />
        </div>
      </section>

      <TrustBar
        items={[
          { label: "100% CAC Compliant", icon: ShieldCheck },
          { label: "Trusted by Nigerian Founders & NGOs", icon: Handshake },
          { label: "Zero Hidden Charges", icon: Check },
          { label: "End-to-End Support", icon: Headset },
        ]}
      />

      <SectionWrapper className="bg-[#F8F6F0]">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B48300]">
            Registration options
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#0F1E3D] sm:text-5xl">
            Choose the right structure for your vision.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            Whether you are launching a side hustle or building a scalable enterprise, we help
            you take the exact right step with complete clarity.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          <FeatureCard
            icon={Building2}
            title="Business Name (BN)"
            description="Establish Your Identity: Perfect for solo entrepreneurs. Give your brand a legal foundation to build credibility, open a corporate bank account, and earn customer trust."
          />
          <FeatureCard
            icon={Landmark}
            title="Limited Liability Company (LTD)"
            description="Scale with Confidence: Protect your personal assets and position your company for serious growth, partnerships, and investment."
          />
          <FeatureCard
            icon={TrendingUp}
            title="BN → LTD Upgrade"
            description="Level Up Your Business: Outgrown your current structure? We seamlessly transition your registered Business Name into a full Limited Liability Company."
          />
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-white">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B48300]">
              Why Pearloria
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#0F1E3D] sm:text-5xl">
              Registration done right, the first time.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Skip the bureaucratic maze, confusing forms, and endless waiting. We provide clear
            guidance and dependable support from your first consultation to your final certificate.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          <FeatureCard
            icon={UserRoundCheck}
            title="Expert Guidance"
            description="We analyze your specific goals and match you with the exact corporate structure you need before you spend a Naira."
          />
          <FeatureCard
            icon={FileCheck2}
            title="Full CAC Compliance"
            description="Move forward with confidence. We ensure flawless documentation and filing that meets every Corporate Affairs Commission standard."
          />
          <FeatureCard
            icon={ClipboardCheck}
            title="Transparent Pricing"
            description="What you see is what you pay. Receive a straightforward, upfront quote with absolutely no surprise charges added along the way."
          />
        </div>

        <div className="mt-12 flex justify-center">
          <WhatsAppCTA href={whatsappHref} size="lg" />
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-[#F8F6F0]">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B48300]">
            How it works
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#0F1E3D] sm:text-5xl">
            A clear path from idea to official registration.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          <StepCard
            number="01"
            icon={MessagesSquare}
            title="Consult & Strategize"
            description="Tell us your vision. We’ll advise you on the best corporate structure and clearly outline the exact requirements."
          />
          <StepCard
            number="02"
            icon={ShieldCheck}
            title="We Handle It"
            description="Share your details, sit back, and relax. Our experts manage the entire CAC filing and registration process on your behalf."
          />
          <StepCard
            number="03"
            icon={FileCheck2}
            title="Receive Your Certificate"
            description="Get your official registration documents delivered fast, giving you the legal clearance to operate and grow your business properly."
          />
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-[#0F1E3D]">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F3CD66]">
              Client experiences
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
              Trusted by founders who value their time.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-400">
            Approved customer quotes will replace these temporary content markers before launch.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <TestimonialCard
            author="Sarah O."
            detail="Customer testimonial placeholder"
            quote="Sarah O. testimonial quote will be placed here once the approved copy is provided."
            placeholder
          />
          <TestimonialCard
            author="Emeka A."
            detail="Customer testimonial placeholder"
            quote="Emeka A. testimonial quote will be placed here once the approved copy is provided."
            placeholder
          />
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-[#D4A017] py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F1E3D]/70">
            Ready when you are
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#0F1E3D] sm:text-5xl">
            Ready to make it official?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#0F1E3D]/75 sm:text-lg">
            Join the smart Nigerian business owners building their companies on a solid legal
            foundation. Start today with a free consultation and a transparent quote.
          </p>
          <div className="mt-8 flex justify-center">
            <WhatsAppCTA href={whatsappHref} size="lg" />
          </div>
        </div>
      </SectionWrapper>

      <SiteFooter
        brand="Pearloria"
        tagline="Legal, compliant, and stress-free business registration support for Nigerian entrepreneurs."
        whatsappHref={whatsappHref}
      />
    </main>
  );
}
