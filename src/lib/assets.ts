/** Resolve a path in /public so it works on the root or under a sub-path deployment. */
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
