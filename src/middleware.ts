// eslint-disable-next-line import/no-extraneous-dependencies, no-restricted-exports
export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico).*)'],
};
