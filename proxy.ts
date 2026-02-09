import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const VALID_CITIES = ["lviv", "dnipro"] as const;

export function proxy(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // Only handle root path with ?city= param
  if (pathname !== "/") return NextResponse.next();

  const city = searchParams.get("city")?.toLowerCase().trim();
  if (city && VALID_CITIES.includes(city as (typeof VALID_CITIES)[number])) {
    const url = request.nextUrl.clone();
    url.pathname = `/${city}`;
    url.searchParams.delete("city");
    return NextResponse.redirect(url, 307);
  }

  return NextResponse.next();
}
