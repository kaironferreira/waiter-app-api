import { Request, Response } from "express";
import { Order } from "../../models/Order";


export async function changeOrderStatus(request: Request, response: Response) {
    try {
        const { id } = request.params;
        const { status } = request.body;


        if (!["WAITING", "IN_PRODUCTION", "DONE"].includes(status)) {
            return response.status(400).json({ error: "Status should be one of these: WAITING, IN_PRODUCTION, DONE" })
        }

        await Order.findByIdAndUpdate(id, { status });

        response.sendStatus(204);

    } catch (error) {
        response.status(500).json(error);
    }
}