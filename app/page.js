// "use client";

// import React, { useState } from "react";
// import axios from "axios";
// import { Input } from "../components/ui/Input";
// import { Button } from "../components/ui/Button";
// import { Card } from "../components/ui/Card";

// export default function Home() {
//   const [query, setQuery] = useState("");
//   const [topK, setTopK] = useState(3);
//   const [results, setResults] = useState([]);
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSearch = async () => {
//     if (!query.trim()) {
//       setError("Please enter a search query");
//       return;
//     }
    
//     setIsLoading(true);
//     setError("");
    
//     try {
//       const response = await axios.get("http://192.168.59.90:8000/search/", {
//         params: { query, top_k: topK },
//       });
//       setResults(response.data.results);
//     } catch (err) {
//       setError("No results found. Please try a different query.");
//       setResults([]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") {
//       handleSearch();
//     }
//   };

//   return (
//     <main 
//     className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-fixed p-4 md:p-8"
//   style={{
//     backgroundImage: `url('https://img.freepik.com/premium-photo/white-book-shelf-with-books-it-plant-top-shelf_862462-13982.jpg?w=1380')`,
//   }}
//     >
//       <div className="max-w-4xl mx-auto">
//         <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-slate-100 bg-fixed">

//           {/* Header Section */}
//           <div className="bg-gradient-to-r backdrop-blur-sm from-teal-600 to-teal-800 p-6 text-center"
          
//           >
//             <div className="inline-flex items-center justify-center mb-2 w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
//               </svg>
//             </div>
//             <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
//               Semantic Book Search
//             </h1>
//             <p className="mt-2 text-teal-100 max-w-lg mx-auto">
//               Discover books based on meaning and content rather than just keywords
//             </p>
//           </div>

//           {/* Search Section */}
//           <div className="p-6 space-y-6">
//             <div className="space-y-6">
//               <div className="relative">
//                 <Input
//                   type="text"
//                   placeholder="What book are you looking for? (e.g., 'a philosophical novel about time')"
//                   value={query}
//                   onChange={(e) => setQuery(e.target.value)}
//                   onKeyDown={handleKeyDown}
//                   className="w-full px-5 py-4 border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 rounded-xl transition text-lg"
//                   disabled={isLoading}
//                 />
//                 <div className="absolute inset-y-0 right-0 flex items-center pr-4">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                   </svg>
//                 </div>
//               </div>

//               <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
//                 <div className="flex items-center gap-3">
//                   <label htmlFor="topK" className="text-sm font-medium text-slate-600 whitespace-nowrap">
//                     Results to show:
//                   </label>
//                   <Input
//                     id="topK"
//                     type="number"
//                     min={1}
//                     max={10}
//                     value={topK}
//                     onChange={(e) => setTopK(parseInt(e.target.value))}
//                     className="w-20 border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 rounded-lg text-center"
//                     disabled={isLoading}
//                   />
//                 </div>
                
//                 <Button
//                   onClick={handleSearch}
//                   disabled={isLoading || !query.trim()}
//                   className="w-full sm:w-auto bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-semibold px-8 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
//                 >
//                   {isLoading ? (
//                     <span className="flex items-center gap-3">
//                       <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                       </svg>
//                       Searching...
//                     </span>
//                   ) : (
//                     <span className="flex items-center gap-3">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                       </svg>
//                       Find Books
//                     </span>
//                   )}
//                 </Button>
//               </div>
//             </div>

//             {error && (
//               <div className="p-4 bg-rose-50 border border-rose-100 text-rose-700 rounded-lg flex items-center gap-3">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//                 <span>{error}</span>
//               </div>
//             )}
//           </div>

//           {/* Results Section */}
//           <div className="px-6 pb-8">
//             {results.length > 0 ? (
//               <div className="space-y-5">
//                 <h2 className="text-xl font-semibold text-slate-700 mb-3 flex items-center gap-2">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
//                   </svg>
//                   Found {results.length} {results.length === 1 ? 'Book' : 'Books'}
//                 </h2>
//                 {results.map((book, i) => (
//                   <Card
//                     key={i}
//                     className="p-5 border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-all bg-white hover:bg-teal-50/30"
//                   >
//                     <div className="flex gap-5">
//                       <div className="flex-shrink-0 w-16 h-20 bg-gradient-to-br from-teal-100 to-teal-50 rounded-lg flex items-center justify-center text-teal-600 border border-teal-100">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
//                         </svg>
//                       </div>
//                       <div className="flex-1">
//                         <h2 className="text-xl font-bold text-slate-800">{book.title}</h2>
//                         <p className="text-sm text-slate-600 mt-1">
//                           <span className="font-medium">Author:</span> {book.author}
//                         </p>
//                         <p className="text-slate-700 mt-3 leading-relaxed line-clamp-3">
//                           {book.description}
//                         </p>
//                         <div className="mt-4 flex gap-2">
//                           <span className="text-xs px-2.5 py-1.5 bg-teal-100 text-teal-800 rounded-full font-medium">
//                             {book.genre || "Fiction"}
//                           </span>
//                           <span className="text-xs px-2.5 py-1.5 bg-amber-100 text-amber-800 rounded-full font-medium">
//                             ★ {book.rating || "4.5"}
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </Card>
//                 ))}
//               </div>
//             ) : (
//               <div className="text-center py-12 px-4">
//                 <div className="space-y-5 mx-auto w-24 h-24 bg-gradient-to-br from-teal-50 to-slate-50 rounded-full flex items-center justify-center text-teal-500 mb-6 border border-teal-100">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-medium text-slate-700">
//                   {isLoading ? "Searching our library..." : "Discover Your Next Read"}
//                 </h3>
//                 <p className="mt-3 text-slate-500 max-w-md mx-auto">
//                   {isLoading 
//                     ? "Analyzing your query to find the most relevant books..."
//                     : "Describe a book theme, topic, or concept to find perfect matches"}
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>
        
//         <footer className="mt-8 text-center text-sm text-slate-500">
//           Semantic Book Search • Powered by AI • Find books by meaning
//         </footer>
//       </div>
//     </main>
//   );
// }



"use client";
import React, { useState } from "react";
import axios from "axios";
import Header from "../components/search/Header";
import SearchBar from "../components/search/SearchBar";
import SearchResults from "../components/search/SearchResults";

export default function Home() {
  const [query, setQuery] = useState("");
  const [topK, setTopK] = useState(3);
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) {
      setError("Please enter a search query");
      return;
    }
    setIsLoading(true);
    setError("");
    try {
      const response = await axios.get("http://localhost:8000/search/", {
        params: { query, top_k: topK },
      });
      setResults(response.data.results);
    } catch {
      setError("No results found. Please try a different query.");
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <main
      className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-fixed p-4 md:p-8"
      style={{
        backgroundImage: `url('https://img.freepik.com/premium-photo/white-book-shelf-with-books-it-plant-top-shelf_862462-13982.jpg?w=1380')`,
      }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-slate-100">
          <Header />
          <div className="p-6 space-y-6">
            <SearchBar
              query={query}
              setQuery={setQuery}
              topK={topK}
              setTopK={setTopK}
              isLoading={isLoading}
              handleSearch={handleSearch}
              handleKeyDown={handleKeyDown}
            />
          </div>
          <div className="px-6 pb-8">
            <SearchResults results={results} isLoading={isLoading} error={error} />
          </div>
        </div>
        <footer className="mt-8 bg-teal-900/15 font-normal text-center text-sm text-slate-100">
          <strong>Semantic Book Search</strong> &bull; An AI-powered platform to explore books by meaning<br />
           <span>Developed by Akash Masram</span>
        </footer>
      </div>
    </main>
  );
}
