import React from 'react';
import { Bracket, Seed, SeedItem, SeedTeam, SeedTime, RoundProps, RenderSeedProps } from 'react-brackets';

const rounds: RoundProps[] = [
  {
    title: 'Round 1',
    seeds: [...new Array(9)].fill({
      id: 1,
      date: new Date().toDateString(),
      teams: [
        { id: 1, name: 'The Leons', score: 2 },
        { id: 2, name: 'The frogs', score: 4 },
        { id: 3, name: 'Kitties', score: 6 },
      ],
    }),
  },
  {
    title: 'Round 2',
    seeds: [...new Array(3)].fill({
      id: 1,
      date: new Date().toDateString(),
      teams: [
        { id: 1, name: 'The Leons', score: 2 },
        { id: 2, name: 'The frogs', score: 4 },
        { id: 3, name: 'Kitties', score: 6 },
      ],
    }),
  },
  {
    title: 'Round 3',
    seeds: [...new Array(1)].fill({
      id: 1,
      date: new Date().toDateString(),
      teams: [
        { id: 1, name: 'The Leons', score: 2 },
        { id: 2, name: 'The frogs', score: 4 },
        { id: 3, name: 'Kitties', score: 6 },
      ],
    }),
  },
];

const RenderSeed = ({ breakpoint, seed, matchesInRound }: RenderSeedProps) => {
  return (
    <Seed mobileBreakpoint={breakpoint} noOfTeams={3} matchesInRound={matchesInRound}>
      <SeedItem style={{ width: '100%' }}>
        <div>
          {/* @ts-ignore */}
          {seed.teams.map((team) => {
            return (
              <>
                <SeedTeam>{team.name || '-----------'}</SeedTeam>
                <div style={{ height: 1, backgroundColor: '#707070' }}></div>
              </>
            );
          })}
        </div>
      </SeedItem>
      <SeedTime mobileBreakpoint={breakpoint} style={{ fontSize: 9 }}>
        {seed.date}
      </SeedTime>
    </Seed>
  );
};

const ThreeTeams = () => {
  return (
    <Bracket
      mobileBreakpoint={767}
      rounds={rounds}
      renderSeedComponent={RenderSeed}
      swipeableProps={{ enableMouseEvents: true, animateHeight: true }}
    />
  );
};

export default ThreeTeams;
