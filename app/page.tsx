export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-4xl sm:text-6xl font-bold text-center">
        Welcome to <span className="text-blue-600">Next.js 14</span> with{" "}
        <span className="text-green-600">Tailwind CSS</span>!
      </h1>
      <p className="text-lg sm:text-2xl text-center max-w-2xl">
        This is a starter template to help you get up and running quickly with
        Next.js 14 and Tailwind CSS. Start building your amazing application
        today!
      </p>
      <footer className="text-sm text-gray-500">
        &copy; 2024 Your Company. All rights reserved.
      </footer>
    </div>
  );
}
