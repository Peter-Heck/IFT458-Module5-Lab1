// Student Name: Peter Heck
// Student ID: 1221899224
// Date: 07/14/2024

// logger middleware
exports.logUser((req, res, next) => {
    console.log(req.time() + ": New user has logged on");
});