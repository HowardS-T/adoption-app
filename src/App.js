const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { name: "Fanfan", animal: "Dog", breed: "Corgi" }),
    React.createElement(Pet, {
      name: "Felix",
      animal: "Cat",
      breed: "Siamese",
    }),
    React.createElement(Pet, {
      name: "Garfield",
      animal: "Cat",
      breed: "British Shorthair",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
