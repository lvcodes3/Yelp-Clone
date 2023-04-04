////////////
// ROUTES //
////////////
// express Router
const { Router } = require("express");
// creating instance of the express Router
const router = Router();
// importing controller functions for each route
const controller = require("./controller");

// sub-routes for main route
router.get("/", controller.getAllRestaurants);
router.get("/:id", controller.getRestaurant);
router.post("/", controller.addRestaurant);
router.put("/:id", controller.updateRestaurant);
router.delete("/:id", controller.deleteRestaurant);
router.post("/:id/addReview", controller.addReview);

module.exports = router;
