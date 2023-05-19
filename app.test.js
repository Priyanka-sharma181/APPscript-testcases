const calculateTotalPrice = require("./app");

describe("App Script - Calculate Total Price", () => {
    beforeEach(() => {
      // Set up mock data in the active sheet
      const mockSheet = {
        getDataRange: jest.fn(() => ({
          getValues: jest.fn(() => [
            ['Item', 'Price'],
            ['Item 1', 10],
            ['Item 2', 15],
            ['Item 3', 'abc'],
          ]),
        })),
      };
      global.SpreadsheetApp = {
        getActiveSpreadsheet: jest.fn(() => ({
          getActiveSheet: jest.fn(() => mockSheet),
        })),
      };
    });
  
    afterEach(() => {
      jest.resetAllMocks();
    });
  
    // Positive Test Case: Calculate Total Price
    test("should calculate the total price of items in the sheet", () => {
      // Execute the function
      const totalPrice = calculateTotalPrice();
      expect(totalPrice).toEqual(25);
    });
  
    test("should ignore items with invalid prices", () => {
      const totalPrice = calculateTotalPrice();
      expect(totalPrice).toEqual(25);
    });
  });
  