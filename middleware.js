import { auth } from '@/auth';

import {
  authRoutes,
  apiAuthPrefix,
  apiProgramRoute,
  apiPostRoute,
  apiGaleriRoute
} from '@/routes';

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isApiProgramRoute = nextUrl.pathname.startsWith(apiProgramRoute);
  const isApiPostRoute = nextUrl.pathname.startsWith(apiPostRoute);
  const isApiGaleriRoute = nextUrl.pathname.startsWith(apiGaleriRoute);

  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute) {
    return null;
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL('/dashboard', nextUrl));
    }
    return null;
  }

  if (!isLoggedIn && !isApiProgramRoute && !isApiPostRoute && !isApiGaleriRoute) {
    return Response.redirect(new URL('/auth/login', nextUrl));
  }
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
