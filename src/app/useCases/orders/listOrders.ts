import { Request, Response } from "express";
import { Order } from "../../models/Order";


export async function listOrders(request: Request, response: Response) {
    try {
        const orders = await Order.find().populate('products.product');

        response.status(200).json(orders);

    } catch (error) {
        response.status(500).json(error);
    }
}