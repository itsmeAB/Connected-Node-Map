import React from 'react';
import NodeMap from '../../components/NodeMap';
import data from '../../utils/data.json';

const Home = (props) => {
    console.log(data);
  return (
    <div>
      HOME ROUTE
      <div>
        <NodeMap />
      </div>
    </div>
  );
};

export default Home;
