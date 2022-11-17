import { Router } from 'express';
import path from 'path';
import { createCategories } from './app/useCases/categories/createCategories';
import { listCategories } from './app/useCases/categories/listCategories';
import { createProducts } from './app/useCases/products/createProducts';
import { listProducts } from './app/useCases/products/listProducts';
import multer from 'multer';
import { listProductsByCategories } from './app/useCases/categories/ListProductsByCategories';
import { listOrders } from './app/useCases/orders/listOrders';
import { createOrders } from './app/useCases/orders/createCategories';
import { changeOrderStatus } from './app/useCases/orders/changeOrderStatus';
import { deleteOrders } from './app/useCases/orders/deleteOrders';

export const router = Router();

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, callback) {
            callback(null, path.resolve(__dirname, '..', 'uploads'))
        },
        filename(req, file, callback) {
            callback(null, `${Date.now()}-${file.originalname}`)
        },
    }),
});



// List Category
router.get('/categories', listCategories);

// Create Category
router.post('/categories', createCategories);




// List Product
router.get('/products', listProducts);

// Create Product
router.post('/products', upload.single('image'), createProducts);

// Get Product by Category
router.get('/categories/:id/products', listProductsByCategories);




// List Orders
router.get('/orders', listOrders);

// Create Orders
router.post('/orders', createOrders);

// Change Order Status
router.patch('/orders/:id', changeOrderStatus);

// Delete/Cancel Order
router.delete('/orders/:id', deleteOrders);