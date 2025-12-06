const HowToUse = () => (
  <div className="section-shell" id="how-to-use">
    <div className="mb-8 text-center">
      <h1 className="section-title">How To Use This Toolkit</h1>
      <p className="section-lead">So You Don't Drown in It</p>
    </div>
    <div className="space-y-8">
      <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
        <p className="text-gray-700">
          This site is a lot. That's on purpose: WorkSafeBC runs on complexity. The only way to fight that is with simple tools
          that understand the complexity behind them.
        </p>
      </div>
      <div className="space-y-6">
        <div className="card border-l-4 border-green-500">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Step 1 – Find Yourself On the Map</h3>
          <p className="text-gray-700 mb-4">Start with: Start Here: Where Are You Getting Screwed? Pick the box that matches you:</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Just injured/ new claim</li>
            <li>Just got a decision/ cut-off</li>
            <li>Being ignored or gaslit</li>
            <li>Already in Review/ WCAT/ appeal-land</li>
          </ul>
          <p className="text-gray-700 mt-2">That page will point you to 2–3 tools, not the whole arsenal.</p>
        </div>
        <div className="card border-l-4 border-green-500">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Step 2 – Don't Try to Learn Everything</h3>
          <p className="text-gray-700">You do not need:</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
            <li>Understand the entire Workers Compensation Act</li>
            <li>Memorize case law</li>
            <li>Become a paralegal overnight</li>
          </ul>
          <p className="text-gray-700">You only need:</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>The parts that apply to your situation</li>
            <li>The templates and phrases that fit your facts</li>
            <li>The next few moves, not the whole chess game</li>
          </ul>
          <p className="text-gray-700 mt-2 italic">Think of this toolkit as a menu, not homework.</p>
        </div>
        <div className="card border-l-4 border-green-500">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Step 3 – Move in This Order (Most of the Time)</h3>
          <ol className="list-decimal pl-5 space-y-2 text-gray-700">
            <li>
              <strong>Evidence & Documentation Center</strong>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>Get your documents, timeline, and call logs under basic control.</li>
                <li>It doesn't need to be perfect. It just needs to exist.</li>
              </ul>
            </li>
            <li>
              <strong>Strategy & Pressure Points</strong>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>Read through the pressure points and say: "That one. That's what they did to me."</li>
                <li>Note 2–4 that really match your experience.</li>
              </ul>
            </li>
            <li>
              <strong>Email & Letter Templates</strong>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>Plug your situation and your pressure points into emails to WorkSafeBC, MLA/Minister/employer</li>
                <li>Edit in your own voice, but keep the structure.</li>
              </ul>
            </li>
            <li>
              <strong>WCAT Precedent Armory</strong> (when you have the bandwidth)
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>Read 1–2 cases that feel close to your situation.</li>
                <li>Steal the structure: how they framed facts, applied policy, and why they won.</li>
              </ul>
            </li>
          </ol>
        </div>
        <div className="card border-l-4 border-green-500">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Step 4 – Use Small Chunks of Time</h3>
          <p className="text-gray-700 mb-3">
            You don't have to sit down for three hours and "do your case". You can:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-4">
            <li>Spend 10 minutes turning a phone call into a log entry</li>
            <li>Spend 15 minutes plugging your story into an email template</li>
            <li>Spend 20 minutes reading one WCAT case that feels close to home</li>
          </ul>
          <p className="text-gray-700">
            Every small chunk you do here makes the next step easier and builds a record future-you will thank you for.
          </p>
        </div>
        <div className="card border-l-4 border-green-500">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Step 5 – Remember What This Site Is (and Isn't)</h3>
          <p className="text-gray-700"><strong>This toolkit is:</strong></p>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-4">
            <li>A way to turn your experience into evidence and strategy</li>
            <li>A way to speak the language institutions listen to</li>
            <li>A place to see patterns you are not imagining</li>
          </ul>
          <p className="text-gray-700"><strong>This toolkit is not:</strong></p>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-4">
            <li>Your doctor</li>
            <li>Your lawyer</li>
            <li>A crisis line</li>
          </ul>
          <p className="text-gray-700 italic">You can use it alongside all of those. It's the framework underneath everything else.</p>
          <p className="text-gray-700 font-medium mt-2">Use what's useful. Ignore what isn't. Come back when the next letter drops.</p>
        </div>
      </div>
    </div>
  </div>
);

export default HowToUse;
