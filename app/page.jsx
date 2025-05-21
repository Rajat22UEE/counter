import Counter from "../components/Counter";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-2xl w-full flex flex-col items-center space-y-3 text-center">
        <h1 className="text-4xl font-bold text-gray-800">React Counter App</h1>

        <Counter />

        <h2 className="text-xl text-gray-700">
          Learn how to manage state and handle user interactions.
        </h2>

        <Link
          href="/tutorial"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-200"
        >
          📘 Read Tutorial
        </Link>
      </div>
    </main>
  );
}
