import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const NavbarEl = styled.div`
    padding: 20px 0;
    overflow: hidden;
    background: #fff;
    position: relative;
    border-bottom: 1px solid #000;
`;

export const LogoEl = styled.div`
    width: 40%;
    float: left;
    @media (max-width : 991px) {
        width: 100%;
        float: none;
    }
`;

export const LogoTextEl = styled.h2`
    font-size: 30px;
    font-weight: bold
`;

export const UlListEl = styled.ul`
    width: 60%;
    float: left;
    list-style: none;
    @media (max-width : 991px) {
        width: 100%;
        float:  none;
        margin-top: 20px;
        display: none
    }
`;

export const ListItemEl = styled.li`
    display: inline-block;
    @media (max-width : 991px) {
        display: block;
        text-align: center;
    }
`;

export const LinkEl = styled.a`
    display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;
    &:hover {
        color: #eb5424
    }
`;

export const AnchorEl = styled(Link)`
    display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;
    &:hover {
        color: #eb5424
    }
`;