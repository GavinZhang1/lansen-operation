import Main from '@/components/main'
import parentView from '@/components/parent-view'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInBread: (false) 设为true后此级路由将不会出现在面包屑中，示例看QQ群路由配置
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */
var routerList = [
  // login
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  },
  // message
  {
    path: '/message',
    name: 'message',
    component: Main,
    meta: {
      hideInBread: true,
      hideInMenu: true
    },
    children: [
      {
        path: 'message_page',
        name: 'message_page',
        meta: {
          icon: 'md-notifications',
          title: '消息中心'
        },
        component: () => import('@/view/single-page/message/index.vue')
      }
    ]
  },
  // argu
  {
    path: '/argu',
    name: 'argu',
    meta: {
      hideInMenu: true
    },
    component: Main,
    children: [
      {
        path: 'params/:id',
        name: 'params',
        meta: {
          icon: 'md-flower',
          title: route => `{{ params }}-${route.params.id}`,
          notCache: true,
          beforeCloseName: 'before_close_normal'
        },
        component: () => import('@/view/argu-page/params.vue')
      },
      {
        path: 'query',
        name: 'query',
        meta: {
          icon: 'md-flower',
          title: route => `{{ query }}-${route.query.id}`,
          notCache: true
        },
        component: () => import('@/view/argu-page/query.vue')
      }
    ]
  },
  // error_401
  {
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/401.vue')
  },
  // error_500
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/500.vue')
  },
  // error_404
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/404.vue')
  },
].concat([
  // doc
  {
    path: '/doc',
    name: 'doc',
    meta: {
      icon: 'logo-buffer',
      hideInMenu: true,
      title: 'doc'
    },
    component: Main,
    children: [
      // doc-document
      {
        path: 'document',
        name: 'document',
        meta: {
          title: 'document',
          icon: 'md-arrow-dropdown-circle',
        },
        component: () => import('@/view/doc/document.vue')
      }
      // doc-document-end
      // doc-childRouter
    ]
  },
  // doc-end
  // _home
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          hideInMenu: true,
          title: '首页',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/main/main.vue')
      }
    ]
  },
  // order
  {
    path: '/order',
    name: 'order',
    meta: {
      icon: 'logo-buffer',
      title: 'order'
    },
    component: Main,
    children: [
      // order-order_manage
      {
        path: '/order_manage',
        name: 'order_manage',
        meta: {
          title: 'order_manage',
          icon: 'md-arrow-dropdown-circle'
        },
        component: () => import('@/view/order/order_manage.vue')
      },
      // order-order_manage-end
      // order-order_task
      {
        path: 'order_task',
        name: 'order_task',
        meta: {
          title: 'order_task',
          icon: 'md-arrow-dropdown-circle',
        },
        component: () => import('@/view/order/order_task.vue')
      }
      // order-order_task-end
    ]
  },
  // order-end
  // base_info
  {
    path: '/base_info',
    name: 'base_info',
    meta: {
      icon: 'logo-buffer',
      title: 'base_info'
    },
    component: Main,
    children: [
      // base_info-product_type
      {
        path: 'product_type',
        name: 'product_type',
        meta: {
          title: 'product_type',
          icon: 'md-arrow-dropdown-circle',
        },
        component: () => import('@/view/base_info/product_type.vue')
      },
      // base_info-product_type-end
      // base_info-product_type_edit
      {
        path: 'product_type_edit/:id',
        name: 'product_type_edit',
        meta: {
          title: 'product_type_edit',
          icon: 'md-arrow-dropdown-circle',
          hideInMenu: true,
        },
        component: () => import('@/view/base_info/product_type_edit.vue')
      },
      // base_info-product_type_edit-end
      // base_info-process_manage
      {
        path: '/process_manage',
        name: 'process_manage',
        meta: {
          title: 'process_manage',
          icon: 'md-arrow-dropdown-circle'
        },
        component: () => import('@/view/base_info/process_manage.vue')
      },
      // base_info-process_manage-end
      // base_info-press_methods
      {
        path: '/press_methods',
        name: 'press_methods',
        meta: {
          title: 'press_methods',
          icon: 'md-arrow-dropdown-circle'
        },
        component: () => import('@/view/base_info/press_methods.vue')
      },
      // base_info-press_methods-end
      // base_info-specifications_manage
      {
        path: '/specifications_manage',
        name: 'specifications_manage',
        meta: {
          title: 'specifications_manage',
          icon: 'md-arrow-dropdown-circle'
        },
        component: () => import('@/view/base_info/specifications_manage.vue')
      },
      // base_info-specifications_manage-end
      // base_info-material_manage
      {
        path: '/material_manage',
        name: 'material_manage',
        meta: {
          title: 'material_manage',
          icon: 'md-arrow-dropdown-circle'
        },
        component: () => import('@/view/base_info/material_manage.vue')
      },
      // base_info-material_manage-end
      // base_info-accessories_manage
      {
        path: '/accessories_manage',
        name: 'accessories_manage',
        meta: {
          title: 'accessories_manage',
          icon: 'md-arrow-dropdown-circle'
        },
        component: () => import('@/view/base_info/accessories_manage.vue')
      },
      // base_info-accessories_manage-end
      // base_info-layer_manage
      {
        path: '/layer_manage',
        name: 'layer_manage',
        meta: {
          title: 'layer_manage',
          icon: 'md-arrow-dropdown-circle'
        },
        component: () => import('@/view/base_info/layer_manage.vue')
      },
      // base_info-layer_manage-end
      // base_info-flower_manage
      {
        path: '/flower_manage',
        name: 'flower_manage',
        meta: {
          title: 'flower_manage',
          icon: 'md-arrow-dropdown-circle'
        },
        component: () => import('@/view/base_info/flower_manage.vue')
      },
      // base_info-flower_manage-end
      // base_info-childRouter
    ]
  },
  // base_info-end
  // customer
  {
    path: '/customer',
    name: 'customer',
    meta: {
      icon: 'logo-buffer',
      title: 'customer'
    },
    component: Main,
    children: [
      // customer-customer_info
      {
        path: 'customer_info',
        name: 'customer_info',
        meta: {
          title: 'customer_info',
          icon: 'md-arrow-dropdown-circle',
        },
        component: () => import('@/view/customer/customer_info.vue')
      }
      // customer-customer_info-end
      // customer-childRouter
    ]
  },
  // customer-end
  // order_rule
  {
    path: '/order_rule',
    name: 'order_rule',
    meta: {
      icon: 'logo-buffer',
      title: 'order_rule'
    },
    component: Main,
    children: [
      // order_rule-product_rule
      {
        path: 'product_rule',
        name: 'product_rule',
        meta: {
          title: 'product_rule',
          icon: 'md-arrow-dropdown-circle',
        },
        component: () => import('@/view/order_rule/product_rule.vue')
      },
      // order_rule-product_rule-end
      // order_rule-specifications_status
      {
        path: '/specifications_status',
        name: 'specifications_status',
        meta: {
          title: 'specifications_status',
          icon: 'md-arrow-dropdown-circle'
        },
        component: () => import('@/view/order_rule/specifications_status.vue')
      },
      // order_rule-specifications_status-end
      // order_rule-childRouter
    ]
  },
  // order_rule-end
  // caseManage
  {
    path: '/caseManage',
    name: 'caseManage',
    meta: {
      icon: 'logo-buffer',
      title: 'caseManage'
    },
    component: Main,
    children: [
       // caseManage-caseManage
      {
        path: 'caseManage',
        name: 'caseManage',
        meta: {
          title: 'caseManage',
          icon: 'md-arrow-dropdown-circle',
        },
        component: () => import('@/view/caseManage/caseManage.vue')
      }
      // caseManage-caseManage-end
      // caseManage-childRouter
    ]
  },
	// caseManage-end
  // insertPoint
])

export default routerList;
