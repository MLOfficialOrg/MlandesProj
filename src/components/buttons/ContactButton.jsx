export default function ContactButton({ setOpen }) {
  return (
    <button
      className="contact-button"
      onClick={() => {
        setOpen(true);
      }}
    >
      Contact
    </button>
  );
}
