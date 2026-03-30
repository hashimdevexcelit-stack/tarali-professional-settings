import {
  CircleCheckBig,
  FilePenLine,
  FileSpreadsheet,
  Link as LinkIcon,
  MapPin,
  Pencil,
  ShieldCheck,
  Trash2,
  Upload,
} from "lucide-react";

type ProfessionalData = {
  name: string;
  title: string;
  photo: string;
  location: string;
  linkedinUrl: string;
  cvFileName: string;
  bio: string;
  expertiseTags: string[];
  leadsThisMonth: number;
  acceptedThisMonth: number;
  passwordLastChanged: string;
};

const professionalData: ProfessionalData = {
  name: "Dr. Sarah Jenkins",
  title: "Certified Divorce Mediator",
  photo:
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
  location: "San Francisco, CA",
  linkedinUrl: "https://linkedin.com/in/sarahjenkins",
  cvFileName: "sarah_jenkins_cv_2026.pdf",
  bio: "With over 12 years of experience in family mediation and divorce counseling, I help clients navigate one of life's most challenging transitions with compassion and expertise. My approach combines legal knowledge with emotional intelligence to create personalized solutions that prioritize your well-being and future.",
  expertiseTags: ["High-Net-Worth Divorce", "Child Custody", "Forensic Accounting"],
  leadsThisMonth: 12,
  acceptedThisMonth: 8,
  passwordLastChanged: "February 10, 2026",
};

function Panel({
  title,
  action,
  children,
  tone = "blue",
}: {
  title: string;
  action?: React.ReactNode;
  children: React.ReactNode;
  tone?: "blue" | "green";
}) {
  const headerTone =
    tone === "green"
      ? "bg-[#ebf6fc] border-[#d0fae5]"
      : "bg-[#ebf6fc] border-[#dbeafe]";

  return (
    <section className="overflow-hidden rounded-[24px] border border-[#e5e7eb] bg-white shadow-[0_10px_15px_-3px_rgba(0,0,0,0.08),0_4px_6px_-4px_rgba(0,0,0,0.08)]">
      <div
        className={`flex items-center justify-between border-b px-6 py-4 md:px-8 ${headerTone}`}
      >
        <h2 className="text-xl font-medium text-[#101828]">{title}</h2>
        {action}
      </div>
      {children}
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#f9fafb] text-[#101828]">
      <main className="mx-auto max-w-[1040px] px-4 py-8 md:px-6 lg:px-8 lg:py-12">
        <header className="rounded-[24px] border border-[#e5e7eb] bg-white px-6 py-6 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.08),0_4px_6px_-4px_rgba(0,0,0,0.08)] md:px-8">
          <h1 className="text-[28px] font-bold leading-9 text-[#101828]">Profile Settings</h1>
          <p className="mt-2 text-base text-[#4a5565]">Edit your profile details here.</p>
        </header>

        <div className="mt-6 space-y-6">
            <section className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
              <div className="flex items-start gap-4">
                <div className="relative mt-1">
                  <img
                    src={professionalData.photo}
                    alt={professionalData.name}
                    className="size-20 rounded-full border-4 border-[#dbeafe] object-cover shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)]"
                  />
                  <div className="absolute bottom-0 right-0 flex size-8 items-center justify-center rounded-full bg-[#008dd5] text-white shadow-lg">
                    <CircleCheckBig className="size-4" />
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-bold leading-10 text-[#101828]">
                    {professionalData.name}
                  </h2>
                  <p className="text-xl leading-7 text-[#4a5565]">{professionalData.title}</p>
                  <div className="mt-2 flex items-center gap-2 text-base text-[#4a5565]">
                    <MapPin className="size-4" />
                    <span>{professionalData.location}</span>
                  </div>
                </div>
              </div>
            </section>

            <section className="relative overflow-hidden rounded-[24px] bg-gradient-to-r from-[#1396db] to-[#0b82c2] p-6 text-white shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] md:p-8">
              <div className="absolute -left-16 top-20 size-48 rounded-full bg-white/10" />
              <div className="absolute -right-20 -top-24 size-64 rounded-full bg-white/10" />

              <div className="relative flex flex-col gap-6 md:flex-row md:items-center">
                <div className="relative flex size-40 shrink-0 items-center justify-center self-start">
                  <svg className="absolute inset-0 size-full -rotate-90" viewBox="0 0 160 160">
                    <circle
                      cx="80"
                      cy="80"
                      r="56"
                      fill="none"
                      stroke="rgba(255,255,255,0.28)"
                      strokeWidth="8"
                    />
                    <circle
                      cx="80"
                      cy="80"
                      r="56"
                      fill="none"
                      stroke="white"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray="352"
                      strokeDashoffset="0"
                    />
                  </svg>
                  <span className="text-[32px] font-bold leading-[48px]">100%</span>
                </div>

                <div className="flex-1">
                  <h3 className="text-4xl font-bold leading-9">Profile Strength</h3>
                  <p className="mt-3 text-lg text-white/90">Perfect! Your profile is complete.</p>
                  <div className="mt-4 flex items-center gap-2 text-base text-white/90">
                    <CircleCheckBig className="size-4" />
                    <span>You&apos;re receiving maximum visibility to clients!</span>
                  </div>
                </div>
              </div>
            </section>

            <Panel
              title="Professional Bio"
              tone="green"
              action={
                <button className="flex items-center gap-2 rounded-full border border-[#d1d5dc] bg-white px-4 py-2 text-base text-[#364153]">
                  <Pencil className="size-4" />
                  Edit
                </button>
              }
            >
              <div className="px-6 py-6 md:px-8">
                <p className="text-base leading-[26px] text-[#364153]">{professionalData.bio}</p>
              </div>
            </Panel>

            <Panel title="LinkedIn Profile & CV">
              <div className="space-y-6 px-6 py-6 md:px-8">
                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm text-[#364153]">
                    <LinkIcon className="size-4" />
                    LinkedIn Profile URL
                  </label>
                  <div className="flex flex-col gap-3 md:flex-row">
                    <input
                      type="url"
                      defaultValue={professionalData.linkedinUrl}
                      className="h-[50px] flex-1 rounded-full border border-[#d1d5dc] px-4 text-base text-[#101828] outline-none ring-0"
                    />
                    <button className="h-[50px] rounded-full bg-[#008dd5] px-7 text-base text-white">
                      Save
                    </button>
                  </div>
                </div>

                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm text-[#364153]">
                    <FileSpreadsheet className="size-4" />
                    Curriculum Vitae (CV)
                  </label>
                  <div className="flex flex-col gap-4 rounded-[14px] border border-[#a4f4cf] bg-[#ecfdf5] px-4 py-4 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex size-12 items-center justify-center rounded-[14px] bg-[#d0fae5] text-[#00b97c]">
                        <FilePenLine className="size-6" />
                      </div>
                      <div>
                        <p className="text-base font-medium text-[#101828]">
                          {professionalData.cvFileName}
                        </p>
                        <p className="text-sm text-[#4a5565]">Uploaded • PDF</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 self-end md:self-auto">
                      <button className="rounded-[10px] p-2 text-[#00b97c] hover:bg-white/60">
                        <Upload className="size-5" />
                      </button>
                      <button className="rounded-[10px] p-2 text-[#e7000b] hover:bg-white/60">
                        <Trash2 className="size-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Panel>

            <Panel
              title="Expertise Tags"
              tone="green"
              action={
                <button className="flex items-center gap-2 rounded-full border border-[#d1d5dc] bg-white px-4 py-2 text-base text-[#364153]">
                  <Pencil className="size-4" />
                  Edit
                </button>
              }
            >
              <div className="space-y-4 px-6 py-6 md:px-8">
                <p className="text-sm text-[#4a5565]">
                  Add specific areas of expertise to help clients find you. These tags improve
                  your match score.
                </p>
                <div className="flex flex-wrap gap-3">
                  {professionalData.expertiseTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#008dd5] px-4 py-2 text-sm text-white shadow-[0_10px_15px_0_rgba(0,141,213,0.18),0_4px_6px_0_rgba(0,141,213,0.14)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Panel>

            <Panel title="Security">
              <div className="px-6 py-6 md:px-8">
                <div className="flex flex-col gap-4 rounded-2xl border border-[#e5e7eb] bg-[#f9fafb] px-5 py-5 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex size-12 items-center justify-center rounded-[14px] bg-[#ebf6fc] text-[#008dd5]">
                      <ShieldCheck className="size-6" />
                    </div>
                    <div>
                      <p className="text-lg font-medium text-[#101828]">Password Management</p>
                      <p className="text-sm text-[#4a5565]">
                        Last changed: {professionalData.passwordLastChanged}
                      </p>
                    </div>
                  </div>
                  <button className="rounded-full border border-[#d1d5dc] bg-white px-5 py-3 text-sm text-[#364153]">
                    Change Password
                  </button>
                </div>
              </div>
            </Panel>

            <section className="rounded-[24px] border border-[#e5e7eb] bg-white px-6 py-6 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.08),0_4px_6px_-4px_rgba(0,0,0,0.08)] md:px-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <p className="text-base font-bold text-[#101828]">Delete Account, Permanently</p>
                <button className="rounded-full border border-[#ff6b72] bg-[#fff5f5] px-5 py-3 text-sm text-[#e7000b]">
                  Permanently Delete Account
                </button>
              </div>
            </section>
        </div>
      </main>
    </div>
  );
}
