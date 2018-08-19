import { isUrl } from '../utils/utils';

const menuData = [
  {
    name: 'dashboard',
    icon: 'dashboard',
    path: 'dashboard',
    // children: [
    //   {
    //     name: '分析页',
    //     path: 'analysis',
    //   },
      // {
      //   name: '监控页',
      //   path: 'monitor',
      // },
      // {
      //   name: '工作台',
      //   path: 'workplace',
      //   // hideInBreadcrumb: true,
      //   // hideInMenu: true,
      // },
    // ],
  },
  {
    name: 'editor',
    icon: 'edit',
    path: 'editor',
  },
  // {
  //   name: 'lock',
  //   icon: 'lock',
  //   path: 'lock',
  // },
  // {
  //   name: 'login',
  //   icon: 'login',
  //   path: 'login',
  // },
  {
    name: 'sweetalert',
    icon: 'notification',
    path: 'sweetalert',
  },
  {
    name: 'table',
    icon: 'table',
    path: 'table',
  },
  {
    name: 'ImgSwipe',
    icon: 'camera',
    path: 'imgswipe',
  },
  {
    name: 'print',
    icon: 'printer',
    path: 'print',
  },
  {
    name: 'video',
    icon: 'video',
    path: 'video',
  },
  {
    name: 'qrcode',
    icon: 'qrcode',
    path: 'qrcode',
  },
  
  // {
  //   name: '账户',
  //   icon: 'user',
  //   path: 'user',
  //   authority: 'guest',
  //   children: [
  //     {
  //       name: '登录',
  //       path: 'login',
  //     },
  //     {
  //       name: '注册',
  //       path: 'register',
  //     },
  //     {
  //       name: '注册结果',
  //       path: 'register-result',
  //     },
  //   ],
  // },
];

function formatter(data, parentPath = '/', parentAuthority) {
  return data.map(item => {
    let { path } = item;
    if (!isUrl(path)) {
      path = parentPath + item.path;
    }
    const result = {
      ...item,
      path,
      authority: item.authority || parentAuthority,
    };
    if (item.children) {
      result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
    }
    return result;
  });
}

export const getMenuData = () => formatter(menuData);
