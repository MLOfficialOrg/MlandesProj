export default function HomeDataCard({ Logo, header, text, func }) {
  return (
    <button
      className="data-card-container"
      onClick={() => {
        func();
      }}
    >
      <Logo className="data-card-img" />
      <p className="data-card-header">{header}</p>
      <p className="data-card-text">{text}</p>
    </button>
  );
}
