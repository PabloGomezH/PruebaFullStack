import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <button className="rounded-xl border border-b-neutral-900 bg-blue-500 p-4 text-white hover:bg-amber-300">
        click me
      </button>
    </div>
  );
}
