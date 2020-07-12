import React from 'react';
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
            <a className="nav-link">
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

]
export default class Header extends React.Component {

    state = { isOpen: false }
    toggle = () => this.setState({ isOpen: !this.state.isOpen })

    render() {
        return (
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        {NavLinkContent.map((navLink, index) => (
                            <NavItem key={index}>
                                <BsNavLink href={navLink.href} title={navLink.title} />
                            </NavItem>
                        ))}
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}