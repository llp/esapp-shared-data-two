import index from "@/views/index";
import group from "@/views/group";
import error from "@/views/error";

export default {
  disableAutoBack: true,
  limit: 5,
  main: 'group',
  error: 'error',

  routes: [
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/group',
      name: 'group',
      component: group
    },
    {
      path: '/error',
      name: 'error',
      component: error
    },
  ],
};
