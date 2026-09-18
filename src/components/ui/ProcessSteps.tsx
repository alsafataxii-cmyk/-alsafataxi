type Step = {
  title: string;
  description: string;
};

type ProcessStepsProps = {
  steps: Step[];
};

export default function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <ol className="grid grid-cols-1 gap-8 sm:grid-cols-3">
      {steps.map((step, index) => (
        <li key={step.title} className="flex flex-col gap-3">
          <span className="text-4xl font-bold text-brand-gold">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="text-lg font-semibold text-brand-dark">{step.title}</h3>
          <p className="text-sm leading-relaxed text-brand-dark/70">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
