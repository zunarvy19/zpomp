type SectionIntroProps = {
  index: string;
  label: string;
  title: string;
  description?: string;
  inverse?: boolean;
};

export default function SectionIntro({
  index,
  label,
  title,
  description,
  inverse = false,
}: SectionIntroProps) {
  return (
    <div className="grid gap-6 border-t border-current/15 pt-6 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16">
      <div>
        <p
          className={`mb-5 text-xs font-bold uppercase tracking-[0.22em] ${
            inverse ? "text-brand-100" : "text-brand-600"
          }`}
        >
          {index} · {label}
        </p>
        <h2
          className={`max-w-3xl text-3xl font-extrabold leading-[1.12] tracking-[-0.035em] sm:text-4xl lg:text-5xl ${
            inverse ? "text-white" : "text-brand-950"
          }`}
        >
          {title}
        </h2>
      </div>

      {description ? (
        <p
          className={`max-w-xl self-end text-base leading-7 ${
            inverse ? "text-white/70" : "text-muted"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
