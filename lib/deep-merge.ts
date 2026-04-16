export function isPlainObject(
  value: unknown,
): value is Record<string, unknown> {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
}

/**
 * Deep-merge plain objects (JSON-like). Arrays and primitives from `overrides` replace entirely.
 */
export function deepMerge<T extends Record<string, unknown>>(
  base: T,
  overrides: Partial<T> | Record<string, unknown>,
): T {
  const result: Record<string, unknown> = { ...base };

  for (const key of Object.keys(overrides)) {
    const baseVal = result[key];
    const overVal = overrides[key as keyof typeof overrides] as unknown;

    if (isPlainObject(baseVal) && isPlainObject(overVal)) {
      result[key] = deepMerge(
        baseVal as Record<string, unknown>,
        overVal as Record<string, unknown>,
      );
    } else {
      result[key] = overVal;
    }
  }

  return result as T;
}
