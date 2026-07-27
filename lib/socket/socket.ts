import { io } from "socket.io-client";

export const socket = io("https://e-commerce-backend-tz02.onrender.com" , {
// export const socket = io("http://localhost:5000" , {
  withCredentials: true,
  autoConnect: false,
});