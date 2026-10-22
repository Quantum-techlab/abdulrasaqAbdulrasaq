// gsap.com-style button label: on hover the letters roll up, one after another,
// and an identical copy rolls in from below.
export const RollText = ({ children }: { children: string }) => {
  const chars = Array.from(children);
  const layer = (className: string) => (
    <span className={className} aria-hidden>
      {chars.map((c, i) => (
        <span key={i} className="roll__char" style={{ transitionDelay: `${i * 18}ms` }}>
          {c === ' ' ? ' ' : c}
        </span>
      ))}
    </span>
  );

  return (
    <span className="roll">
      <span className="sr-only">{children}</span>
      {layer('roll__a')}
      {layer('roll__b')}
    </span>
  );
};
