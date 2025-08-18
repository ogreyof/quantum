import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Quantum Experience
        </h1>
        <p className="text-gray-600 mb-8">
          Escolha sua experiência
        </p>
        
        <div className="space-y-4">
          <Link 
            href="/landing"
            className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Página de Vendas
          </Link>
          
          <Link 
            href="/app"
            className="block w-full border-2 border-purple-600 text-purple-600 py-3 px-6 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
          >
            Aplicativo
          </Link>
          
          <Link 
            href="/admin"
            className="block w-full bg-gray-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
          >
            Admin
          </Link>
          
          <Link 
            href="/seller"
            className="block w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Vendedor
          </Link>
        </div>
      </div>
    </div>
  );
}