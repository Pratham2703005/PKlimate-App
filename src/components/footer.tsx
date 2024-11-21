import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Twitter", icon: TwitterLogoIcon, href: "https://x.com/Pratham85477378" },
    { name: "Instagram", icon: InstagramLogoIcon, href: "https://www.instagram.com/pk2732004/" },
    { name: "LinkedIn", icon: LinkedInLogoIcon, href: "https://www.linkedin.com/in/pratham-israni-a6b672275/" },
    { name: "GitHub", icon: GitHubLogoIcon, href: "https://github.com/Pratham2703005" },
  ];

  return (
    <footer className="border-t backdrop-blur-sm bg-background/60 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8">

          {/* Social Links Section */}
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-center space-x-4">
                {socialLinks.map((link) => (
                <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors"
                    aria-label={`Visit our ${link.name} page`}
                >
                    
                    <link.icon className="w-6 h-6" />
                    
                </a>
                ))}
            </div>
            </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            © {currentYear} PKlimate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
