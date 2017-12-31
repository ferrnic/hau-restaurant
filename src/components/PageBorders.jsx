import React from 'react';
import styled, { css } from 'styled-components';

const initialBorderCss = css`
  background-color: ${p => p.theme.colors.dark};
  position: fixed;
  z-index: 10;
`;

const leftRightCss = css`
  top: 0;
  bottom: 0;
  width: 20px;
`;

const TopBottom = css`
  left: 0;
  right: 0;
  height: 20px;
`;

const BorderLeft = styled.div`
  ${initialBorderCss}
  ${leftRightCss}
  left: 0;
`;
const BorderRight = styled.div`
  ${initialBorderCss}
  ${leftRightCss}
  right: 0;
`;
const BorderTop = styled.div`
  ${initialBorderCss}
  ${TopBottom}
  top: 0;
`;
const BorderBottom = styled.div`
  ${initialBorderCss}
  ${TopBottom}
  bottom: 0;
`;

const Wrapper = styled.div`
  display: none;
  @media (min-width: ${p => p.theme.breakpoints.medium.viewMinWidth}px) {
    display: block;
  }
`;

export const PageBorders = () => (
  <Wrapper>
    <BorderLeft />
    <BorderRight />
    <BorderTop />
    <BorderBottom />
  </Wrapper>
)