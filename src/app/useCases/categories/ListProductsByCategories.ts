import { Request, Response } from "express";
import { Category } from "../../models/Category";
import { Product } from "../../models/Product";


export async function listProductsByCategories(request: Request, response: Response) {
    try {
        const { id } = request.params;

        const products = await Product.find().where('category').equals(id);

        response.status(200).json(products);

    } catch (error) {
        response.status(500).json(error);
    }
}