import { Request, Response } from "express";
import { Order } from "../../models/Order";


export async function createOrders(request: Request, response: Response) {
    try {
        const { table, products } = request.body;

        const orders = await Order.create({ table, products });

        response.status(201).json(orders);

    } catch (error) {
        response.status(500).json(error);
    }
}