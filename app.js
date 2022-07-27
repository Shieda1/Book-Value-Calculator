// https://calculator.swiftutors.com/book-value-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const bookValueRadio = document.getElementById('bookValueRadio');
const acquisitionCostRadio = document.getElementById('acquisitionCostRadio');
const depreciationRadio = document.getElementById('depreciationRadio');

let bookValue;
let acquisitionCost = v1;
let depreciation = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

bookValueRadio.addEventListener('click', function() {
  variable1.textContent = 'Acquisition Cost';
  variable2.textContent = 'Depreciation';
  acquisitionCost = v1;
  depreciation = v2;
  result.textContent = '';
});

acquisitionCostRadio.addEventListener('click', function() {
  variable1.textContent = 'Book Value';
  variable2.textContent = 'Depreciation';
  bookValue = v1;
  depreciation = v2;
  result.textContent = '';
});

depreciationRadio.addEventListener('click', function() {
  variable1.textContent = 'Book Value';
  variable2.textContent = 'Acquisition Cost';
  bookValue = v1;
  acquisitionCost = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(bookValueRadio.checked)
    result.textContent = `Book Value = ${computeBookValue().toFixed(2)}`;

  else if(acquisitionCostRadio.checked)
    result.textContent = `Acquisition Cost = ${computeAcquisitionCost().toFixed(2)}`;

  else if(depreciationRadio.checked)
    result.textContent = `Depreciation = ${computeDepreciation().toFixed(2)}`;
})

// calculation

function computeBookValue() {
  return Number(acquisitionCost.value) - Number(depreciation.value);
}

function computeAcquisitionCost() {
  return Number(bookValue.value) + Number(depreciation.value);
}

function computeDepreciation() {
  return Number(acquisitionCost.value) - Number(bookValue.value);
}