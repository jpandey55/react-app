import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  }
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
      <button className="btn">Order Now</button>
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <p>Below are our pizzas</p>
      {pizzaData.length > 0 ? <PizzaList pizzas={pizzaData}/> : (<p> We are working on our Menu</p>)  }
    </div>
  );
}

function PizzaList({pizzas}) {
  console.log("Inside PizzaList")
  // const pizzas = props.pizzaData;
  const pizza = pizzas.map((p) => (
    <Pizza
      key={p.name}
      name={p.name}
      price={p.price}
      ingredients={p.ingredients}
      photoName={p.photoName}
      soldOut={p.soldOut}
    />
  ));
  return <div className="pizzas">{pizza}</div>;
}

function Pizza(props) {
  console.log(props.pizzaData);
  return (
    <div className= {`pizza ${props.soldOut ? "sold-out" : ""}`}>
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3 className="h3">{props.name}</h3>
        <p>{props.ingredients}</p>
        {props.soldOut ? (<span> SOLD OUT</span>) : (<span>{props.price}</span>) }
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour < closeHour;

  return (
    <footer className="footer">
      <div className="order">
        <p>
          {new Date().toLocaleTimeString()} |{" "}
          {isOpen && <h> We're open until {closeHour}:00 </h>}{" "}
          {!isOpen && <h> We're closed, we will open at {openHour}:00 </h>}
        </p>
      </div>
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);
