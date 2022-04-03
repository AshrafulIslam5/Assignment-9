import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, [])
    return (
        <div className='grid grid-cols-2 gap-20 mt-24 px-16'>
            <div>
                <h1 className='text-center text-2xl text-red-500'>Sales</h1>
                <LineChart
                    width={600}
                    height={400}
                    data={data}
                >
                    <CartesianGrid />
                    <Line type='linear' dataKey='sell' stroke="red" activeDot={{ r: 8 }}></Line>
                    <YAxis stroke='blue'></YAxis>
                    <XAxis dataKey={'month'} stroke='blue'></XAxis>
                    <Tooltip />
                    <Legend />
                </LineChart>
            </div>

            <div className='w-[500px]'>
            <h1 className='text-center text-2xl text-blue-500'>investment Vs revenue</h1>
                <BarChart width={500} height={400} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={"month"} stroke="purple" />
                    <YAxis stroke="purple" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey={'investment'} fill='#FF6F61' stroke='blue'></Bar>
                    <Bar dataKey={'revenue'} fill='#6B5B95' stroke='red'></Bar>
                </BarChart>
            </div>
            <div className='md:ml-12'>
                <AreaChart width={500} height={400} data={data}>
                    <CartesianGrid strokeDasharray="4 4" />
                    <XAxis dataKey={"month"} stroke="purple" />
                    <YAxis stroke="purple" />
                    <Tooltip />
                    <Legend />
                    <Area dataKey={'investment'} fill='blue' stroke='blue'/>
                    <Area dataKey={'revenue'} fill='red' stroke='red'/>
                </AreaChart>
            </div>
        </div>
    );
};

export default Dashboard;