function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Me</h2>
          <p className="mb-4">
          I am a passionate B.Tech student at Newton School of Technology, driven by an endless curiosity for technology and software development. Through my journey, I&apos;ve discovered the joy of crafting innovative web applications that solve real-world problems. My commitment to continuous learning and growth in technology is matched only by my enthusiasm for creating elegant digital solutions.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/shivam-mittal-464a9031a"
                className="hover:text-white transition-colors duration-300"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                href="mailto:Shivammittal42006@gmail.com"
                className="hover:text-white transition-colors duration-300"
              >
                Gmail
              </a>
            </li>
            <li>
              <a
                href="https://github.com/shiavm006"
                className="hover:text-white transition-colors duration-300"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Me</h2>
          <div className="flex space-x-4">
            <a
              href="www.linkedin.com/in/shivam-mittal-464a9031a"
              className="hover:text-white transition-colors duration-300"
            >
              Linkedin
            </a>
            <a
              href="www.linkedin.com/in/shivam-mittal-464a9031a"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
            <a
              href="https://github.com/shiavm006"
              className="hover:text-white transition-colors duration-300"
            >
              Github
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Me</h2>
          <p>Delhi NCR , India</p>
          <p>Gurgaon 122001</p>
          <p>Email: Shivammittal42006@gmail.com</p>
          <p>Phone: +91 9810571604</p>
        </div>
      </div>
      <p className="text-center text-lg pt-8 font-semibold text-white">
        Shivam Mittal
      </p>
    </footer>
  );
}

export default Footer;
