import { NextResponse } from "next/server";

// const user = true;

export const middleware = (req) => {
    console.log(req.cookies.get('token'));

  let coo = "next-supper-hero";

  let cookies = req.cookies.get("token");
  if (!cookies || cookies.value !== coo) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  return NextResponse.next();
};

export const config = {
  matcher: ["/dashboard", "/services"],
};
