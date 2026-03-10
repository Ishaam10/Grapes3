// src/app/pages/MembersPage.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

/**
 * Data model (TypeScript)
 */
export interface MemberRow {
  name: string;
  role: string;
}

export interface MemberGroup {
  id: string; // stable ID used as Radix/Shadcn "value"
  label: string;
  members: MemberRow[];
}

/**
 * Current Members
 * (Includes Academic + Scientific + Technical + Administrative + Students/Fellows)
 */
const currentMemberGroups: MemberGroup[] = [
  {
    id: "academic",
    label: "Academic",
    members: [
      { name: "Pravata Kumar Mohanty", role: "Faculty" },
      { name: "Mohamed Rameez", role: "Faculty" },
    ],
  },
  {
    id: "scientific",
    label: "Scientific",
    members: [
      { name: "A. Anandraj", role: "Scientific Officer" },
      { name: "B. Hari Haran", role: "Scientific Officer" },
      { name: "P. Jagadeesan", role: "Scientific Officer" },
      { name: "Atul Jain", role: "Scientific Officer" },
      { name: "K. Manjunath", role: "Scientific Officer" },
      { name: "S. Murugapandian", role: "Scientific Officer" },
      { name: "Pranaba Kumar Nayak", role: "Scientific Officer" },
      { name: "B. Rajesh", role: "Scientific Officer" },
      { name: "K. Ramesh", role: "Scientific Officer" },
      { name: "M. Siddiq Shareef", role: "Scientific Assistant" },
      { name: "R. Suresh Kumar", role: "Scientific Officer" },
    ],
  },
  {
    id: "technical",
    label: "Technical",
    members: [
      { name: "Rupesh Gurav", role: "Laboratory Assistant" },
      { name: "S. Kingston", role: "Laboratory Assistant" },
      { name: "Himanshu Maurya", role: "Work Assistant" },
      { name: "S. Pandurangan", role: "Laboratory Assistant" },
      { name: "R. Ravi", role: "Work Assistant" },
      { name: "V. Santhosh Kumar", role: "Laboratory Assistant" },
      { name: "C. Shobana", role: "Laboratory Assistant" },
    ],
  },
  {
    id: "administrative",
    label: "Administrative",
    members: [
      { name: "C.S. Rajh Kumar", role: "Administrative Assistant" },
      { name: "S. Sathyaraj", role: "Clerk" },
    ],
  },
  {
    id: "students",
    label: "Students and Fellows",
    members: [
      { name: "Surojit Paul", role: "Research Scholar" },
      { name: "Mohan Karthik", role: "Research Scholar" },
    ],
  },
];

/**
 * Ex-Members
 * (Now includes Scientific + Technical + Auxillary/Admin from your new screenshots)
 */
const exMemberGroups: MemberGroup[] = [
  {
    id: "academic",
    label: "Academic",
    members: [
      { name: "Suresh Chandra Tonwar", role: "Sr. Professor" },
      { name: "Sunil Kumar Gupta", role: "Sr. Professor" },
      { name: "Shashikant Raichand Dugad", role: "Professor" },
    ],
  },
  {
    id: "scientific",
    label: "Scientific",
    members: [
      { name: "Lakkireddy Venkatesam Reddy", role: "Scientific Officer" },
      { name: "Pankaj Sripath Rakshe", role: "Scientific Officer" },
      { name: "Samuel Morris", role: "Scientific Officer" },
      { name: "Bellam Srinivasa Rao", role: "Scientific Officer" },
      { name: "Ajai Iyer", role: "Scientific Officer" },
      { name: "K.C. Ravindran", role: "Scientific Officer" },
      { name: "K. Viswanathan", role: "Scientific Officer" },
      { name: "S. Karthikeyan", role: "Scientific Officer" },
    ],
  },
  {
    id: "technical",
    label: "Technical",
    members: [
      { name: "V. Jeyakumar", role: "Technical Assistant" },
      { name: "D.B. Arjunan", role: "Technical Officer" },
      { name: "K. Ramadass", role: "Laboratory Assistant" },
      { name: "C. Ravindran", role: "Technical Officer" },
      { name: "G.Paul Francis", role: "Technical Assistant" },
    ],
  },
  {
    id: "aux-admin",
    // Matches your screenshot label (typo preserved). Change to "Auxiliary / Administrative" if you prefer.
    label: "Auxillary / Administrative",
    members: [
      { name: "A.S. Bosco", role: "Work Assistant" },
      { name: "Naresh Kumar Lokre", role: "Administrative Assistant" },
      { name: "I.Mohammed Haroon", role: "Work Assistant" },
      { name: "S.S. Mary", role: "Work Assistant" },
      { name: "V. Viswanathan", role: "Administrative Officer" },
      { name: "V. Ravikumar", role: "Work Assistant" },
    ],
  },
  {
  id: "students",
  label: "Students and Fellows",
  members: [
    { name: "Fahim Varsi", role: "Visiting Fellow" },
    { name: "Medha Chakraborty", role: "Research Scholar" },
    { name: "Meeran Zuberi", role: "Visiting Fellow" },
    { name: "Diptiranjan Pattanaik", role: "Senior Research Fellow" },
    { name: "Jhansi Bhavani Vuta", role: "Research Scholar" },
    { name: "K.P. Arunbabu", role: "Visiting Fellow" },
    { name: "Suraj Kole", role: "Junior Research Fellow" },
    { name: "Mridusmita Buragohain", role: "Junior Research Fellow" },
    { name: "Tanuj Gupta", role: "Junior Research Fellow" },
    { name: "John Serin Varghese", role: "Junior Research Fellow" },
    { name: "Akshay Anil Manjare", role: "Junior Research Fellow" },
    { name: "Manu Shanmugam", role: "Visiting Fellow" },
    { name: "Subham Negi", role: "Junior Research Fellow" },
    { name: "Hrushikesh Mahapatra", role: "Junior Research Fellow" },
    { name: "Saswat Mishra", role: "Junior Research Fellow" },
    { name: "Anuj Chandra", role: "Junior Research Fellow" },
    { name: "B. Hari Haran", role: "Junior Research Fellow" },
    { name: "Dimitra Atri", role: "Visiting Fellow" },
    { name: "Akitoshi Oshima", role: "Visiting Fellow" },
    { name: "Umananda Dev Goswami", role: "Visiting Fellow" },
    { name: "Hideki Tanaka", role: "Visiting Fellow" },
    { name: "Pranaba K. Nayak", role: "Visiting Fellow" },
  ],
},
];

/**
 * Accessible table markup:
 * - thead/tbody for structure
 * - th scope="col" for column headers
 */
function MembersTable({ rows }: { rows: MemberRow[] }) {
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="w-full border border-slate-500">
        <thead>
          <tr className="bg-slate-100">
            <th
              scope="col"
              className="border border-slate-500 p-2 text-left font-semibold"
            >
              Name
            </th>
            <th
              scope="col"
              className="border border-slate-500 p-2 text-left font-semibold"
            >
              Role
            </th>
          </tr>
        </thead>

        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td
                colSpan={2}
                className="border border-slate-500 p-3 text-center text-sm text-slate-500"
              >
                No entries available.
              </td>
            </tr>
          ) : (
            rows.map((m) => (
              <tr key={`${m.name}-${m.role}`}>
                <td className="border border-slate-500 p-2">{m.name}</td>
                <td className="border border-slate-500 p-2">{m.role}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

/**
 * Accordion wrapper styled to match your screenshots:
 * - rounded container
 * - borders between items
 * - blue header when open
 *
 * Radix Accordion exposes data-state="open|closed" on Trigger/Item/Header. citeturn2view0
 */
function MembersAccordion({
  groups,
  defaultValue = "academic",
}: {
  groups: MemberGroup[];
  defaultValue?: string;
}) {
  return (
    <div className="mt-6 overflow-hidden rounded-lg border border-slate-200 bg-white">
      <Accordion
        type="single"
        collapsible
        defaultValue={defaultValue}
        className="w-full"
      >
        {groups.map((group) => (
          <AccordionItem
            key={group.id}
            value={group.id}
            className="border-b border-slate-200 last:border-b-0"
          >
            <AccordionTrigger
              className={[
                "px-5 py-4 text-left font-medium",
                "hover:no-underline",
                "data-[state=open]:bg-blue-100",
              ].join(" ")}
            >
              {group.label}
            </AccordionTrigger>

            <AccordionContent className="px-5 pb-6">
              <MembersTable rows={group.members} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default function MembersPage() {
  return (
    <main className="bg-slate-50">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <h1 className="text-center text-5xl font-semibold text-blue-700">
          Members
        </h1>

        <section className="mt-10">
          <h2 className="text-center text-3xl font-medium text-blue-700">
            Current Members
          </h2>
          <MembersAccordion groups={currentMemberGroups} defaultValue="academic" />
        </section>

        <section className="mt-12 border-t border-slate-200 pt-10">
          <h2 className="text-center text-3xl font-medium text-blue-700">
            Ex-Members
          </h2>
          <MembersAccordion groups={exMemberGroups} defaultValue="academic" />
        </section>
      </div>
    </main>
  );
}
