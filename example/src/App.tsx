import React from 'react';
import DoubleElimination from './components/double-elimination';
import FiveTeams from './components/fiveTeams';
import FourTeams from './components/fourTeams';
import LoadingBracket from './components/loading';
import SingleElimination from './components/single-elimination';
import ThreeTeams from './components/threeTeams';

const App = () => {
  return (
    <div>
      <h3>Loading Skeleton</h3>
      <hr />
      <LoadingBracket />
      <h3>Single Elimination</h3>
      <hr />
      <SingleElimination />
      <h3>Double Elimination</h3>
      <hr />
      <DoubleElimination />
      <h3>Three teams</h3>
      <hr />
      <ThreeTeams />
      <h3>Four teams</h3>
      <hr />
      <FourTeams />
      <h3>Five teams</h3>
      <hr />
      <FiveTeams />
    </div>
  );
};

export default App;
