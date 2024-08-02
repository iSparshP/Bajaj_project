// backend/controllers/bfhlController.js
const dataProcessor = require("../models/dataProcessor"); // Import data processing logic

exports.getBfhlData = (req, res) => {
  try {
    // Return the hardcoded operation_code for GET request
    const response = {
      operation_code: 1,
    };
    res.status(200).json(response);
  } catch (error) {
    console.error("Error in GET /bfhl:", error);
    res.status(500).json({ is_success: false, error: "Internal Server Error" });
  }
};

exports.processBfhlData = (req, res) => {
  try {
    const data = req.body.data;

    if (!Array.isArray(data)) {
      return res
        .status(400)
        .json({
          is_success: false,
          error: "Invalid data format. Expected an array.",
        });
    }

    const processedData = dataProcessor.processData(data);

    const response = {
      is_success: true,
      user_id: "john_doe_17091999", // You can make this dynamic later
      email: "john@xyz.com",
      roll_number: "ABCD123",
      ...processedData, // Spread the processed data into the response
    };

    res.json(response);
  } catch (error) {
    console.error("Error in POST /bfhl:", error);
    res.status(500).json({ is_success: false, error: "Internal Server Error" });
  }
};
