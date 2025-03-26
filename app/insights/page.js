export default function InsightsPage() {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-6">Key Insights & Recommendations</h1>
       
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-4">Key Satisfaction Insights</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-3 py-2">
                <h3 className="font-semibold">Channel Divergence</h3>
                <p className="text-gray-700">
                  The gap between highest performing (Counseling: 99.6%) and lowest performing (Call Center: 71.8%) channels has widened significantly in 2025.
                </p>
              </div>
             
              <div className="border-l-4 border-green-500 pl-3 py-2">
                <h3 className="font-semibold">Counseling Success</h3>
                <p className="text-gray-700">
                  Counseling has achieved dramatic improvement in 2025, with satisfaction climbing to 99.6% and dissatisfaction dropping to just 0.4%.
                </p>
              </div>
             
              <div className="border-l-4 border-red-500 pl-3 py-2">
                <h3 className="font-semibold">Call Center Struggles</h3>
                <p className="text-gray-700">
                  Call Center satisfaction has fallen below the red benchmark (71.8%), with dissatisfaction doubling from 10.4% to 16.8% between 2024 and 2025.
                </p>
              </div>
             
              <div className="border-l-4 border-yellow-500 pl-3 py-2">
                <h3 className="font-semibold">Workshop Volatility</h3>
                <p className="text-gray-700">
                  Workshops show dramatic volatility, peaking at 98.3% satisfaction in 2024 before dropping sharply to 87.9% in early 2025.
                </p>
              </div>
            </div>
          </div>
         
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-4">Strategic Recommendations</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-3 py-2">
                <h3 className="font-semibold">Tier 1 Communication Protocol</h3>
                <p className="text-gray-700">
                  Implement standardized communication practices to reduce disconnected calls, response failures, and follow-up issues that dominate complaints.
                </p>
              </div>
             
              <div className="border-l-4 border-orange-500 pl-3 py-2">
                <h3 className="font-semibold">Website Enhancements</h3>
                <p className="text-gray-700">
                  Prioritize technical fixes for login issues, account updates, and information findability problems driving dissatisfaction.
                </p>
              </div>
             
              <div className="border-l-4 border-green-500 pl-3 py-2">
                <h3 className="font-semibold">Apply Counseling Practices</h3>
                <p className="text-gray-700">
                  Identify and scale the successful communication and service practices that have transformed Counseling performance across other channels.
                </p>
              </div>
             
              <div className="border-l-4 border-blue-500 pl-3 py-2">
                <h3 className="font-semibold">Cross-Channel Consistency</h3>
                <p className="text-gray-700">
                  Establish consistent service standards and knowledge resources across all channels to reduce conflicting information.
                </p>
              </div>
            </div>
          </div>
         
          <div className="bg-white p-4 rounded shadow lg:col-span-2">
            <h2 className="text-lg font-semibold mb-4">Implementation Roadmap</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-4 py-2 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase">Initiative</th>
                    <th className="px-4 py-2 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase">Timeline</th>
                    <th className="px-4 py-2 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase">Impact</th>
                    <th className="px-4 py-2 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase">Priority</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-2">Tier 1 Communication Protocol</td>
                    <td className="px-4 py-2">Q2 2025</td>
                    <td className="px-4 py-2">High</td>
                    <td className="px-4 py-2">1</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Website Technical Fixes</td>
                    <td className="px-4 py-2">Q2-Q3 2025</td>
                    <td className="px-4 py-2">High</td>
                    <td className="px-4 py-2">1</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Follow-Up System</td>
                    <td className="px-4 py-2">Q3 2025</td>
                    <td className="px-4 py-2">High</td>
                    <td className="px-4 py-2">2</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Knowledge Base Enhancement</td>
                    <td className="px-4 py-2">Q3-Q4 2025</td>
                    <td className="px-4 py-2">Medium</td>
                    <td className="px-4 py-2">2</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Cross-Channel Standards</td>
                    <td className="px-4 py-2">Q4 2025</td>
                    <td className="px-4 py-2">Medium</td>
                    <td className="px-4 py-2">3</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
  