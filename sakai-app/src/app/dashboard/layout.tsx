import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* Dashboard Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-blue-600 hover:text-blue-700 transition-colors">
              <i className="pi pi-arrow-left mr-2"></i>
              Back to Home
            </Link>
            <div className="w-px h-6 bg-gray-300"></div>
            <h2 className="text-xl font-semibold text-gray-900">Sakai Learning Dashboard</h2>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
              <i className="pi pi-bell text-lg"></i>
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
              <i className="pi pi-cog text-lg"></i>
            </button>
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">U</span>
            </div>
          </div>
        </div>
      </header>
      
      {/* Dashboard Content */}
      <main>
        {children}
      </main>
    </div>
  );
}
