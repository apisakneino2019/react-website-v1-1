module.exports = (app) => {
  const tutorials = require("../controllers/tutorial.controller.js");
  

  // Create a new Tutorial
  app.post("/api/create", tutorials.create);

  // Retrieve all Tutorials
  app.get("/api", tutorials.findAll);

  // Retrieve all published Tutorials
  app.get("/published", tutorials.findAllPublished);

  // Retrieve a single Tutorial with id
  app.get("/:id", tutorials.findOne);

  // Update a Tutorial with id
  app.put("/:id", tutorials.update);

  // Delete a Tutorial with id
  app.delete("/:id", tutorials.delete);

  // Delete all Tutorials
  app.delete("/", tutorials.deleteAll);

//   app.use("/api/tutorials", router);
};
