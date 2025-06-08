import { Card } from "../ui/Card";

export default function SearchResults({ results, isLoading, error }) {
  if (error) {
    return (
      <div className="p-4 bg-rose-50 border border-rose-100 text-rose-700 rounded-lg flex items-center gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>{error}</span>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="text-center py-12 px-4">
        <div className="space-y-5 mx-auto w-24 h-24 bg-gradient-to-br from-teal-50 to-slate-50 rounded-full flex items-center justify-center text-teal-500 mb-6 border border-teal-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13..." />
          </svg>
        </div>
        <h3 className="text-xl font-medium text-slate-700">
          {isLoading ? "Searching our library..." : "Discover Your Next Read"}
        </h3>
        <p className="mt-3 text-slate-500 max-w-md mx-auto">
          {isLoading
            ? "Analyzing your query to find the most relevant books..."
            : "Describe a book theme, topic, or concept to find perfect matches"}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <h2 className="text-xl font-semibold text-slate-700 mb-3 flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="..." />
        </svg>
        Found {results.length} {results.length === 1 ? 'Book' : 'Books'}
      </h2>
      {results.map((book, i) => (
        <Card
          key={i}
          className="p-5 border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-all bg-white hover:bg-teal-50/50"
        >
          <div className="flex gap-5">
            <div className="flex-shrink-0 w-16 h-20 bg-gradient-to-br from-teal-100 to-teal-50 rounded-lg flex items-center justify-center text-teal-600 border border-teal-100">
              {/* Book icon */}
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-slate-800">{book.title}</h2>
              <p className="text-sm text-slate-600 mt-1">
                <span className="font-medium">Author:</span> {book.author}
              </p>
              <p className="text-slate-700 mt-3 leading-relaxed line-clamp-3">
                {book.description}
              </p>
              <div className="mt-4 flex gap-2">
                <span className="text-xs px-2.5 py-1.5 bg-teal-100 text-teal-800 rounded-full font-medium">{book.genre || "Fiction"}</span>
                <span className="text-xs px-2.5 py-1.5 bg-amber-100 text-amber-800 rounded-full font-medium">★ {book.rating || "4.5"}</span>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
