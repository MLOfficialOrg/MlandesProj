export default function FooterLink({ data }) {
  return (
    <div className="footer-link-group">
      <button className="footer-link">{data[0]}</button>
      <button className="footer-link">{data[1]}</button>
      <button className="footer-link">{data[2]}</button>
    </div>
  );
}
