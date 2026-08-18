export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}

export function isPlaceholder(value: string): boolean {
  return /\[[A-Z0-9 /.,&–—-]+\]/i.test(value);
}

export function emailHref(email: string): string | undefined {
  if (isPlaceholder(email) || !email.includes("@")) return undefined;
  return `mailto:${email}`;
}

export function phoneHref(phone: string): string | undefined {
  if (!phone || isPlaceholder(phone)) return undefined;
  const digits = phone.replace(/[^\d+]/g, "");
  const numeric = digits.replace(/\D/g, "");
  if (numeric.length < 8) return undefined;
  if (numeric.length === 10 && numeric.startsWith("04")) {
    return `tel:+61${numeric.slice(1)}`;
  }
  return `tel:${digits.startsWith("+") ? digits : numeric}`;
}

export function externalHref(url: string): string | undefined {
  if (!url || isPlaceholder(url) || !/^https?:\/\//i.test(url)) return undefined;
  return url;
}
