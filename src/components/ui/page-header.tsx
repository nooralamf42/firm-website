import React from 'react';

export function PageHeader({
  title,
  description,
  tag,
  className = "",
}: {
  title: string;
  description?: string;
  tag?: string;
  className?: string;
}) {
  return (
    <section className={`relative bg-slate-950 py-16 md:py-24 overflow-hidden ${className}`}>
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Blue left-edge accent line */}
      <div className="absolute left-0 top-0 h-full w-1 bg-blue-600" />

      <div className="container relative mx-auto px-4 lg:px-8">
        {tag && (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400 mb-4">
            {tag}
          </p>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.05]">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
