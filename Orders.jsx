import React, { useEffect, useState } from "react";
import axios from "axios";
import { differenceInMilliseconds, startOfTomorrow } from "date-fns";
import './order.css';

export default function Orders() {
    const [orders, setOrders] = useState(() => {
        const savedOrders = localStorage.getItem("orders");
        return savedOrders ? parseInt(savedOrders, 10) : 0;
    });
    const [day, setDay] = useState(() => {
        const savedDay = localStorage.getItem("day");
        return savedDay ? parseInt(savedDay, 10) : 1;
    });
    const resetOrdersAtMidnight = () => {
        setOrders(0);
        localStorage.setItem("orders", "0");

        const newDay = day + 1;
        setDay(newDay);
        localStorage.setItem("day", newDay.toString());
    }
    useEffect(() => {
        const now = new Date();
        const timeUntilMidnight = differenceInMilliseconds(startOfTomorrow(), now);

        const midnightTimeout = setTimeout(() => {
            resetOrdersAtMidnight();
            setInterval(resetOrdersAtMidnight, 24 * 60 * 60 * 1000);
        }, timeUntilMidnight);
        return () => clearTimeout(midnightTimeout);}, [day]);
        const handlePlaceOrder = () => {
            setOrders(prevOrders => {
                const newOrders = prevOrders + 1;
                localStorage.setItem("orders", newOrders.toString());
                const timestamp = new Date().toLocaleString();
                const newNotification = `Arrival of Order - ${timestamp}`;
                const existingNotifications = JSON.parse(localStorage.getItem("newOrderNotifications")) || [];
                const updatedNotifications = [newNotification, ...existingNotifications];
                localStorage.setItem("newOrderNotifications", JSON.stringify(updatedNotifications));
        
                return newOrders;
            });
        
            OD();  
        };
const OD = async () => {
        const orda = { orders: orders.toString(), day: `Day${day}` };
        try {
            const response = await axios.post("http://localhost:8080/", orda);
        } catch (error) {
            console.error("Error came!!!", error);
        }
    };
    useEffect(() => {
        const frame = document.getElementById("frame");

        if (frame) {
            frame.innerHTML = `<div>
                 <button class="btnOrder">Place Order</button>
                <p class="orderc">Orders: ${orders-1}</p>
                <p class="day">Day${day}</p>
                </div> `;
            const button = frame.querySelector(".btnOrder");
            if (button) {
                button.addEventListener("click", handlePlaceOrder);}
            return () => {
                if (button) button.removeEventListener("click", handlePlaceOrder);
                frame.innerHTML = "";
            };
        }
    }, [orders, day]);

    return null;
}
