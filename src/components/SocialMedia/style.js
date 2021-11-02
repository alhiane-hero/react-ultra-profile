import styled from 'styled-components';

export const SocialMediaEl = styled.div`
    height: auto;
    overflow: hidden
`;

export const SocialEl = styled.div`
    width: 33.33%;
    float: left;
    box-sizing: border-box;
    padding: 100px 0 100px 60px;
    background: ${
        props => {
            if (props.id === 1) return '#3b5998'
            else if (props.id === 2) return '#498cbf'
            else return '#cc2127'
        }
    }
`;

export const IconEl = styled.i`
    width: 50px;
    height: 50px;
    background: #fff;
    text-align: center;
    line-height: 50px;
    color: #888;
    float: left;
    margin-right: 10px
`;

export const ParentEl = styled.p`
    font-weight: bold;
    text-transform: uppercase;
    font-size: 20px;
    color: #fff
`;

export const ParentSpan = styled.span`
    display: block;
    margin-bottom: 8px
`;

export const ParentSpanInfo1 = styled(ParentSpan)`
    font-weight: normal
`;