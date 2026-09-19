/**
 * Helper to resolve asset URLs with the correct Vite base URL.
 * Ensures compatibility across local development and GitHub Pages subpaths.
 */
export function getAssetUrl(path: string): string {
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${cleanPath}`;
}
