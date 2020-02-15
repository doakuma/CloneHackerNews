import styled from 'styled-components';
import { tablet } from 'styles/mediaQueries';

export const Wrapper = styled.div`
    width:85%;
    margin: 0 auto;
    height: 100%;
    overflow: hidden;
    padding: 0 0 200px;

    ${tablet} {
        width: 96%;
    }
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.textSecondary};
    font-size: 20px;
    font-weight: 300;
    margin: 24px 0 26px;
`;