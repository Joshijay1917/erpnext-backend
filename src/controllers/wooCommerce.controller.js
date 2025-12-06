import { createCompany } from "../services/erpnextCreateCom.js";
import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"

const order_placed = asyncHandler(async (req, res) => {
    const { company, country, email } = req.body.billing;
    const currency = req.body;

    if(!company || !country || !email || !currency) {
        throw new ApiError(400, "Failed to get required fields!")
    }

    const abbrevation = company.slice(0, 5).toUpperCase().trim();

    const data = await createCompany(company, abbrevation, currency, country, email)

    if(!data) {
        throw new ApiError(500, "Failed to create company!")
    }

    res
    .status(200)
    .json(
        new ApiResponse(200, data, "Successfully create company!!")
    )
})

export {
    order_placed
}