import { Input } from "../ui/Input";
import { Button } from "../ui/Button";

export default function SearchBar({ query, setQuery, topK, setTopK, isLoading, handleSearch, handleKeyDown }) {
  return (
    <div className="space-y-6 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-md border border-slate-200">
      <div className="relative">
        <Input
          type="text"
          placeholder="What book are you looking for? (e.g., 'a philosophical novel about time')"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full px-5 py-4 border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 rounded-xl transition text-lg"
          disabled={isLoading}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex items-center gap-3">
          <label htmlFor="topK" className="text-sm font-medium text-slate-600 whitespace-nowrap">Results to show:</label>
          <Input
            id="topK"
            type="number"
            min={1}
            max={10}
            value={topK}
            onChange={(e) => {
              const val = parseInt(e.target.value);
              setTopK(isNaN(val) ? 1 : val);
            }}
            className="w-20 border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 rounded-lg text-center"
            disabled={isLoading}
          />
        </div>

        <Button
          onClick={handleSearch}
          disabled={isLoading || !query.trim()}
          className="w-full sm:w-auto bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-semibold px-8 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
        >
          {isLoading ? (
            <span className="flex items-center gap-3">
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Searching...
            </span>
          ) : (
            <span className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Find Books
            </span>
          )}
        </Button>
      </div>
    </div>
  );
}
