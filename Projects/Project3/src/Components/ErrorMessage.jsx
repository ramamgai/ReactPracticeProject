function ErrorMessage() {
  let vehicleItems = ["Bus", "Car", "Bike", "Cycle"];
  return vehicleItems.length == 0 ? <h3>I am tired.</h3> : null;
}
export default ErrorMessage;
