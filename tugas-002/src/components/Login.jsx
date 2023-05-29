import KotakTeks from "./KotakTeks";
import Tombol from "./Tombol";

export default function Login() {
  return (
    <>
      <KotakTeks nama="email" />
      <KotakTeks nama="password" />
      <Tombol>Login</Tombol>
    </>
  );
}
