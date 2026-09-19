import { useEffect } from "react";

/**
 * Hook to lock body scroll when a modal or mobile drawer is open.
 */
export function useScrollLock(lock: boolean): void {
  useEffect(() => {
    if (lock) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [lock]);
}
