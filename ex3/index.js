const moment = require('moment');

// Function to get the current date and time in a formatted string
function getCurrentDateTime() {
    return moment().format('MMMM Do YYYY, h:mm:ss a');
}   
module.exports = { getCurrentDateTime };

