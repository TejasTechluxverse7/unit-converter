const unitOptions = {
    length: ["meter", "kilometer", "mile"],
    temperature: ["celsius", "fahrenheit", "kelvin"],
    weight: ["kilogram", "gram", "pound"]
  };
  
  const conversionType = document.getElementById("conversionType");
  const fromUnit = document.getElementById("fromUnit");
  const toUnit = document.getElementById("toUnit");
  
  function populateUnits() {
    const selected = conversionType.value;
    fromUnit.innerHTML = "";
    toUnit.innerHTML = "";
    unitOptions[selected].forEach(unit => {
      fromUnit.innerHTML += `<option value="${unit}">${unit}</option>`;
      toUnit.innerHTML += `<option value="${unit}">${unit}</option>`;
    });
  }
  
  conversionType.addEventListener("change", populateUnits);
  window.onload = populateUnits;
  
  function convert() {
    const type = conversionType.value;
    const input = parseFloat(document.getElementById("inputValue").value);
    const from = fromUnit.value;
    const to = toUnit.value;
  
    let result;
  
    if (type === "length") {
      const conversions = {
        meter: 1,
        kilometer: 1000,
        mile: 1609.34
      };
      result = input * conversions[from] / conversions[to];
    } else if (type === "weight") {
      const conversions = {
        gram: 1,
        kilogram: 1000,
        pound: 453.592
      };
      result = input * conversions[from] / conversions[to];
    } else if (type === "temperature") {
      if (from === to) result = input;
      else if (from === "celsius") {
        if (to === "fahrenheit") result = (input * 9/5) + 32;
        else result = input + 273.15;
      } else if (from === "fahrenheit") {
        if (to === "celsius") result = (input - 32) * 5/9;
        else result = ((input - 32) * 5/9) + 273.15;
      } else {
        if (to === "celsius") result = input - 273.15;
        else result = ((input - 273.15) * 9/5) + 32;
      }
    }
  
    document.getElementById("result").innerText = `Result: ${result.toFixed(2)} ${to}`;
  }
  