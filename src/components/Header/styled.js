import styled from 'styled-components';

export const HeaderGridChild = styled.div`
  grid-area: header;
  padding: 0.5rem;
  text-align: center;
  display: inline-flex;
  position: relative
`;

export const Marquee = styled.span`
  font-size: calc(1.5vw + 20px);
  font-weight: bolder;
  color: #2E2E2E;
  position: relative;
  position: absolute
  left: 50%
  transform: translateX(-50%);
`;

export const LeftSeparator = styled.span`
  border-left: 3px solid hsl(190deg 70% 49%);
  padding-left: 0.8rem;
`;
