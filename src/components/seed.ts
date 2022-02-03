import styled from 'styled-components';

export interface SeedProps {
  mobileBreakpoint?: number;
  noOfTeams?: number;
  matchesInRound?: number;
}
export interface SeedTimeProps {
  mobileBreakpoint?: number;
}

export const SeedItem = styled.div`
  color: #fff;
  width: 100%;
  background-color: #1a1d2e;
  padding: 0;
  border-radius: 0.2em;
  box-shadow: 0 1px 4px -1px #111630;
  text-align: center;
  position: relative;
`;

export const SeedTeam = styled.div`
  padding: 0.3rem 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.2em;
  align-items: center;
`;

export const SeedTime = styled.div<SeedTimeProps>(
  (props) => `
margin-top: 1px;
font-size: 11px;
color: #8f8f8f;
height: 0;
@media (max-width: ${props.mobileBreakpoint}px) {
  height:auto;
}
`
);

/*
 * Difference between "SingleLineSeed" and "Seed" is that single line seed
 * will directly connect to the next node, it's good for double elimination losing brackets.
 *
 * The best behavior in such case is, to check if the next round seeds matches the current round seeds
 */

export const SingleLineSeed = styled.div<SeedProps>(
  (props) => `
padding: 1em 1.5em;
min-width: 225px;
width:100%;
position: relative;
display: flex;
align-items: center;
flex: 0 1 auto;
flex-direction: column;
justify-content: center;
font-size: 14px;
@media (max-width: ${props.mobileBreakpoint}px) {
  width:100%;
}
@media (min-width: ${(props.mobileBreakpoint || 0) + 1}px) {
  &::after {
      content: "";
      position: absolute;
      height: 50%;
      width: 3em;
    [dir="rtl"] & {
      left: -1.5em;
    }
    [dir="ltr"] & {
      right: -1.5em;
    }
  }
  &:nth-child(even)::after {
    border-bottom: 1px solid #707070;
    top: -1px;
  }
  &:nth-child(odd)::after {
    border-top: 1px solid #707070;
    top: calc(50% - 0.5px);
  }
}
`
);

const iterateOverChilds = (noOfTeams: number, matchesInRound: number) => {
  let str = '';
  if (matchesInRound < 2) {
    return '';
  }

  str += `
    &:nth-child(${noOfTeams}n+1):not(:last-child)::after {
      border-top: 1px solid #707070;
      top: calc(50% - 0.5px);
      border-right: 1px solid #707070;
      height: 50%;
    } 
  `;

  for (let i = 2; i < noOfTeams; i++) {
    if (i >= matchesInRound) {
      break;
    }
    str += `
      &:nth-child(${noOfTeams}n+${i}):not(:last-child)::after {
        top: calc(0% - 0.5px);
        border-right: 1px solid #707070;
        height: 100%;
      }
      &:nth-child(${noOfTeams}n+${i}):not(:last-child)::before {
        content: '';
        position: absolute;
        width: 100%;
        top: calc(50% - 0.5px);
        right: 0;
        border-top: 1px solid #707070;
        height: 100%;
      }
    `;
  }

  if (noOfTeams > matchesInRound && matchesInRound > 1) {
    str += `
      &:last-child::after {
        border-bottom: 1px solid #707070;
        bottom: calc(50% - 1.5px);
        width: 100%;
        height: 100%;
      }
  `;
  } else {
    str += `
    &:nth-child(${noOfTeams}n)::after {
      border-bottom: 1px solid #707070;
      top: -0.5px;
      height: 50%;
      width: 100%;
      [dir="rtl"] & {
        border-left: 1px solid #707070;
      }
      [dir="ltr"] & {
        border-right: 1px solid #707070;
      }
      }
    `;
  }

  return str;
};

export const Seed = styled.div<SeedProps>(
  (props) => `
  padding: 1em 1.5em;
  min-width: 225px;
  width:100%;
  position: relative;
  display: flex;
  align-items: center;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  font-size: 14px;
  @media (max-width: ${props.mobileBreakpoint}px) {
    width:100%;
  }
  @media (min-width: ${(props.mobileBreakpoint || 0) + 1}px) {
    &::after {
      content: "";
      position: absolute;
      height: 50%;
      width: 100%;
      z-index: -1;

      [dir="rtl"] & {
        left: 0px;
      }
      [dir="ltr"] & {
        right: 0px;
      }

      ${
        (props.matchesInRound || 1) < 2
          ? `
        bottom: calc(50% - 1.5px);
        width: 50%;
        border-bottom: 1px solid #707070;
        left: 0px;
        `
          : ``
      }
    }

    ${iterateOverChilds(props.noOfTeams || 2, props.matchesInRound || 2)}
}
`
);
