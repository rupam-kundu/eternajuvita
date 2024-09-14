import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/logo.png';

export default function Header() {
    return (
        <header>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center items-center">
                    <div>
                        <Link href="/">
                            <Image src={logo} alt="Logo" width={300} height={300} />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
