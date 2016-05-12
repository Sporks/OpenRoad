import React from 'react';

class TreeView extends React.Component {
  render() {
    let nodes;
    if (Array.isArray(this.props.treeArray)) {
      nodes = this.props.treeArray.map(function(node, index) {
        //  if else so that it won't repeat a concatinated string when you hit the sub array
        if (Array.isArray(node)) {
          return <li key={index}><TreeView treeArray={node} /></li>
        }
        else {
          return <li key={index}><TreeView treeArray={node} />{node}</li>
        }
      });
    }
    return (
      <div>
        <ul> {nodes} </ul>
      </div>
    );
  }
}

export default TreeView;
