import "./styles.css";

// this is a component for the header
function Header(props) {
  return <h1>{props.name} Kitchen</h1>;
}

// creating the component for the main
function Main(props) {
  return <h2> we serve the {props.adjective} food</h2>;
}

// creating the footer
function Footer(props) {
  return <h3>Copy rightsdd {props.year}</h3>;
}
export default function App() {
  return (
    <div className="App">
      <Header name="Muhammed" />
      <Main adjective="best" />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}
