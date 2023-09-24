
function bmiCalculator() {
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    let convHeight = height * 0.01

    let BMI = (weight/(convHeight*convHeight)).toFixed(2);

    console.log("Caluclated BMI is:", BMI);



    document.getElementById("result").innerText = `Calculated BMI: ${BMI}`
    
}