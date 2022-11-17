import { Request, Response } from "express";
import { Category } from "../../models/Category";


export async function listCategories(request: Request, response: Response) {
    try {
        const categories = await Category.find();

        response.status(200).json(categories);

    } catch (error) {
        response.status(500).json(error);
    }
}