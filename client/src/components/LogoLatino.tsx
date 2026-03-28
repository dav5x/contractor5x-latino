/**
 * LogoLatino — Renders the "CONTRACTOR 5X" wordmark with a bold orange "LATINO" badge.
 * Used in Navbar and Footer so the branding is consistent across the site.
 */

interface LogoLatinoProps {
  /** Tailwind height class for the overall logo block, e.g. "h-9" or "h-10" */
  heightClass?: string;
}

export default function LogoLatino({ heightClass = "h-9" }: LogoLatinoProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 ${heightClass}`}
      aria-label="Contractor 5X Latino"
    >
      {/* Wordmark: CONTRACTOR 5X */}
      <span
        className="text-white leading-none tracking-tight"
        style={{
          fontFamily: "'Barlow Condensed', 'Impact', sans-serif",
          fontWeight: 900,
          fontSize: "1.35em",
          letterSpacing: "-0.01em",
          lineHeight: 1,
        }}
      >
        CONTRACTOR{" "}
        <span style={{ color: "#F97316" }}>5X</span>
      </span>

      {/* LATINO badge */}
      <span
        className="inline-flex items-center justify-center px-2 py-0.5 rounded-sm"
        style={{
          background: "#F97316",
          fontFamily: "'Barlow Condensed', 'Impact', sans-serif",
          fontWeight: 900,
          fontSize: "0.75em",
          letterSpacing: "0.08em",
          color: "#000",
          lineHeight: 1,
          textTransform: "uppercase",
          whiteSpace: "nowrap",
          boxShadow: "0 0 0 2px rgba(249,115,22,0.35)",
        }}
      >
        LATINO
      </span>
    </span>
  );
}
