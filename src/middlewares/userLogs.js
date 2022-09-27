const fs = require("fs");
const { dirname } = require("path");
const path = require("path");

const userLogsPath = path.join(__dirname, "../logs/userLogs.txt");

const userLogs = fs.readFileSync(userLogsPath, "utf-8");

function logMiddleware(req, res, next) {
  fs.appendFileSync(
    userLogsPath,
    "El usuario ingresó a la ruta: " + req.url + "\n"
  );
  next();
}

module.exports = logMiddleware;
