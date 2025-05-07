import Plant from "./Plant";

function Plants({ plants, addPlants }) {
  return (
    <>
      <h2>Plants</h2>
      <>
        {plants.map((plant) => (
          <Plant key={plant.id} plant={plant} addPlants={addPlants} />
        ))}
      </>
    </>
  );
}

export default Plants;
