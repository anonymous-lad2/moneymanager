export const BASE_URL = "https://moneymanager-backend-udtk.onrender.com/api/v1.0";
const CLOUDINARY_CLOUD_NAME = "dxnp8ypmy";

export const API_ENDPOINTS = {
    LOGIN: "/login",
    REGISTER: "/register",
    UPLOAD_IMAGE: `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`
}