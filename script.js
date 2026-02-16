function postLoad() {
  alert("Load Posted Successfully!");
}

function addTruck() {
  alert("Truck Added Successfully!");
}

document.querySelectorAll(".book").forEach(btn => {
  btn.onclick = () => alert("Truck Booked!");
});
