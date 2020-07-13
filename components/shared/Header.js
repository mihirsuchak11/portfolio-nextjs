import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';
import Link from 'next/link'

const BsNavLink = props => {
    const { title, href } = props;
    return (
        <Link href={href} >
            <a className="nav-link port-navbar-link">
                {title}
            </a>
        </Link>
    )
}

const NavLinkContent = [
    {
        href: '/',
        title: "Home",
    },
    {
        href: '/about',
        title: "About",
    },
    {
        href: '/portfolio',
        title: "Portfolio",
    },
    {
        href: '/blogs',
        title: "Blogs",
    },
    {
        href: '/cv',
        title: "CV",
    },
];

export default function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar className="port-navbar port-default absolute" color="transparent" dark expand="md">
            <Link href="/">
                <a className="port-navbar-brand navbar-brand">Mihir Suchak</a>
            </Link>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    {NavLinkContent.map((navLink, index) => (
                        <NavItem key={index} className="port-navbar-item">
                            <BsNavLink href={navLink.href} title={navLink.title} />
                        </NavItem>
                    ))}
                </Nav>
            </Collapse>
        </Navbar>
    );
}