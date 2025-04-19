import React from 'react';
import {
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  Area,
  Scatter,
  CartesianGrid,
  ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Phone', price: 699, rating: 4.5 },
  { name: 'Laptop', price: 999, rating: 4.8 },
  { name: 'Tablet', price: 499, rating: 4.2 },
  { name: 'Camera', price: 850, rating: 4.7 },
  { name: 'Watch', price: 299, rating: 4.0 },
];

const Statistics = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Product Price vs Rating Chart</h2>

      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={data}>
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />

          {/* Price as Area and Bar */}
          <Area type="monotone" dataKey="price" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="price" barSize={20} fill="#413ea0" />

          {/* Rating as Scatter */}
          <Scatter dataKey="rating" fill="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
