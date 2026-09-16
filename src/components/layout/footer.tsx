import { GithubIcon, LinkedinIcon } from "@/components/icons/social-icons";
import { Logo } from "@/components/logo";
import { siteConfig } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border-subtle bg-background-alt">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 py-14 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5 font-mono text-sm font-medium text-foreground">
              <Logo />
              {siteConfig.name}
            </div>
            <p className="max-w-xs text-sm text-muted">{siteConfig.role}</p>
          </div>

          <div className="flex flex-wrap gap-x-10 gap-y-6 sm:gap-x-16">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Navigate</span>
              <nav className="flex flex-col gap-2">
                {siteConfig.footerNav.map((item) => (
                  <a key={item.href} href={item.href} className="text-sm text-muted transition-colors hover:text-foreground">
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Connect</span>
              <div className="flex flex-col gap-2">
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
                >
                  <LinkedinIcon className="h-4 w-4" /> LinkedIn
                </a>
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
                >
                  <GithubIcon className="h-4 w-4" /> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-border-subtle pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>Designed &amp; engineered with curiosity.</span>
          <span>
            © {year} {siteConfig.name}
          </span>
        </div>
      </div>
    </footer>
  );
}
