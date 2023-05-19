// Code under test: app script function to calculate the total price
function calculateTotalPrice() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const dataRange = sheet.getDataRange();
  const values = dataRange.getValues();

  let totalPrice = 0;
  for (let i = 1; i < values.length; i++) {
    const price = values[i][1];
    if (price && typeof price === 'number') {
      totalPrice += price;
    }
  }

  return totalPrice;
}

module.exports = calculateTotalPrice