export default function Header() {
  return (
    <div className="bg-gradient-to-r backdrop-blur-sm from-teal-600 to-teal-800 p-6 text-center">
      <div className="inline-flex items-center justify-center mb-2 w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Semantic Book Search</h1>
      <p className="mt-2 text-teal-100 max-w-lg mx-auto">
        Discover books based on meaning and content rather than just keywords
      </p>
    </div>
  );
}
