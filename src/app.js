import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(express.json({ limit: '16kb' }))
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(cookieParser())


//Routes
import wooCommerceRouter from "./routes/wooCommerce.routes.js"

app.use("/api/v1/wooCommerce", wooCommerceRouter)

export { app }