import "./styles.css";
import Greeter from "./Greeter";
import Shout from "./Shout";
import Profile from "./Profile";

function Another() {
  return <h2>What say you then from yet another function</h2>;
}
export default function App() {
  return (
    <div className="App">
      <Greeter />
      <Another />
      <Shout />
      <Profile />
    </div>
  );
}
