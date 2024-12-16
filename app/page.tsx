import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Link href="/products">View products</Link>
      <h1 className="text-4xl p-11">This is my home page</h1>
      <Link href="/users">USERS</Link>
    </>
  );
}
