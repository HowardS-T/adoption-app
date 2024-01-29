import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Fanfan" animal="Dog" breed="Corgi" />
      <Pet name="Whiskers" animal="Cat" breed="Siamese" />
      <Pet name="Popeye" animal="Bird" breed="Parakeet" />
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
