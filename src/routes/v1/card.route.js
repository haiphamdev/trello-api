import { CardController } from "../../controllers/card.controller.js";
import express from "express";
import { CardValidation } from "../../validations/card.validation.js";

const router = express.Router();

router.route("/").post(CardValidation.createNew, CardController.createNew);

export const cardRoutes = router;
