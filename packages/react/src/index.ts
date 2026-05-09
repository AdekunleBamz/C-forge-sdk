import { useEffect, useState } from "react";
import { isMiniPay } from "@bamzzstudio/cforge-wallets";

export function useMiniPayStatus(pollMs = 250, attempts = 20): boolean {
  const [detected, setDetected] = useState(false);

  useEffect(() => {
    let count = 0;
    const timer = window.setInterval(() => {
      count += 1;
      const found = isMiniPay();
      if (found) setDetected(true);
      if (found || count >= attempts) window.clearInterval(timer);
    }, pollMs);

    return () => window.clearInterval(timer);
  }, [attempts, pollMs]);

  return detected;
}
