import router from "./router";
import store from "./store";
import { getToken } from "./plugins/auth";

router.beforeEach(async (to, from, next) => {
  const hasToken = getToken();
  if (hasToken) {
    const hasRoles =
      store.state.data.roles && store.state.data.roles.length > 0;
    if (hasRoles) {
      next();
    } else {
      try {
        await store.dispatch("getInfo");
        next({ ...to, replace: true });
      } catch (error) {
        next();
      }
    }
  } else {
    next();
  }
});
