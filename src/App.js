import "./styles.css";
import { Router } from "./router/Router";
import { UserProvider } from "./providers/Userprovider";
import { RecoilRoot } from "recoil";

export default function App() {
  return (
    <RecoilRoot>
      <UserProvider>
        <Router />
      </UserProvider>
    </RecoilRoot>
  );
}
