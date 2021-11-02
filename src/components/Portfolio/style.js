import styled from 'styled-components';

export const PortfolioEl = styled.div`
    background: #f8f8f8;
    padding-top: 20px; 
    overflow: hidden;
`;

export const TitleEl = styled.h2`
    text-align: center;
    font-size: 35px
`;

export const SpanEl = styled.span`
    font-weight: normal
`;

export const PortfolioListEl = styled.ul`
    list-style: none;
    text-align: center;
    margin: 20px 0
`;

export const PortfolioItemEl = styled.li`
    display: inline-block;
    width: 100px;
    padding: 10px;
    background: ${props => props.active ? '#eb5424' : null};
    color: ${props => props.active ? '#fff' : null};
`;

export const BoxEl = styled.div`
    width: 25%;
    float: left;
    font-size: 0;
    position: relative;
    &:hover > div {
        opacity: 1
    }
`;

export const ImgEl = styled.img`
    width: 100%
`;

export const OverlayEl = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(235,84,36 , 0.5);
    font-size: 15px;
    opacity: 0;
    white-space: nowrap;
`;

export const OverlaySpanEl = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #fff;
    display: block;
    padding: 10px 20px;
    cursor: pointer;
    border: 2px solid #eb5424;
`;