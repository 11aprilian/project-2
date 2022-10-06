let button = document.getElementById("btn");

button.addEventListener("click", () => {
  const tinggi = document.getElementById("height").value;
  const berat = document.getElementById("weight").value;
  let result = document.getElementById("output");
  let status = document.getElementById("status");
  let heightStatus = false,
    weightStatus = false;

  if (tinggi === "" || isNaN(tinggi)) {
    document.getElementById("heightError").innerHTML = "Insert a Valid Height";
  } else {
    document.getElementById("heightError").innerHTML = "";
    heightStatus = true;
  }

  if (berat === "" || isNaN(berat)) {
    document.getElementById("weightError").innerHTML = "Insert a Valid Weight";
  } else {
    document.getElementById("weightError").innerHTML = "";
    weightStatus = true;
  }

  if (heightStatus && weightStatus) {
    const bmi = berat / ((tinggi * tinggi) / 10000);
    bmi.toFixed(4);
    result.innerHTML = "Your BMI is : " + bmi;
    if (bmi <= 18) {
      status.innerHTML = "Under Weight";
    } else if (bmi >= 18 && bmi < 25) {
      status.innerHTML = "Normal Weight";
    } else {
      status.innerHTML = "Over Weight";
    }
  } else {
    result.innerHTML = "Error";
  }
});
