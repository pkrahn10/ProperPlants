export default function Plant({ plant, addPlants }) {
  return (
    <div>
      <b>{plant.name}</b>{" "}
      <button onClick={() => addPlants(plant)}>Add to Cart</button>
    </div>
  );
}
