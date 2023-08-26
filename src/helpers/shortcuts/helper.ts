import About from '../../assets/img/about.png';
import Projects from '../../assets/img/projects.png';
import Tech from '../../assets/img/tech.png';
import Work from '../../assets/img/work.png';
import Contact from '../../assets/img/contact.png';
import Blog from '../../assets/img/blog.png';

interface ShortcutsDto {
    icon: string
    path: string
    text: string
}


export const shortcutsLeft: ShortcutsDto[] = [
    {
        icon: About,
        path: "/",
        text: "Acerca de mí"
    },
    {
        icon: Projects,
        path: "projects",
        text: "Proyectos"
    },
    {
        icon: Tech,
        path: "technologies",
        text: "Tecnologías"
    },
];

export const shortcutsRight: ShortcutsDto[] = [
    {
        icon: Work,
        path: "experience",
        text: "Experiencia & Educación"
    },
    {
        icon: Contact,
        path: "contact",
        text: "Contacto"
    },
    {
        icon: Blog,
        path: "blog",
        text: "Blog"
    },
]