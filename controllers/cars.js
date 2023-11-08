const axios = require('axios');

// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
const getCarsMake = async (req, res, next) => {
  try {
    const response = await axios.get('https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json');
    res.status(200).json(response.data) //res.status(200).json({success:true, response:response.data})
  } catch (error) {
    next(error)
  }
 
}

module.exports = {
  getCarsMake
};
