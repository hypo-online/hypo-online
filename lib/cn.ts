/** Join class names; falsy values omitted. */
export function cn(...parts: (string | undefined | false)[]): string {
  return parts.filter(Boolean).join(" ");
}
