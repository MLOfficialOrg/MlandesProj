// Import Assets
import { ReactComponent as Logo } from "../../assets/Logos/logo-black-no-bg.svg";

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-form-container">
        <Logo />
        <input type="email" />
        <input type="password" />
      </div>
    </div>
  );
}
