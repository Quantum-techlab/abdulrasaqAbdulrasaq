import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    // Keep soft-404s out of search results
    document.title = "Page not found — Abdulrasaq Alatare";
    let robots = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement("meta");
      robots.name = "robots";
      document.head.appendChild(robots);
    }
    const previous = robots.content;
    robots.content = "noindex, follow";
    return () => { robots!.content = previous; };
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-canvas text-ink gutter py-8 flex flex-col">
      <div className="flex items-center justify-between t-label mb-4">
        <span>AA</span><span>Error</span>
      </div>
      <hr className="rule-dashed" />
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="t-wordmark mb-6">404</h1>
        <p className="t-body mb-10">Oops! Page not found</p>
        <div className="flex flex-wrap gap-6">
          <Link to="/" className="link-u t-label">Return to Home</Link>
          <Link to="/projects" className="link-u t-label">Projects</Link>
          <Link to="/contact" className="link-u t-label">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
