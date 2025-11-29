export default function Footer() {
  const footerLinks = {
    Product: ["Home", "Templates", "Changelog", "Pricing"],
    Company: ["Blog", "Careers", "About"],
    Support: ["Request a Demo", "Documentation", "Community", "Contact"],
    Socials: ["Twitter", "LinkedIn", "GitHub", "Discord"],
    Legal: ["Privacy Policy", "Acceptable Use", "Terms of Service"],
  };

  return (
    <footer className="bg-white border-t border-gray-200 px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-[#0A0A0A] mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-[#0A0A0A] transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          © Copyright 2025. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
