import './globals.css';

export const metadata = {
  title: 'Member Experience Dashboard',
  description: 'Analyze member satisfaction and complaint trends',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-blue-600 text-white p-4">
          <div className="container mx-auto flex items-center justify-between">
            <h1 className="text-xl font-bold">Member Experience Dashboard</h1>
            <div className="flex gap-4">
              <a href="/" className="hover:underline">Home</a>
              <a href="/overview" className="hover:underline">Overview</a>
              <a href="/satisfaction" className="hover:underline">Satisfaction</a>
              <a href="/complaints" className="hover:underline">Complaints</a>
              <a href="/tier-analysis" className="hover:underline">Tier Analysis</a>
              <a href="/insights" className="hover:underline">Insights</a>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
