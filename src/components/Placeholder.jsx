/** A visible, clearly marked placeholder that John still has to fill in (e.g. [RATE]). */
export default function Placeholder({ name }) {
  return (
    <mark className="placeholder-mark" title={`Placeholder: ${name} still to be confirmed`} data-placeholder={name}>
      [{name}]
    </mark>
  );
}
