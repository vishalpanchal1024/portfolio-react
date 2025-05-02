import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { PrimaryButton, SocialMediaButtons } from '../buttons/Buttons';

// Sample Leetcode Score data for Line Chart
const dataLineChart = [
  { month: 'Jan', score: 25 },
  { month: 'Feb', score: 35 },
  { month: 'Mar', score: 40 },
  { month: 'Apr', score: 55 },
  { month: 'May', score: 60 },
  { month: 'Jun', score: 75 },
];

// Pie chart data for Leetcode question difficulty (Easy, Medium, Hard)
const dataChart = [
  { name: 'Easy', value: 120 },
  { name: 'Medium', value: 75 },
  { name: 'Hard', value: 30 },
];

// Pie chart data for Leetcode problem-solving categories
const dataPieChart = [
  { name: 'Arrays', value: 40 },
  { name: 'Dynamic Programming', value: 25 },
  { name: 'Binary Search', value: 15 },
  { name: 'Graph', value: 10 },
  { name: 'Backtracking', value: 10 },
];

// Define color palette for pie chart slices
const COLORS = ['#00AF9B', '#FFB800', '#FF2D55', '#f44336', '#9c27b0'];

const Home = () => {
  return (
    <div className="min-h-screen  text-white px-4 py-8">
      {/* Profile Section */}
      <section className=" rounded-2xl p-6 mb-10 shadow-lg flex flex-col items-center text-center space-y-4 animate-glow ">

        <div className='flex flex-row  gap-3'>
          <div>
            <img
              src="https://avatars.githubusercontent.com/u/106599132?v=4"
              alt="profile"
              className="w-40 h-40 rounded-full object-cover border-4 border-gray-700"
            />
          </div>
          <div className='pt-5 flex flex-col items-start'>
            <h1 className="text-3xl font-bold">Vishal</h1>
            <p className="text-sm text-gray-300"> LeetCode Rank :<span className='font-extrabold pl-2 text-xs'>584,925</span> </p>
            <span className="flex items-center gap-2">
              Haryana, India
            </span><div className="flex flex-wrap justify-center gap-2 pt-4">
              {["JavaScript", "C++"].map(skill => (
                <span key={skill} className="bg-gray-200 text-black text-xs px-2  rounded-full font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>


        <p className="text-gray-400 max-w-md italic">
          "A passionate developer and problem solver, constantly learning and improving!"
        </p>
        <PrimaryButton title={"Download Resume"} />

        {/* Location & Website */}
        <SocialMediaButtons layout="md:flex md:flex-row grid grid-cols-3 z-10" />

        {/* Skills */}

      </section>

      {/* Charts Section */}
      <section className="grid gap-8 lg:grid-cols-3 md:grid-cols-2">
        {/* Pie Chart - Question Difficulty */}
        <div className=" rounded-2xl p-6 shadow-md animate-glow ">
          <h2 className="text-xl font-bold text-center mb-4">Question Difficulty</h2>
          <div className="h-72 flex items-center justify-center ">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={dataChart}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={60}
                  outerRadius={100}
                  startAngle={180}
                  endAngle={0}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {dataChart.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart - Categories */}
        <div className=" rounded-2xl p-6 shadow-md animate-glow ">
          <h2 className="text-xl font-bold text-center mb-4">Problem-Solving Categories</h2>
          <div className="h-60">
            <ResponsiveContainer width="100%" height="120%">
              <PieChart>
                <Pie
                  data={dataPieChart}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={100}
                  label
                >
                  {dataPieChart.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Line Chart - LeetCode Progress */}
        <div className=" rounded-2xl p-6 shadow-md animate-glow ">
          <h2 className="text-xl font-bold text-center mb-4">Monthly Progress</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dataLineChart}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="score" stroke="#00AF9B" strokeWidth={2} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
    </div>

  );
};

export default Home;
