import {
  BriefcaseBusiness,
  CalendarCheck2,
  Check,
  Circle,
  Clock3,
  Info,
  MailCheck,
} from "lucide-react";

const selectedProfessional = {
  name: "Dr. Sarah Mitchell",
  title: "Divorce Professional",
  status: "Request Sent",
  matchScore: "98%",
  image:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
};

const progressSteps = [
  {
    title: "AI Intake Complete",
    state: "complete" as const,
  },
  {
    title: "Profile Matched",
    state: "complete" as const,
  },
  {
    title: "Lead Sent to Sarah",
    description: "We've notified Dr. Sarah Mitchell about your case",
    state: "active" as const,
  },
  {
    title: "Expert Review & Contact",
    state: "upcoming" as const,
  },
];

const nextSteps = [
  {
    number: 1,
    icon: <MailCheck className="size-4 text-[#008dd5]" />,
    title: "Your Case Has Been Shared",
    description:
      "Your case details have been securely shared so they can review your situation and determine if they can help.",
  },
  {
    number: 2,
    icon: <Clock3 className="size-4 text-[#008dd5]" />,
    title: "Expect Contact Soon",
    description:
      "Dr. Sarah Mitchell will reach out to you within 24-48 hours via your preferred contact method. Keep an eye on your email and phone.",
  },
  {
    number: 3,
    icon: <CalendarCheck2 className="size-4 text-[#008dd5]" />,
    title: "If No Response",
    description:
      "If the professional is unable to take your case, you'll be able to return and choose another matched expert.",
  },
];

function ProgressMarker({ state }: { state: "complete" | "active" | "upcoming" }) {
  if (state === "complete") {
    return (
      <div className="flex size-6 items-center justify-center rounded-full bg-[#00bc7d] text-white">
        <Check className="size-4" />
      </div>
    );
  }

  if (state === "active") {
    return (
      <div className="relative flex size-6 items-center justify-center rounded-full bg-[#008dd5]">
        <div className="size-3 rounded-full bg-white" />
        <div className="absolute inset-[-3px] rounded-full border border-[#008dd5]/20" />
      </div>
    );
  }

  return (
    <div className="flex size-6 items-center justify-center rounded-full bg-[#e5e7eb]">
      <Circle className="size-3 fill-[#99a1af] text-[#99a1af]" />
    </div>
  );
}

export function SelectionConfirmationPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] px-4 py-8 text-[#101828] md:px-6 lg:px-8 lg:py-10">
      <main className="mx-auto max-w-[920px]">
        <div className="mb-14 flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-white shadow-sm">
            <BriefcaseBusiness className="size-5 text-[#101828]" />
          </div>
          <p className="font-['Libre_Baskerville',serif] text-lg font-bold tracking-[0.04em]">
            TARALI
          </p>
        </div>

        <section className="mb-12 text-center">
          <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-[#15c39a] text-white shadow-[0_20px_25px_0_rgba(0,0,0,0.1),0_8px_10px_0_rgba(0,0,0,0.08)]">
            <Check className="size-8" />
          </div>
          <p className="mt-4 text-xs font-medium uppercase tracking-[0.22em] text-[#009966]">
            Request Sent
          </p>
          <h1 className="mt-3 text-4xl font-light tracking-[-0.03em] text-[#101828] md:text-6xl">
            Your journey is in good hands.
          </h1>
        </section>

        <section className="overflow-hidden rounded-[24px] border border-[#e5e7eb] bg-white shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)]">
          <div className="border-b border-[#f3f4f6] px-6 py-8 md:px-10 md:py-10">
            <p className="text-xs uppercase tracking-[0.2em] text-[#4a5565]">
              Selected Professional
            </p>

            <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="relative">
                <img
                  src={selectedProfessional.image}
                  alt={selectedProfessional.name}
                  className="size-24 rounded-full border-4 border-[#f3f4f6] object-cover"
                />
                <div className="absolute bottom-0 right-0 rounded-full bg-[#00bc7d] px-3 py-1 text-xs font-bold text-white shadow-lg">
                  {selectedProfessional.matchScore}
                </div>
              </div>

              <div>
                <h2 className="text-[30px] font-medium leading-none text-[#101828]">
                  {selectedProfessional.name}
                </h2>
                <p className="mt-3 text-lg text-[#4a5565]">{selectedProfessional.title}</p>
                <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#a4f4cf] bg-[#ecfdf5] px-4 py-2 text-sm font-medium text-[#007a55]">
                  <span className="size-2 rounded-full bg-[#00bc7d]" />
                  {selectedProfessional.status}
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-[#f3f4f6] px-6 py-8 md:px-10 md:py-10">
            <p className="text-xs uppercase tracking-[0.2em] text-[#4a5565]">Your Progress</p>

            <div className="mt-8 space-y-8">
              {progressSteps.map((step) => (
                <div key={step.title} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <ProgressMarker state={step.state} />
                    {step !== progressSteps[progressSteps.length - 1] ? (
                      <div className="mt-1 h-full min-h-8 w-px bg-[#e5e7eb]" />
                    ) : null}
                  </div>
                  <div className="pb-1">
                    <p
                      className={[
                        "text-base font-medium",
                        step.state === "active"
                          ? "text-[#008dd5]"
                          : step.state === "upcoming"
                            ? "text-[#99a1af]"
                            : "text-[#101828]",
                      ].join(" ")}
                    >
                      {step.title}
                    </p>
                    {step.description ? (
                      <p className="mt-2 text-sm text-[#4a5565]">{step.description}</p>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#ebf6fc] px-6 py-6 md:px-10">
            <div className="flex items-start gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#008dd5] text-white">
                <Info className="size-5" />
              </div>
              <p className="text-sm leading-6 text-[#364153]">
                <span className="font-medium text-[#101828]">Your privacy matters.</span> You will
                receive an email as soon as Sarah accepts your lead. Your personal contact
                information remains private until then.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-7 overflow-hidden rounded-[24px] border border-[#e5e7eb] bg-white shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)]">
          <div className="bg-gradient-to-r from-[#f0fdf4] to-[#ecfdf5] px-6 py-5 md:px-10">
            <div className="flex items-center gap-3">
              <CalendarCheck2 className="size-5 text-[#00bc7d]" />
              <h2 className="text-[24px] font-medium text-[#101828]">What Happens Next</h2>
            </div>
          </div>

          <div className="space-y-8 px-6 py-8 md:px-10">
            {nextSteps.map((step) => (
              <div key={step.number} className="flex gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#008dd5] text-base font-bold text-white shadow-lg">
                  {step.number}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    {step.icon}
                    <h3 className="text-xl font-medium text-[#101828]">{step.title}</h3>
                  </div>
                  <p className="mt-2 max-w-[680px] text-base leading-7 text-[#364153]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-9 text-center">
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="rounded-full bg-[#008dd5] px-8 py-3 text-sm font-medium text-white shadow-[0_10px_15px_0_rgba(0,141,213,0.18),0_4px_6px_0_rgba(0,141,213,0.14)]">
              Return To Dashboard
            </button>
            <button className="rounded-full border border-[#4a5565] px-8 py-3 text-sm font-medium text-[#4a5565]">
              View Matches Again
            </button>
          </div>
          <p className="mt-4 text-sm text-[#6a7282]">
            While you wait, discover other professionals who can help with your transition
          </p>
        </section>
      </main>
    </div>
  );
}
