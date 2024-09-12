import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-success  text-white h-screen flex flex-col justify-center items-center">
      <h2 className="text-3xl">
        <Link href="/" className="hover:ml-2">
          &rarr;
        </Link>{" "}
        <span>404 | </span> صفحة غير متوفرة
      </h2>
    </div>
  );
}
