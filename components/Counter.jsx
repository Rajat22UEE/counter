"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-2xl p-8 shadow-2xl w-full max-w-md text-center">
        <h1 className="text-4xl font-bold mb-6 text-yellow-300">React Counter</h1>
        
        <p className="text-6xl font-extrabold text-white mb-8">{count}</p>
        
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setCount(count - 1)}
            className="bg-red-500 hover:bg-red-600 transition-all duration-200 text-white px-6 py-2 rounded-xl shadow-lg"
          >
            −
          </button>
          <button
            onClick={() => setCount(0)}
            className="bg-gray-500 hover:bg-gray-600 transition-all duration-200 text-white px-6 py-2 rounded-xl shadow-lg"
          >
            Reset
          </button>
          <button
            onClick={() => setCount(count + 1)}
            className="bg-green-500 hover:bg-green-600 transition-all duration-200 text-white px-6 py-2 rounded-xl shadow-lg"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
