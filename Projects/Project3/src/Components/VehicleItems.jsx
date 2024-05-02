import Item from "./Item";
function VehicleItems() {
  let vehicleItems = ["Bus", "Car", "Bike", "Cycle"];
  return (
    <>
      <h1 className="vehicle-heading">Vehicles</h1>
      <ul className="list-group">
        {vehicleItems.map((item, index) => (
          <Item key={index} Item vehicleItems={item}></Item>
        ))}
      </ul>
    </>
  );
}

export default VehicleItems;
