import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'Group Population',
  },
  locale: {
    default: 'en-US',
    baseSeparator: '-',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
    {
      name: 'Single Variable',
      path: '/singlevariable',
      component: './SingleVariable',
    },
    {
      name: 'Double Variables',
      path: '/doublevariable',
      component: './DoubleVariable',
    },
    {
      name: 'Multiple Variables',
      path: '/threevariable',
      component: './ThreeVariable',
    },
  ],
  npmClient: 'yarn',
});
