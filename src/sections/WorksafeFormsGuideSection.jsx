import Accordion from '../components/Accordion';
import { formsGuideGeneralPitfalls, worksafeFormsGuideEntries } from '../data/content';
import BeforeYouDoAnythingSection from './BeforeYouDoAnythingSection';

const WorksafeFormsGuideSection = () => {
  const pitfallsAccordionItems = formsGuideGeneralPitfalls.map(item => ({
    id: item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    title: item.title,
    content: (
      <div className="space-y-2">
        <p>{item.description}</p>
        <p>
          <span className="font-semibold">Tip:</span> {item.tip}
        </p>
      </div>
    ),
  }));

  return (
    <div className="section-shell" id="worksafe-forms-guide">
      <BeforeYouDoAnythingSection />

      <div className="mb-8 text-center">
        <h1 className="section-title">
          Exhaustive Guide to WorkSafeBC Forms: Navigating a System Stacked Against Workers
        </h1>
        <p className="section-lead">
          This guide treats forms as tools that can easily lead to rejections if they are not handled
          properly.
        </p>
      </div>

      <div className="space-y-8">
        <div className="card space-y-4">
          <p className="text-gray-700">
            Claims are often denied for technical reasons like inconsistencies, delays, or lack of
            objective evidence. Statistics from advocacy and legal sources commonly report roughly
            15-25% of initial claims are rejected, with mental health claims facing higher scrutiny.
          </p>
          <p className="text-gray-700">
            The system relies on workers making mistakes, so arm yourself with knowledge from worker
            advocates, legal firms, and common complaints. Always consult free resources like the
            Workers&apos; Advisers Office (WAO) early—don&apos;t wait for a denial.
          </p>
        </div>

        <section className="card">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            General Pitfalls and Tips: The System&apos;s Built-in Traps
          </h2>
          <Accordion items={pitfallsAccordionItems} />
        </section>

        <section className="card">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Forms and Their Pitfalls</h2>
          <p className="text-gray-700 mb-4">
            Compiled from official WorkSafeBC resources, advocacy sites, and user complaints. Forms
            are PDFs unless noted; submit online where possible via portals.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 text-left font-semibold text-gray-900">Form Number/Title</th>
                  <th className="p-3 text-left font-semibold text-gray-900">Purpose</th>
                  <th className="p-3 text-left font-semibold text-gray-900">Traps to Watch For</th>
                  <th className="p-3 text-left font-semibold text-gray-900">Tips to Beat the System</th>
                </tr>
              </thead>
              <tbody>
                {worksafeFormsGuideEntries.map(form => (
                  <tr key={form.form} className="border-t align-top">
                    <td className="p-3 font-semibold text-gray-900">{form.form}</td>
                    <td className="p-3 text-gray-700">{form.purpose}</td>
                    <td className="p-3 text-gray-700">{form.traps}</td>
                    <td className="p-3 text-gray-700">{form.tips}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="bg-blue-50 rounded-xl border border-blue-200 p-6">
          <p className="text-blue-900">
            This covers all forms identified across sources. WorkSafeBC may update forms, so check
            their site regularly. If your claim is denied, remember many workers succeed on review or
            appeal by building a stronger evidence record and pushing deadlines aggressively.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorksafeFormsGuideSection;
