import { Request, Response } from "express";
import { Order } from "../../models/Order";


export async function deleteOrders(request: Request, response: Response) {
    try {
        const { id } = request.params;
        await Order.findByIdAndDelete(id);

        response.sendStatus(204);

    } catch (error) {
        response.status(500).json(error);
    }
}