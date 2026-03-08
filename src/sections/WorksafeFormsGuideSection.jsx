import BeforeYouDoAnythingSection from './BeforeYouDoAnythingSection';
import { formsGuideGeneralPitfalls, worksafeFormsGuideEntries } from '../data/content';

const WorksafeFormsGuideSection = () => (
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
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          General Pitfalls and Tips: The System&apos;s Built-in Traps
        </h2>
        <ul className="space-y-4">
          {formsGuideGeneralPitfalls.map(item => (
            <li key={item.title} className="border-l-4 border-red-200 pl-4">
              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="text-gray-700 mt-1">{item.description}</p>
              <p className="text-gray-700 mt-2">
                <span className="font-semibold">Tip:</span> {item.tip}
              </p>
            </li>
          ))}
        </ul>
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

export default WorksafeFormsGuideSection;
