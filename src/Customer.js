import React, { Component } from 'react'
import axios from 'axios'

class Customer extends Component {
    constructor(props) {
        super(props)
			this.state = {
				customers: [],
				message:''
			}
	}

	componentDidMount() {
		document.title = "Customer"
        this.fetchData()
    }

	fetchData = async () => {
		await axios.get("http://127.0.0.1:8055/items/customers", { 
			headers: {
				"Authorization" : `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ0ZWY1OWY1LTU3NzQtNDJkZS04MDhjLTZlZWI1YTY1YmI1MCIsInJvbGUiOiI0NzVlODBkZS03NzM3LTQ1OGUtOWZhNS0wZDU5MzUwMWM1MmYiLCJhcHBfYWNjZXNzIjp0cnVlLCJhZG1pbl9hY2Nlc3MiOnRydWUsImlhdCI6MTcwNjI5Mjc2OCwiZXhwIjoxNzA2MjkzNjY4LCJpc3MiOiJkaXJlY3R1cyJ9.jKh53SzDbqeVloY9kcgjVN8TFNMak0n1wyWCx-zk6fI`
			}
		})
		.then(res => {
			if (res.data) {
                const { data } = res.data
                this.setState({
                    customers: data,
				})
			}
		})
		.catch((error) => {
			   this.setState({
                    message: `No results found!`,
				})
        });
	}
	
	render() {
		 return (
        <>
			<div className="container">
			 {this.state.message? (<p>{this.state.message}</p>):(
				<><h1>Customer</h1>
					{this.state.customers &&  this.state.customers.map(item =><p key={item.id}>{item.id} {item.name}</p>)}</>
				)}     
			</div>
		</>	 
		)
	}
}

export default Customer