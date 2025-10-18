import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white-400 via-white-300 to-white-200">
      <h1 className="text-4xl text-gray-800 text-center pt-20">
        Welcome to the App!
      </h1>
    </div>
  );
}
