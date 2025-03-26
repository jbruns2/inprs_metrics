"use client";

import { useState } from 'react';
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer, ComposedChart, PieChart, Pie, Cell
} from 'recharts';
import { satisfactionData, dissatisfactionData, topThemes, benchmarkData } from '@/lib/data';

export default function OverviewPage() {
  // Chart colors
  const channelColors = {
    'Workshops': '#8884d8',
    'Counseling': '#82ca9d',
    'CallCenter': '#ffc658',
    'Website': '#ff8042',
    'Overall': '#413ea0'
  };

  const themeColors = [
    '#8884d8', '#82ca9d', '#ffc658', '#ff8042',
    '#a4de6c', '#d0ed57', '#83a6ed', '#8dd1e1'
  ];

  // Format percentage for tooltips
  const formatPercent = (value) => `${value.toFixed(1)}%`;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Member Experience Overview</h1>
     
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Overall Satisfaction Trend */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-4">Overall Satisfaction Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={satisfactionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis domain={[70, 100]} tickFormatter={formatPercent} />
              <Tooltip formatter={value => formatPercent(value)} />
              <Legend />
              <Line type="monotone" dataKey="Overall" name="Overall Satisfaction" stroke="#413ea0" strokeWidth={3} />
              <Line type="monotone" dataKey="Workshops" stroke={channelColors.Workshops} strokeWidth={2} />
              <Line type="monotone" dataKey="Counseling" stroke={channelColors.Counseling} strokeWidth={2} />
              <Line type="monotone" dataKey="CallCenter" stroke={channelColors.CallCenter} strokeWidth={2} />
              <Line type="monotone" dataKey="Website" stroke={channelColors.Website} strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
       
        {/* Dissatisfaction Trend */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-4">Dissatisfaction Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dissatisfactionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis domain={[0, 20]} tickFormatter={formatPercent} />
              <Tooltip formatter={value => formatPercent(value)} />
              <Legend />
              <Line type="monotone" dataKey="Overall" name="Overall Dissatisfaction" stroke="#FF0000" strokeWidth={3} />
              <Line type="monotone" dataKey="Workshops" stroke={channelColors.Workshops} strokeWidth={2} />
              <Line type="monotone" dataKey="Counseling" stroke={channelColors.Counseling} strokeWidth={2} />
              <Line type="monotone" dataKey="CallCenter" stroke={channelColors.CallCenter} strokeWidth={2} />
              <Line type="monotone" dataKey="Website" stroke={channelColors.Website} strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
     
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Complaint Types */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-4">Top Complaint Categories</h2>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={topThemes} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="theme" type="category" width={150} />
              <Tooltip formatter={(value) => `${value} complaints`} />
              <Legend />
              <Bar dataKey="count" name="Number of Complaints" fill="#8884d8">
                {topThemes.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={themeColors[index % themeColors.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
       
        {/* Benchmark Status */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-4">2025 Benchmark Performance</h2>
          <ResponsiveContainer width="100%" height={350}>
            <ComposedChart data={benchmarkData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="channel" />
              <YAxis domain={[70, 100]} />
              <Tooltip />
              <Legend />
              <Bar dataKey="satisfied" name="Satisfaction %" fill="#8884d8" />
              <Line dataKey="green" name="Green Benchmark" stroke="#4CAF50" strokeWidth={2} dot={false} />
              <Line dataKey="red" name="Red Benchmark" stroke="#FF0000" strokeWidth={2} dot={false} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
     
      <div className="mt-4 text-sm text-gray-500 text-center">
        <p>* 2025 data represents January and February only</p>
      </div>
    </div>
  );
}
