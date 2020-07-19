import React, { useState } from 'react';
import { Graph } from 'react-d3-graph';

const NodeMap = (props) => {
  // graph payload (with minimalist structure)

  const initialData = {
    nodes: props.nodes,
    links: props.links,
  };

  console.log('checking how many times it executing');
  const [data, setData] = useState(initialData);

  // the graph configuration, you only need to pass down properties
  // that you want to override, otherwise default ones will be used
  const myConfig = {
    automaticRearrangeAfterDropNode: true,
    collapsible: false,
    directed: true,
    focusAnimationDuration: 0.75,
    focusZoom: 1,
    height: 600,
    highlightDegree: 2,
    highlightOpacity: 0.2,
    linkHighlightBehavior: true,
    maxZoom: 12,
    minZoom: 0.05,
    nodeHighlightBehavior: true,
    panAndZoom: false,
    staticGraph: false,
    staticGraphWithDragAndDrop: false,
    width: 2000,
    d3: {
      alphaTarget: 0.05,
      gravity: -1000,
      linkLength: 80,
      linkStrength: 2,
      disableLinkForce: false,
    },
    // nodeHighlightBehavior: true,
    node: {
      labelProperty: (node) => node.name,
      color: '#d3d3d3',
      fontColor: 'black',
      fontSize: 10,
      fontWeight: 'normal',
      highlightColor: 'red',
      highlightFontSize: 14,
      highlightFontWeight: 'bold',
      highlightStrokeColor: 'red',
      highlightStrokeWidth: 1.5,
      mouseCursor: 'pointer ',
      opacity: 0.9,
      renderLabel: true,
      size: 200,
      strokeColor: 'none',
      strokeWidth: 1.5,
      svg: '',
      symbolType: 'circle',
    },
    link: {
      color: 'lightgray',
      fontColor: 'black',
      fontSize: 8,
      fontWeight: 'normal',
      highlightColor: 'red',
      highlightFontSize: 8,
      highlightFontWeight: 'normal',
      labelProperty: 'label',
      mouseCursor: 'pointer',
      opacity: 1,
      renderLabel: false,
      semanticStrokeWidth: true,
      strokeWidth: 3,
      markerHeight: 6,
      markerWidth: 6,
    },
  };

  
  // graph event callbacks
  // const onClickGraph = function () {
  //   window.alert(`Clicked the graph background`);
  // };

  const onClickNode = function (nodeId) {
    console.log('nodeId---------', nodeId);
    const { nodes, links } = data;
    const nodeIndex = nodes.findIndex(
      (node) => Number(node.id) === Number(nodeId) || node.id === nodeId
    );

    // console.log('nodeIndex', nodeIndex)
    if (nodes[nodeIndex].color) {
      nodes[nodeIndex].color = '';
    } else nodes[nodeIndex].color = 'black';

    links.forEach((link) => {
      if (
        [link.source, link.target].includes(nodeId) ||
        [link.source, link.target].includes(Number(nodeId))
      ) {
        if(link.color) {
          link.color = '';
        } else link.color = 'black';
      }
    });

    setData({ nodes: nodes, links: links });
  };

  return (
    <div>
      <Graph
        id='graph-id' // id is mandatory, if no id is defined rd3g will throw an error
        data={data}
        config={myConfig}
        onClickNode={onClickNode}
      />
    </div>
  );
};

export default NodeMap;
