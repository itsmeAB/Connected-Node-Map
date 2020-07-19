import React from 'react';
import NodeMap from '../../components/NodeMap';
import data from '../../utils/data.json';

const Home = (props) => {
  //   console.log(data);
  // const members = data.map(item => item.members);

  const members = data.reduce((acc, cur) => {
    const mbs = cur.members.map((mb) => ({ ...mb, id: mb.din }));
    acc = [...acc, ...mbs];
    return acc;
  }, []);

  const organizations = data.map((item) => ({
    ...item.organization,
    id: item.organization.cin,
    symbolType: 'square',
  }));

  let links = [];
  data.forEach((item) => {
    const members = item.members;
    const link = members.map((mb) => ({
      source: mb.din,
      target: item.organization.cin,
    }));
    links = [...links, ...link];
  });
  console.log(members, organizations);
  return (
    <div>
      NODE MAP
      <div>
        <NodeMap nodes={[...members, ...organizations]} links={links} />
      </div>
    </div>
  );
};

export default Home;
