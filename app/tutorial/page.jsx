export default function TutorialPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-3xl p-10 space-y-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-700">
          🧠 Managing State & User Interactions in React
        </h1>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800">🎯 Objective</h2>
          <p className="mt-2 text-gray-700 text-lg">
            Learn how to manage component state and handle user interactions in React using the
            <code className="bg-gray-100 text-blue-600 px-1 py-0.5 rounded mx-1">useState</code>
            hook and event handling.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800">📚 Topics Covered</h2>
          <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700 text-lg">
            <li>
              <strong>useState:</strong> for managing state inside components
            </li>
            <li>
              <strong>Handling events:</strong> like
              <code className="bg-gray-100 text-blue-600 px-1 py-0.5 rounded mx-1">onClick</code> and
              <code className="bg-gray-100 text-blue-600 px-1 py-0.5 rounded mx-1">onChange</code>
            </li>
            <li>
              <strong>Updating state:</strong> in response to user input
            </li>
          </ul>
        </section>

        <section>
  <h2 className="text-2xl font-semibold text-gray-800">🧩 Example Code</h2>
  <pre className="bg-gray-900 text-green-200 rounded-xl p-5 overflow-x-auto text-sm leading-relaxed">
{`import { useState } from "react";

export default function CounterExample() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}`}
  </pre>
</section>


        <section>
          <h2 className="text-2xl font-semibold text-gray-800">💡 Try It Yourself</h2>
          <p className="mt-2 text-gray-700 text-lg">
            Use <code className="bg-gray-100 text-blue-600 px-1 py-0.5 rounded">useState</code> to
            track user input and update the UI as they type. This is the foundation of interactive UIs in React.
          </p>
        </section>
      </div>
    </main>
  );
}
