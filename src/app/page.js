// import '../styles/globals.css';


import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="font-sans text-center">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4 bg-white shadow">
      <Image src="/images/Union.png" alt="Child holding aid package" width={20} height={150} className="" />
        <h1 className="text-2xl font-bold text-gray-800">Aid Tracker</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="#" className="text-gray-700 hover:text-blue-600">Home</Link></li>
            <li><Link href="#" className="text-gray-700 hover:text-blue-600">How it Works</Link></li>
            <li><Link href="#" className="text-gray-700 hover:text-blue-600">Features</Link></li>
            <li><Link href="#" className="text-gray-700 hover:text-blue-600">Beneficiaries</Link></li>
            <li><Link href="#" className="text-gray-700 hover:text-blue-600">Donors</Link></li>
            <li><Link href="#" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Contact Us</Link></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="mt-8">
        <div className="flex justify-center space-x-4">
          <div className="w-36 h-36">
            <Image src="/images/image (1).png" alt="Child holding aid package" width={150} height={150} className="" />
          </div>
          <div className="w-96 h-90">
            <Image src="/images/image.png" alt="Child in a stroller" width={500} height={300} className="rounded-lg object-cover" />
          </div>
          <div className="w-36 h-36">
            <Image src="/images/image (11).png" alt="Child receiving aid" width={150} height={150} className="rounded-lg object-cover" />
          </div>
        </div>

        <h2 className="mt-8 text-3xl font-semibold text-gray-800">
          Ensuring <span className="text-blue-600">Transparency</span> and <span className="text-blue-600">Efficient</span> Aid Distribution in Nigeria
        </h2>
        <p className="mt-4 text-lg text-gray-600">Ensuring that aid reaches those who need it the most with blockchain</p>

        <div className="mt-6 flex justify-center space-x-4">
          <Link href="#" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Get Started</Link>
          <Link href="#" className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-600 hover:text-white">Learn More</Link>
        </div>
      </main>
    </div>
  );
}
