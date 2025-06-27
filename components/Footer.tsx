// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Zunaidi Pompa. All Rights Reserved.</p>
        <p className="text-gray-400 mt-2 text-sm">
          Managed by <a href="https://www.instagram.com/zunarvy" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Zunarvy</a>
        </p>
      </div>
    </footer>
  );
}