import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function CardItem() {
  return <div>Item</div>
};

function ListItems() {
  return <div>
    <CardItem />
    <CardItem />
  </div>;
};

function App() {
  return <ListItems/>;
}

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);


