import { auth } from '@/auth';

const apiProgramRoute = '/api/program';
const apiBeritaRoute = '/api/berita';
const apiGaleriRoute = '/api/galeri';


export const authRoutes = ['/auth/login'];

export const apiAuthPrefix = '/api/auth';


export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isApiProgramRoute = nextUrl.pathname.startsWith(apiProgramRoute);
  const isApiBeritaRoute = nextUrl.pathname.startsWith(apiBeritaRoute);
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

  if (!isLoggedIn && !isApiProgramRoute && !isApiBeritaRoute && !isApiGaleriRoute) {
    return Response.redirect(new URL('/auth/login', nextUrl));
  }
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
