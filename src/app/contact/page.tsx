export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-6 md:py-16">
      <h1 className="text-4xl md:text-5xl font-semibold mb-4 md:mb-8">
        Contact
      </h1>

      <div className="space-y-12">
        <div>
          <p className="text-lg xl:text-xl text-gray-700 leading-relaxed mb-8">
            I'm always interested in hearing about new projects and
            opportunities. Whether you have a question or just want to say
            hello, feel free to reach out.
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl xl:text-2xl font-semibold text-black mb-2">
              Email
            </h2>
            <a
              href="mailto:setiagumelaradi@gmail.com"
              className="text-gray-600 hover:text-black text-lg xl:text-xl transition-colors"
            >
              setiagumelaradi@gmail.com
            </a>
          </div>

          <div>
            <h2 className="text-xl xl:text-2xl font-semibold text-black mb-2">
              Social
            </h2>
            <div className="space-y-2">
              <a
                href="https://www.linkedin.com/in/gumelaradisetia903/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-600 hover:text-black text-lg xl:text-xl transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/gmlradii/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-600 hover:text-black text-lg xl:text-xl transition-colors"
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
