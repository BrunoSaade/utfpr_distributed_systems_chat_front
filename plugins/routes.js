export default ({ app, store }) => {
  app.router.beforeEach((to, from, next) => {
    const isAuthenticated = !!window.localStorage.getItem('token');
    const isPrivateRoute = to.path.startsWith('/main');
    const isLoginRoute = to.path === '/';
    const { path, hash } = to;

    if (!path.endsWith('/')) {
      return next({ path: path + '/' });
    }

    if (isPrivateRoute && !isAuthenticated) {
      return next({ path: '/' });
    }

    if (!isPrivateRoute && isAuthenticated) {
      return next({ path: '/main/chat/' });
    }

    const { mainContent } = window;
    if (mainContent?.scrollTo && !hash) mainContent?.scrollTo(0, 0);
    if (window.scrollTo && !hash) window.scrollTo(0, 0);
    next();
  });
}
