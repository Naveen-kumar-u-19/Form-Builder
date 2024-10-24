export class MainConstant {
  sideMenuList: SideMenu[] = [
    { menuName: 'Dashboard', link: '/app/dashboard', iconName: 'dashboard' },
    { menuName: 'All Forms', link: '/app/forms', iconName: 'folder' },
    { menuName: 'Results', link: '/app/results', iconName: 'dashboard' },
    { menuName: 'folder', link: '/app/folder', iconName: 'folder'}
  ]
}
//Interface for side menu
export interface SideMenu {
  menuName: string;
  link: string;
  iconName: string;
}