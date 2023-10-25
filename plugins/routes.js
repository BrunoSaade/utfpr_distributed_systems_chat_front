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
      return next({ path: '/' }); // Redireciona para a página de login se não estiver autenticado
    }

    if (!isPrivateRoute && isAuthenticated && !isLoginRoute) {
      return next({ path: '/main/chat/' }); // Redireciona para main/chat/ se estiver autenticado e não for a página de login
    }

    const { mainContent } = window;
    if (mainContent?.scrollTo && !hash) mainContent?.scrollTo(0, 0);
    if (window.scrollTo && !hash) window.scrollTo(0, 0);
    next();
  });
}
