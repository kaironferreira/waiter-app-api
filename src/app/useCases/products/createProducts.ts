import { json, Request, Response } from "express";
import { Product } from "../../models/Product";


export async function createProducts(request: Request, response: Response) {
    try {
        const imagePath = request.file?.filename;
        const { name, description, price, category, ingredients } = request.body;

        const products = await Product.create({
            name,
            description,
            imagePath,
            price: Number(price),
            category,
            ingredients: ingredients ? JSON.parse(ingredients) : [],
        });

        response.status(201).json(products);

    } catch (error) {
        response.status(500).json(error);
    }
}