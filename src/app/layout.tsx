import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            {/* <body classNameName={inter.classNameName}>
        <div classNameName="slider-thumb">{children}</div>
      </body> */}
            <div className="background">
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
            </div>
            <header>
                {/* <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav> */}
                <div className="logo">
                    <span>ENG</span>
                </div>
                <div className="header-content flex flex-col justify-center items-center bg-white bg-opacity-10 rounded-3xl mx-auto max-w-5xl shadow-lg">
                    <h1>Welcome</h1>
                    <p>
                        {' '}
                        Welcome to our studio. We are a passionated group of
                        people,
                        <br />
                        making high quality products designed to make your life
                        easier.
                    </p>
                    <button>GET STARTED</button>
                </div>
            </header>
        </html>
    );
}
