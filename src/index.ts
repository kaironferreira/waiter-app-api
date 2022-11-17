import express from 'express';
import mongoose from 'mongoose';
import { router } from './router';
import path from 'path';

const PORT = process.env.PORT || 3001;
const app = express();


mongoose.connect('mongodb+srv://admin:admin@cluster-apps.rd5yfec.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log('✅ Connected to MongoDB');

    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
    app.use(express.json());
    app.use(router);

    app.listen(PORT, () => {
        console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });

}).catch((error) => {
    console.log(`⚠️ Error to Connected in MongoDB: ${error}`);
});


