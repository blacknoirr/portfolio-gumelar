export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-semibold mb-12">Contact</h1>

      <div className="space-y-12">
        <div>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            I'm always interested in hearing about new projects and
            opportunities. Whether you have a question or just want to say
            hello, feel free to reach out.
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-sm font-semibold text-black mb-2">Email</h2>
            <a
              href="mailto:hello@gumelaradi.com"
              className="text-gray-600 hover:text-black transition-colors"
            >
              hello@gumelaradi.com
            </a>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-black mb-2">Social</h2>
            <div className="space-y-2">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-600 hover:text-black transition-colors"
              >
                Twitter
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-600 hover:text-black transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-600 hover:text-black transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
