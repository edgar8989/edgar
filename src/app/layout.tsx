import './globals.css';

export const metadata = {
  title: 'Edgar Nadhif | Portfolio',
  description: 'Personal portfolio of Edgar Nadhif – Programmer & IT Student at UNNES',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Orbitron:wght@600&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
