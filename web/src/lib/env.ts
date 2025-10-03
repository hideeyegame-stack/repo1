export const ESEWA_QR_URL: string = process.env.ESEWA_QR_URL || "/qr-placeholder.svg";

export const ADMIN_EMAILS: string[] = (process.env.ADMIN_EMAILS || "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);
