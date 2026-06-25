export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-8 text-center">
        <p className="text-sm text-gray-600">
          © {currentYear} Gumelar Adi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
