import { useState } from "react";
import "./index.css";
import Plants from "../src/components/Plants";
import PLANTS from "./data";
import Cart from "./components/cart";
export default function App() {
  const [cart, setCart] = useState([]);

  const addPlants = (plant) => {
    const plantsExists = cart.find((i) => i.id === plant.id);
    if (plantsExists) {
      setCart(
        cart.map((plant) =>
          item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      const item = { ...plant, quantity: 1 };
      setCart([...cart, item]);
    }
  };

  const removePlants = (plantToRemove) => {
    setCart(
      cart
        .map((item) =>
          item.id === plantToRemove.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <>
      <Plants plants={PLANTS} addPlants={addPlants} />
      <Cart plants={cart} addPlants={addPlants} removePlants={removePlants} />
    </>
  );
}
