/**
 * Utility for lightweight event tracking & analytics (Google Analytics 4 / Custom).
 * Safely handles environments where GA is loaded or not loaded (no-op).
 */

declare global {
  interface Window {
    gtag?: (
      command: "event" | "config" | "js" | "set",
      actionOrTarget: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

/**
 * Send custom event to Google Analytics 4 if available
 */
export function trackEvent(
  eventName: string,
  params?: Record<string, unknown>
): void {
  try {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", eventName, params);
    }
  } catch {
    // Fail silently in development or when blocked by adblockers
  }
}

/**
 * Track WhatsApp click conversion
 */
export function trackWhatsAppClick(source: string = "contact_page"): void {
  trackEvent("whatsapp_click", {
    event_category: "Conversion",
    event_label: source,
  });
}

/**
 * Track Email click or copy conversion
 */
export function trackEmailClick(
  action: "click" | "copy",
  source: string = "contact_page"
): void {
  trackEvent("email_interaction", {
    event_category: "Conversion",
    event_action: action,
    event_label: source,
  });
}

/**
 * Track outbound social media navigation
 */
export function trackSocialClick(platform: string, url: string): void {
  trackEvent("social_media_click", {
    event_category: "Engagement",
    platform_name: platform,
    destination_url: url,
  });
}

/**
 * Track case study / project view
 */
export function trackProjectView(projectName: string): void {
  trackEvent("project_view", {
    event_category: "Portfolio",
    project_name: projectName,
  });
}
