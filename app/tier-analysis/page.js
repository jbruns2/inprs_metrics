"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { tierData, tierComplaintTypes } from '@/lib/data';

export default function TierAnalysisPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-2">Tier Analysis Dashboard</h1>
      <p className="text-gray-500 mb-6">Comparing Tier 1 (3rd Party Call Center) vs Tier 2 (Member Advocate)</p>
     
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Tier Distribution by Year */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-4">Tier 1 vs Tier 2 Complaints by Year</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={tierData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="tier1" name="Tier 1 (3rd Party Call Center)" fill="#8884d8" />
              <Bar dataKey="tier2" name="Tier 2 (Member Advocate)" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4">
            <h3 className="font-semibold text-sm">Key Observations:</h3>
            <ul className="text-sm mt-2 list-disc pl-5">
              <li>Tier 1 (3rd Party) handles approximately 80% of all complaints</li>
              <li>Both tiers saw significant increases from 2022 to 2023</li>
              <li>Tier 2 volume stabilized in 2024 despite overall complaint increases</li>
            </ul>
          </div>
        </div>
       
        {/* Tier Percentage Comparison */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-4">Tier Distribution Percentage</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={tierData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
              <Tooltip formatter={(value, name, props) => {
                const entry = props.payload;
                const total = entry.total;
                return [`${((value / total) * 100).toFixed(1)}%`, name];
              }} />
              <Legend />
              <Bar dataKey="tier1" name="Tier 1 %" stackId="a" fill="#8884d8" />
              <Bar dataKey="tier2" name="Tier 2 %" stackId="a" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 text-sm">
            <p><strong>Consistent Ratio:</strong> The distribution between Tier 1 and Tier 2 complaints has remained relatively consistent at approximately 80/20 split across all years.</p>
          </div>
        </div>
      </div>
     
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Complaint Types by Tier */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-4">Complaint Types by Tier</h2>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={tierComplaintTypes} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="type" type="category" width={150} />
              <Tooltip />
              <Legend />
              <Bar dataKey="tier1" name="Tier 1 (3rd Party Call Center)" fill="#8884d8" />
              <Bar dataKey="tier2" name="Tier 2 (Member Advocate)" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
       
        {/* Tier Complaints Analysis */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-4">Tier-Specific Complaint Analysis</h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="border-l-4 border-purple-500 pl-3 py-2">
              <h3 className="font-semibold">Tier 1 (3rd Party) Primary Issues</h3>
              <ul className="text-sm mt-1 list-disc pl-5">
                <li><strong>Communication Problems</strong> (678 complaints) - 80% of all communication issues</li>
                <li><strong>Service Delays</strong> (295 complaints) - 83% of all delay complaints</li>
                <li><strong>Website Issues</strong> (214 complaints) - 78% of all website complaints</li>
              </ul>
            </div>
           
            <div className="border-l-4 border-green-500 pl-3 py-2">
              <h3 className="font-semibold">Tier 2 (Member Advocate) Primary Issues</h3>
              <ul className="text-sm mt-1 list-disc pl-5">
                <li><strong>Policy Concerns</strong> (54 complaints) - 38% of all policy issues</li>
                <li><strong>Financial Issues</strong> (47 complaints) - 34% of all financial complaints</li>
                <li><strong>Process Confusion</strong> (45 complaints) - 30% of process confusion issues</li>
              </ul>
            </div>
           
            <div className="border-l-4 border-blue-500 pl-3 py-2">
              <h3 className="font-semibold">Key Differences</h3>
              <p className="text-sm mt-1">Tier 1 handles predominantly frontline communication and service issues, while Tier 2 deals with a higher proportion of complex policy, financial, and procedural matters. This suggests that improving Tier 1 communication and basic service delivery would have the greatest impact on overall satisfaction.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
