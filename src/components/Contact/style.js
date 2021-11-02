import styled from 'styled-components';

export const DropEl = styled.div`
    height: calc(100vh - (79px + 38px));
    padding: 50px 0;
    text-align: center
`;

export const DropTilteEL = styled.h2`
    font-size: 60px;
    margin-bottom: 30px
`;

export const DropTilteSpanEL = styled.span`
    font-weight: normal
`;

export const DropFormEl = styled.form`
    width: 70%;
    margin: auto;
`;

export const AllInputsEl = styled.input`
    box-sizing: border-box;
    outline: 0;
    padding: 5px;
    margin-bottom: 10px
`;

export const InputBoxEl = styled.div`
    overflow: hidden
`;

export const FirstTextInput = styled(AllInputsEl)`
    width: 49%;
    margin-right: 1%;
`;

export const SecondTextInput = styled(FirstTextInput, AllInputsEl)`
    float: left;
    width: 100%;
`;

export const EmailInput = styled(AllInputsEl)`
    width: 50%;
    float: right
`;

export const TextareaEl = styled.textarea`
    width: 100%;
    outline: 0;
    background: #ccc;
    margin-bottom: 7px;
`;

export const SubmitInput = styled(AllInputsEl)`
    width: 60%;
    background: #fff;
    border: 1px solid #ccc;
    color: #888;
    cursor: pointer;
`;