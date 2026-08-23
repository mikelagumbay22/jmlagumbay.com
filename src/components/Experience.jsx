const timeline = [
  {
    company: "Tesla",
    badge: "Fremont, CA",
    role: "Supervisor, Process Engineering (Aug 2020 – Jun 2023)",
    bullets: [
      "Directed cross-functional teams to resolve manufacturing defects, improving powertrain yields by 12%.",
      "Coached and performance-managed up to 24 process technicians across safety, quality, and KPI targets.",
      "Designed automated dashboards (Excel, SharePoint, PowerApps) delivering real-time visibility to 50+ stakeholders.",
    ],
  },
  {
    company: "DigitalStorm",
    badge: "Gilroy, CA",
    role: "Quality Analyst (Mar 2020 – Aug 2020)",
    bullets: [
      "Performed end-to-end QC on 20+ custom PC builds daily — BIOS configuration, OS installs, and driver testing.",
      "Verified BIOS settings and hardware driver configurations for 30+ builds daily with zero specification deviations.",
      "Achieved 98% quality standards and 95% customer satisfaction on every build.",
    ],
  },
  {
    company: "SYKES Asia",
    badge: "Makati, Philippines",
    role: "Process Engineer (Jun 2004 – Jul 2019, 15 years)",
    bullets: [
      "Applied Six Sigma DMAIC methodology and root cause analysis to drive quality improvements across APAC operations.",
      "Led SOX/ISO audit readiness through 40+ process audits aligned with company standards of excellence.",
      "Built Power BI, PowerApps, Excel, and SharePoint dashboards that cut stakeholder decision-making time by 30%.",
    ],
  },
];

function Experience() {
  return (
    <section
      className="py-section-padding px-gutter bg-graphite-grey border-y border-border-subtle"
      id="experience"
    >
      <div className="max-w-container-max mx-auto">
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-16 text-center">
          Career Journey
        </h2>

        <div className="relative max-w-4xl mx-auto pl-8 md:pl-0">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border-subtle -translate-x-1/2" />

          {timeline.map((item, index) => {
            const isReversed = index % 2 === 1;
            const isLast = index === timeline.length - 1;

            return (
              <div
                key={item.company}
                className={`relative ${isLast ? "" : "mb-20"} md:flex md:justify-between md:items-center group ${
                  isReversed ? "md:flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-onyx-black border-2 -translate-x-1/2 z-10 transition-shadow group-hover:shadow-[0_0_15px_rgba(204,255,0,0.5)] ${
                    index === 0
                      ? "border-electric-lime"
                      : "border-surface-variant group-hover:border-electric-lime"
                  }`}
                />

                <div
                  className={`md:w-[45%] pl-12 md:pl-0 mb-4 md:mb-0 ${
                    isReversed ? "md:pr-12" : "md:text-right md:pr-12"
                  }`}
                >
                  <h3 className="font-headline-md text-headline-md text-primary group-hover:text-electric-lime transition-colors">
                    {item.company}
                  </h3>
                  <div
                    className={`inline-block mt-2 px-3 py-1 font-label-caps text-label-caps rounded-full ${
                      index === 0
                        ? "bg-electric-lime/10 text-electric-lime border border-electric-lime/20"
                        : "bg-surface-variant text-on-surface"
                    }`}
                  >
                    {item.badge}
                  </div>
                  <p className="mt-2 text-on-surface-variant font-body-md text-body-md">
                    {item.role}
                  </p>
                </div>

                <div
                  className={`md:w-[45%] pl-12 ${
                    isReversed ? "md:pl-0 md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="bg-onyx-black/50 backdrop-blur-md border border-border-subtle p-6 rounded-xl hover:border-electric-lime/40 transition-colors">
                    <ul className="list-disc list-outside ml-4 space-y-2 text-on-surface-variant font-body-md text-body-md">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
