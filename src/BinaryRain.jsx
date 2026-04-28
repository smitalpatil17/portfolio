/* Single-line scrolling binary ticker — displayed near the profile photo */
const SEQ = Array.from({ length: 160 }, () => Math.round(Math.random())).join("");
const CONTENT = `${SEQ}   ${SEQ}   ${SEQ}   `;

export default function BinaryTicker() {
  return (
    <div className="binary-ticker-wrap">
      <div className="binary-ticker-track">
        <span>{CONTENT}</span>
        <span aria-hidden="true">{CONTENT}</span>
      </div>
    </div>
  );
}
