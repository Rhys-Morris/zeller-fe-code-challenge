export function titleCase(s: string) {
  return !!s.length ? `${s[0].toUpperCase()}${s.slice(1).toLowerCase()}` : "";
}
