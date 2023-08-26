import { About } from "../pages/About/About";
import { Blog } from "../pages/Blog/Blog";
import { Contact } from "../pages/Contact/Contact";
import { Experience } from "../pages/Experience/Experience";
import { Projects } from "../pages/Projects/Projects";
import { Redirect } from "../pages/Redirect/Redirect";
import { Tech } from "../pages/Tech/Tech";

const routes = [
    { path: '/', component: About, isProtected: false },
    { path: '/projects', component: Projects, isProtected: false },
    { path: '/technologies', component: Tech, isProtected: false },
    { path: '/experience', component: Experience, isProtected: false },
    { path: '/contact', component: Contact, isProtected: false },
    { path: '/blog', component: Blog, isProtected: false },
    { path: '*', component: Redirect, isProtected: false },
];

export default routes