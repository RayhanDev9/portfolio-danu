import { useEffect, Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageLoader from "../components/common/PageLoader";
import { ROUTE_SEO_CONFIGS, DEFAULT_SEO, SEO_BASE_URL } from "../constants/seo";
import { getAssetUrl } from "../utils/asset";

function setMetaTag(
  selector: string,
  attribute: string,
  value: string,
  createTag: () => HTMLElement
) {
  let element = document.querySelector(selector);
  if (!element) {
    element = createTag();
    document.head.appendChild(element);
  }
  element.setAttribute(attribute, value);
}

export default function RootLayout() {
  const { pathname } = useLocation();

  // 1. Dynamic SEO, Title, Meta Tags & Scroll to Top saat rute berganti
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    const seo = ROUTE_SEO_CONFIGS[pathname] || DEFAULT_SEO;
    const fullCanonical = `${SEO_BASE_URL}${seo.canonicalPath === "/" ? "" : seo.canonicalPath}/`;

    // Title
    document.title = seo.title;

    // Meta Description & Keywords
    setMetaTag('meta[name="description"]', "content", seo.description, () => {
      const meta = document.createElement("meta");
      meta.name = "description";
      return meta;
    });

    setMetaTag('meta[name="keywords"]', "content", seo.keywords, () => {
      const meta = document.createElement("meta");
      meta.name = "keywords";
      return meta;
    });

    // Canonical Link
    setMetaTag('link[rel="canonical"]', "href", fullCanonical, () => {
      const link = document.createElement("link");
      link.rel = "canonical";
      return link;
    });

    // Open Graph
    setMetaTag('meta[property="og:title"]', "content", seo.title, () => {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:title");
      return meta;
    });

    setMetaTag('meta[property="og:description"]', "content", seo.description, () => {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:description");
      return meta;
    });

    setMetaTag('meta[property="og:url"]', "content", fullCanonical, () => {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:url");
      return meta;
    });

    if (seo.ogType) {
      setMetaTag('meta[property="og:type"]', "content", seo.ogType, () => {
        const meta = document.createElement("meta");
        meta.setAttribute("property", "og:type");
        return meta;
      });
    }

    // Twitter
    setMetaTag('meta[name="twitter:title"]', "content", seo.title, () => {
      const meta = document.createElement("meta");
      meta.name = "twitter:title";
      return meta;
    });

    setMetaTag('meta[name="twitter:description"]', "content", seo.description, () => {
      const meta = document.createElement("meta");
      meta.name = "twitter:description";
      return meta;
    });

    setMetaTag('meta[name="twitter:url"]', "content", fullCanonical, () => {
      const meta = document.createElement("meta");
      meta.name = "twitter:url";
      return meta;
    });
  }, [pathname]);

  // 2. Set Favicon dynamically
  useEffect(() => {
    const faviconUrl = getAssetUrl("favicon-48x48.png");
    let link: HTMLLinkElement | null =
      document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.type = "image/png";
    link.href = faviconUrl;
  }, []);

  return (
    <>
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
}
