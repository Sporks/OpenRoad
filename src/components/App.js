import React from 'react';
import Tree from './treeView';

class MainView extends React.Component {
  constructor(props) {
    super(props);
    //  Test array, you can include whatever you want
    this.state = { tree: ['A', 'B', ['C', [4, 'S']], 6] };
  }

	render() {
		return (
			<div>
				<Tree treeArray={this.state.tree} />
			</div>
		);
	}
}

export default MainView;
