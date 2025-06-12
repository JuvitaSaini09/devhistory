// "use client";
// import Link from "next/link";
// import { useState } from "react";

// const currentCompany = {
//   id: "1",
//   name: "DevMagic Pvt Ltd",
//   joinedAt: "Jan 2024",
//   reminder: "Weekly",
//   summary: ["Added auth with Clerk", "Used Gemini for AI extraction"],
// };

// const pastCompanies = [
//   {
//     id: "2",
//     name: "Startup X",
//     joinedAt: "May 2022",
//     leftAt: "Nov 2022",
//   },
// ];

// export default function DashboardPage() {
//   const [tab, setTab] = useState("current");

//   return (
//     <section className="p-6 max-w-5xl mx-auto">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-6">
//         <h1 className="text-2xl font-semibold">Dashboard</h1>
//         <Link href="/company/new" className="btn">
//           + Add Company
//         </Link>
//       </div>

//       {/* Tabs */}
//       <div className="flex gap-4 border-b mb-6">
//         <button
//           onClick={() => setTab("current")}
//           className={`pb-2 ${tab === "current" ? "border-b-2 border-primary font-medium" : "text-muted-foreground"}`}
//         >
//           Current Company
//         </button>
//         <button
//           onClick={() => setTab("past")}
//           className={`pb-2 ${tab === "past" ? "border-b-2 border-primary font-medium" : "text-muted-foreground"}`}
//         >
//           Past Companies
//         </button>
//       </div>

//       {/* Current */}
//       {tab === "current" && (
//         <div className="space-y-3">
//           <h2 className="text-xl font-bold">{currentCompany.name}</h2>
//           <p className="text-sm text-muted-foreground">
//             Joined: {currentCompany.joinedAt}
//           </p>
//           <p className="text-sm text-muted-foreground">
//             Reminder: {currentCompany.reminder}
//           </p>
//           <ul className="text-sm list-disc ml-5">
//             {currentCompany.summary.map((s, i) => (
//               <li key={i}>{s}</li>
//             ))}
//           </ul>
//           <div className="flex gap-2 pt-2">
//             <Link href="/entry/new" className="btn btn-sm">
//               + Add Entry
//             </Link>
//             <Link href={`/company/${currentCompany.id}`} className="btn btn-sm">
//               View Logs
//             </Link>
//           </div>
//         </div>
//       )}

//       {/* Past */}
//       {tab === "past" && (
//         <div className="space-y-4">
//           {pastCompanies.map((company) => (
//             <div
//               key={company.id}
//               className="bg-muted p-4 rounded-md flex justify-between items-center"
//             >
//               <div>
//                 <h3 className="font-medium">{company.name}</h3>
//                 <p className="text-sm text-muted-foreground">
//                   Worked: {company.joinedAt} – {company.leftAt}
//                 </p>
//               </div>
//               <Link href={`/company/${company.id}`} className="btn btn-sm">
//                 View Logs
//               </Link>
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// }

import Link from "next/link";

const companies = [
  {
    id: "1",
    name: "DevMagic Pvt Ltd",
    joinedAt: "Jan 2024",
    isCurrent: true,
    summary: ["Wrote blog engine", "Setup Gemini extraction"],
  },
  {
    id: "2",
    name: "Startup X",
    joinedAt: "May 2022",
    leftAt: "Nov 2022",
    isCurrent: false,
  },
];

export default function TimelinePage() {
  return (
    <section className="p-6 max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold">Your Work Timeline</h1>
        <Link href="/company/new" className="btn">
          + Add Company
        </Link>
      </div>

      <div className="border-l-2 border-primary pl-6 space-y-8">
        {companies.map((c) => (
          <div key={c.id}>
            <span className="text-xs uppercase text-primary">
              {c.isCurrent ? "Current" : "Past"}
            </span>
            <h2 className="text-lg font-bold">{c.name}</h2>
            <p className="text-sm text-muted-foreground">
              {c.isCurrent
                ? `Since ${c.joinedAt}`
                : `Worked: ${c.joinedAt} – ${c.leftAt}`}
            </p>
            {c.summary && (
              <ul className="list-disc text-sm ml-5 text-muted-foreground mt-1">
                {c.summary.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}
            <div className="mt-2 flex gap-2">
              {c.isCurrent && (
                <Link href="/entry/new" className="btn btn-sm">
                  + Entry
                </Link>
              )}
              <Link href={`/company/${c.id}`} className="btn btn-sm">
                View Logs
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
