import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Next.js Dashboard</title>
      </head>
      <body>
        <Navbar />
        <Sidebar />
        <main style={{ marginLeft: '260px', padding: '20px' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
