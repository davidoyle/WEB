export default function HowToUsePage() {
  const steps = [
    'Start with “Start Here” and pick the situation that matches your claim reality.',
    'Build your evidence file first: letters, medical reports, messages, and call log.',
    'Use Pressure Points and Templates to send short written requests that create a record.',
    'Use WCAT Armory to pull supporting decisions when building review or appeal submissions.',
  ];

  return (
    <section className="space-y-10">
      <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
        How To Use This Toolkit
      </h1>
      <ol className="mx-auto max-w-prose list-decimal space-y-4 pl-6 text-left text-lg leading-relaxed text-gray-700">
        {steps.map(step => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </section>
  );
}
