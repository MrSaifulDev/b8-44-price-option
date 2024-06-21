import { LineChart as LChart, Line, XAxis, YAxis, } from 'recharts';

const LineChart = () => {


  const studentsData = [
    { name: "Alice", math: 85, physics: 78, chemistry: 90 },
    { name: "Bob", math: 70, physics: 82, chemistry: 88 },
    { name: "Charlie", math: 92, physics: 75, chemistry: 85 },
    { name: "David", math: 78, physics: 80, chemistry: 92 },
    { name: "Emma", math: 88, physics: 85, chemistry: 78 },
    { name: "Frank", math: 83, physics: 72, chemistry: 84 },
    { name: "Grace", math: 75, physics: 79, chemistry: 90 },
    { name: "Henry", math: 90, physics: 88, chemistry: 85 },
    { name: "Iris", math: 87, physics: 76, chemistry: 91 },
    { name: "Jack", math: 80, physics: 83, chemistry: 79 }
  ];


    return (
        <div>
            <LChart width={500} height={400} data={studentsData}>

            <XAxis dataKey="name" /> <YAxis />
            
              <Line dataKey={'math'}></Line>
              <Line dataKey={'physics'}></Line>

            </LChart>
        </div>
    );
};

export default LineChart;