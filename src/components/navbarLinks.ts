interface NavbarLink {
    label: string;
    icon: string;
    command: () => void;
}

const navbarLinks:  NavbarLink[] = [
    {
        label: 'Home',
        icon: 'pi pi-home',
        command:()=>{ window.location.href="#"}
    },
    {
        label: 'About',
        icon: 'pi pi-info-circle',
        command:()=>{ window.location.href="#"}
    },
    {
        label: 'Projects',
        icon: 'pi pi-folder',
        command:()=>{ window.location.href="#"}
    },
    {
        label: 'Contact',
        icon: 'pi pi-envelope',
        command:()=>{ window.location.href="#"}
    }
];

export default navbarLinks;