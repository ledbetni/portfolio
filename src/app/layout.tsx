import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
/>;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grokking Nick",
  description: "Nicholas Ledbetter's software development portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <div className="appbar">
            <h1 className="app-title"> Grokking Nick</h1>
            <nav>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/projects">Projects</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer>
          <p>© 2024 Nicholas Ledbetter</p>
        </footer>
      </body>
    </html>
  );
}
