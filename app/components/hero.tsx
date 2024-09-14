import Link from 'next/link';

export default function Hero() {
    return (
        <div>
            <div className="max-w-7xl mx-auto mt-10 mb-28 px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-12">
                    Bridging the Gap Between Innovation and Commercialization in Biomedicine
                </h1>
                <p className="mb-16 text-2xl text-gray-600 font-semibold">
                    We facilitate the transfer of cutting-edge technologies from universities and research institutions to market-ready solutions.
                </p>
                <Link
                    href="#contact"
                    className="p-4 bg-indigo-900 text-2xl text-white rounded-md mt-10"
                >
                    Contact Us
                </Link>
            </div>
        </div>
    );
}
