import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Audio } from 'react-loader-spinner';
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Phones = () => {
  const [phones, setPhones] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    // .then(res => res.json())
    // .then(data => setPhones(data.data))

    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phoneData = data.data.data;
        const phoneWithFakeData = phoneData.map((phone) => {
          const obj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
          };
          return obj;
        });
        setPhones(phoneWithFakeData);
        setLoading(false)

      });
  }, []);

  console.log(phones);

  return (


    <div>

     {
      loading &&  
      <div className=" grid justify-items-center ">
        < Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
      </div>
     }

      <BarChart
        width={800}
        height={300}
        data={phones}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="price"
          fill="#8884d8"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
       
      </BarChart>
    </div>
  );
};

export default Phones;



