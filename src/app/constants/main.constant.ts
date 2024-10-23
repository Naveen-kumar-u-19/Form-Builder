export class MainConstant {
  sideMenuList: SideMenu[] = [
    { menuName: 'Dashboard', link: '/dashboard', iconName: 'dashboard' },
    { menuName: 'All Forms', link: '/forms', iconName: 'folder' },
    { menuName: 'Results', link: '/results', iconName: 'dashboard' }
  ]
}
//Interface for side menu
export interface SideMenu {
  menuName: string;
  link: string;
  iconName: string;
}