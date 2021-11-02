import {NavbarEl, LogoEl, LogoTextEl, 
    UlListEl, ListItemEl, LinkEl, AnchorEl } from './style';

function Navbar() {
    return (
        <NavbarEl>
            <div className="container">
                <LogoEl>
                    <LogoTextEl>Ultra Profile</LogoTextEl>
                </LogoEl>
                <UlListEl>
                    <ListItemEl>
                        <AnchorEl to='/'>Home</AnchorEl>
                    </ListItemEl>
                    <ListItemEl>
                        <LinkEl href="!">Work</LinkEl>
                    </ListItemEl>
                    <ListItemEl>
                        <LinkEl href="!">Portfolio</LinkEl>
                    </ListItemEl>
                    <ListItemEl>
                        <LinkEl href="!">Resume</LinkEl>
                    </ListItemEl>
                    <ListItemEl>
                        <LinkEl href="!">About</LinkEl>
                    </ListItemEl>
                    <ListItemEl>
                        <AnchorEl to='/contact'>Contact</AnchorEl>
                    </ListItemEl>
                </UlListEl>
            </div>
        </NavbarEl>
    );
}

export default Navbar;