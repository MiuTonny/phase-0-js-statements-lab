const temperature = 90;
const timeOfDay = "morning";
let soilMoisture = 30;

if (temperature > 90) {
    console.log("Watering on");
  } else {
    console.log("Watering off");
  }
  
  if (timeOfDay === "evening" || timeOfDay === "night") {
    console.log("Lights on");
  } else {
    console.log("Lights off");
  }
  
  while (soilMoisture < 40) {
    soilMoisture += 5;
    console.log(soilMoisture); // Logs the value
  }
  
  console.log(soilMoisture); // Logs 40 the loops end

  