import Image from "next/image";
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({subsets:['latin']});


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-8">
    <h1 className="text-3xl font-bold mb-6">Member Experience Dashboard</h1>
    <p className="mb-8">Analyze member satisfaction and complaint data from 2022-2025</p>
   
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Link href="/overview" className="p-6 border rounded-lg hover:shadow-md transition-shadow">
        <h2 className="text-xl font-bold mb-2">Overview Dashboard</h2>
        <p>High-level metrics and trends for member satisfaction</p>
      </Link>
     
      <Link href="/satisfaction" className="p-6 border rounded-lg hover:shadow-md transition-shadow">
        <h2 className="text-xl font-bold mb-2">Satisfaction Analysis</h2>
        <p>Detailed satisfaction trends by channel and benchmark performance</p>
      </Link>
     
      <Link href="/complaints" className="p-6 border rounded-lg hover:shadow-md transition-shadow">
        <h2 className="text-xl font-bold mb-2">Complaint Analysis</h2>
        <p>Complaint volume and category breakdown</p>
      </Link>
     
      <Link href="/tier-analysis" className="p-6 border rounded-lg hover:shadow-md transition-shadow">
        <h2 className="text-xl font-bold mb-2">Tier Analysis</h2>
        <p>Comparing 3rd Party Call Center vs Member Advocate performance</p>
      </Link>
     
      <Link href="/insights" className="p-6 border rounded-lg hover:shadow-md transition-shadow">
        <h2 className="text-xl font-bold mb-2">Key Insights</h2>
        <p>Strategic recommendations and action items</p>
      </Link>
    </div>
  </main>
  );
}
