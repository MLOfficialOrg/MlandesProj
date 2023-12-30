// Import Assets
import { Link } from "react-router-dom";

export default function ProductionsDataCard({
  classType,
  title,
  Logo,
  text,
  alignmentClass,
  link,
}) {
  return (
    <div className={classType}>
      <div className={alignmentClass}>
        <Logo className="production-logo" />
        <div className="text-container">
          <h1 className="header">{title}</h1>
          <p>{text}</p>
          <Link key={classType} to={`/services/${link}`}>
            <button className="production-button">See More</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
