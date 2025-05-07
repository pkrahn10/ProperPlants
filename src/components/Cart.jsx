function Cart({ plants, addPlants, removePlants }) {
  console.log(plants);

  return (
    <>
      {plants.length === 0 ? (
        <p>No plants</p>
      ) : (
        <>
          {plants.map((plant) => {
            return (
              <div key={plant.id}>
                <button
                  onClick={() => {
                    removePlants(plant);
                  }}
                  style={{ color: "red" }}
                >
                  -
                </button>
                {""}
                <span>
                  {plant.name}: {plant.quantity}
                </span>{" "}
                <button
                  onClick={() => addPlants(plant)}
                  style={{ color: "darkgreen" }}
                >
                  +
                </button>
              </div>
            );
          })}
        </>
      )}
    </>
  );
}

export default Cart;
