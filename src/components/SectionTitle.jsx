import Reveal from "./Reveal";

export default function SectionTitle({ title, description, id, align = "left" }) {
  const centered = align === "center";

  return (
    <Reveal
      className={
        centered
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl lg:flex lg:max-w-none lg:items-end lg:justify-between lg:gap-16"
      }
    >
      <h2
        id={id}
        className="shrink-0 text-3xl leading-tight font-bold tracking-[-0.01em] text-white sm:text-4xl lg:max-w-xl lg:text-[2.6rem]"
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base leading-relaxed text-slate-400 sm:text-lg ${
            centered ? "" : "lg:mt-0 lg:max-w-md"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
