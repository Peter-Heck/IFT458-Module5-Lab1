// Student Name: Peter Heck
// Student ID: 1221899224
// Date: 07/14/2024

// logger middleware
exports.logUser = async (req, res, next) => {
    req.time = new Date(Date.now()).toString();
    console.log(req.time + ": New user has logged on");
    next();
};