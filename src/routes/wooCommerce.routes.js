import { Router } from "express";
import { order_placed } from "../controllers/wooCommerce.controller.js";

const router = Router()

router.route("/order_done").post(order_placed)

export default router;