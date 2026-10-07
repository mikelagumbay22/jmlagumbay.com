export default function PageHeader({ eyebrow, title, children }) {
  return (
    <header className="relative overflow-hidden border-b border-border-subtle">
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(204,255,0,0.12),transparent)]" />
      <div className="wrap relative pb-14 pt-16 sm:pb-20 sm:pt-24">
        {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
        <h1 tabIndex={-1} className="h-display max-w-4xl">{title}</h1>
        {children && <div className="lead mt-6 max-w-2xl">{children}</div>}
      </div>
    </header>
  );
}
