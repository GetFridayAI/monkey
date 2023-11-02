export class MenuSection {
    title!: string;
    menuItems!: Array<MenuItem>;
}

export class MenuItem {
    title!: string;
    hasIcon!: boolean;
    icon?: string;
    isActive!: boolean;
    link!: string;
}