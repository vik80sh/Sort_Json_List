import React, {Component} from 'react';
import {usersJSON} from '../data';

export default class Table extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: usersJSON
		}
	}
	componentDidMount(){
		let url = window.location.pathname.split("/");
		let checkUrl = url.length > 1 ? true:false;
		if(checkUrl)
			this.sortFunction(url[1])
	}
	componentWillReceiveProps(nextProps) {
		this.sortFunction(nextProps.sortBy)
	}
	sortFunction=(sortBy)=>{
		sortBy = sortBy.toLowerCase();
		if(sortBy==="age")
			this.compareByAge();
		else if(sortBy==="name")
			this.compareByName();
		else if(sortBy==="points")
			this.compareByPoints();
		else if(sortBy==="rank")
			this.compareByRank();

		
	}
    // complete the comparators
	compareByAge=()=> {
		let data = this.state.users.sort((a,b)=> a.age - b.age);
		this.setState({users:data})
	}

	compareByName=()=> {
		let data = this.state.users.sort((a,b)=> a.name > b.name ? 1 : -1);
		this.setState({users:data})
	}

	compareByPoints=()=> {
		let data = this.state.users.sort((a,b)=> a.points - b.points);
		this.setState({users:data})
	}

	compareByRank=()=> {
		let data = this.state.users.sort((a,b)=> a.rank - b.rank);
		this.setState({users:data})
	}

	render() {
 
		return (<div>
			<table className="table table-striped">
				<thead>
					<tr key="head">
						<th>Age</th>
						<th>Name</th>
						<th>Points</th>
						<th>Rank</th>
					</tr>
				</thead>
				<tbody>
					{this.state.users.map((data,index)=>{
						return (
							<tr key={index}>
								<td>{data.age}</td>
								<td>{data.name}</td>
								<td>{data.points}</td>
								<td>{data.rank}</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>)
	}
}
