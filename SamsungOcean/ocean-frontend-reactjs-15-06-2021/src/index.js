import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function CardItem(props) {
  return (
    <div className="card_item">
      <h2>{props.nome}</h2>
      <img src={props.imagem} alt={props.nome} width="300" height="auto" />
    </div>
  );
}

function ListItems() {
  return (
    <div className="lista_itens">
      <CardItem nome="Gumball" imagem="src\imagens\gumball.jpg" />
      <CardItem nome="Darwin" imagem="src\imagens\darwin.png" />
      <CardItem nome="Ricardo" imagem="src\imagens\ricardo.png" />
    </div>
  );
}

function App() {
  return <ListItems />;
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
