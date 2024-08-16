const dbConfig = require("./src/config/dbConfig.js");
const app = require("./src/server/server.js");
const PORT = 3000;

const startServer = async () => {
  try {
    await dbConfig();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
