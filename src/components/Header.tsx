import logo from "../assets/logo.svg";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="Pixell River Financial" />
      <h1>Pixell River Employee Directory</h1>
      <p>Welcome! Browse our talented team across all departments.</p>
    </header>
  );
}