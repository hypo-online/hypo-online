import type { A1Type } from "./types";

/** Any refinance-style product (rate/payment reduction or top-up variants). */
export function isRefinanceLike(a?: A1Type): boolean {
  return (
    a === "refinance" ||
    a === "refinance-topup-purpose" ||
    a === "refinance-topup-nonpurpose"
  );
}
