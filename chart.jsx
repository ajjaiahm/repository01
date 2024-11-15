import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './chart.css';

const MyLineChart = () => {
  const [ordersDay1, setOrdersDay1] = useState(0);
  const [ordersDay2, setOrdersDay2] = useState(0);
  const [ordersDay3, setOrdersDay3] = useState(0);
  const [ordersDay4, setOrdersDay4] = useState(0);
  const [ordersDay5, setOrdersDay5] = useState(0);
  const [ordersDay6, setOrdersDay6] = useState(0);
  const [ordersDay7, setOrdersDay7] = useState(0);
  const [day1, setDay1] = useState(1);
  const [day2, setDay2] = useState(2);
  const [day3, setDay3] = useState(3);
  const [day4, setDay4] = useState(4);
  const [day5, setDay5] = useState(5);
  const [day6, setDay6] = useState(6);
  const [day7, setDay7] = useState(7);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/Day1');
        const { day, orders } = response.data;
        setDay1(day);
        setOrdersDay1(orders);}
         catch (error) {
        console.error("Error came 1:", error);}
      try {
        const response = await axios.get('http://localhost:8080/Day2');
        const { day, orders } = response.data;
        setDay2(day);
        setOrdersDay2(orders);} 
        catch (error) {
        console.error("Error came 2:", error); }
        try {
          const response = await axios.get('http://localhost:8080/Day3');
          const { day, orders } = response.data;
          setDay3(day);
          setOrdersDay3(orders);} 
          catch (error) {
          console.error("Error came 3:", error); }
          try {
            const response = await axios.get('http://localhost:8080/Day4');
            const { day, orders } = response.data;
            setDay4(day);
            setOrdersDay4(orders);} 
            catch (error) {
            console.error("Error came 4:", error); }
            try {
              const response = await axios.get('http://localhost:8080/Day5');
              const { day, orders } = response.data;
              setDay5(day);
              setOrdersDay5(orders);} 
              catch (error) {
              console.error("Error came 5:", error); }
          try {
        const response = await axios.get('http://localhost:8080/Day6');
      const { day, orders } = response.data;
        setDay6(day);
        setOrdersDay6(orders);} 
        catch (error) {
        console.error("Error came 6:", error); }
        try {
        const response = await axios.get('http://localhost:8080/Day7');
        const { day, orders } = response.data;
        setDay7(day);
        setOrdersDay7(orders);} 
        catch (error) {
        console.error("Error came 7:", error); }
        
    };
    fetchData();
  }, []);
  const data = [
    { name: `${day1}`, value: ordersDay1 },
    { name: `${day2}`, value: ordersDay2 },
    { name: 'Day3', value: ordersDay3 },
    { name: 'Day4', value: ordersDay4 },
    { name:'Day5', value: ordersDay5 },
    { name: 'Day6', value: ordersDay6 },
    { name: 'Day7', value: ordersDay7 },
  ];
  return (
    <div className="ch">
      <ResponsiveContainer width="60%" height={500}>
        <LineChart data={data}>
          <CartesianGrid stroke="black" strokeOpacity="0.5" strokeDasharray="2 2" />
          <XAxis dataKey="name" stroke="#9a7d0a" />
          <YAxis stroke="#1f618d" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" name="Sales analysis" stroke="#138d75" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MyLineChart;
