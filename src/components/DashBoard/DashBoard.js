import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, CartesianGrid, ComposedChart, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

import './DashBoard.css'

const DashBoard = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`data.json`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])


    return (
        <div className='dashboard'>

            <div>

                <h1>MONTH WISE SELL</h1>


                <LineChart width={600} height={400} data={data}>
                    <Line type="monotone" dataKey="sell" stroke="#8884d8"></Line>
                    <XAxis dataKey="month"></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>

                </LineChart>




            </div>



            <div>

                <h1>Invensment VS Revenew</h1>

                <AreaChart width={600} height={400} data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                    </defs>

                    <XAxis dataKey="month" />

                    <YAxis />

                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="revenue" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />

                    <Area type="monotone" dataKey="investment" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>



            </div>

            <div>
                <h1>Revenew VS Invensment</h1>


                <ComposedChart width={600} height={400} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="revenue" fill="#8884d8" />
                    <Bar dataKey="investment" fill="#82ca9d" />
                </ComposedChart>

            </div>

            <div>
                <h1>Revenew VS Invensment</h1>
                <PieChart width={600} height={400}>
                    <Tooltip />
                    <Pie data={data} dataKey="investment" nameKey="month" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                    <Pie data={data} dataKey="revenue" nameKey="month" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                </PieChart>
            </div>

        </div>
    );
};

export default DashBoard;