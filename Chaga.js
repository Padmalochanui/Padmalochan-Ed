import React, { Component } from 'react'

export default class Chaga extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: [],
            isLoaded: false,
        }
    }
    componentDidMount() {
        fetch('https://assessment-edvora.herokuapp.com/')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            });
    }
    render() {

        var { isLoaded, items } = this.state;

        if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div>
                    {items.map(item => (
                        <div key={item.address.city}>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col'>
                                        <table className='box'>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <img src={item.image} alt={item.product_name} width="200px"  />
                                                    </td>
                                                    <td>
                                                        <h5>{item.product_name}</h5>
                                                        <h5>{item.brand_name}</h5>
                                                        <h5><span>$</span>{item.price}</h5>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>City:{item.address.city}</td>
                                                    <td>Date:{item.date}</td>
                                                </tr>
                                                <td colSpan="2">About:{item.discription}</td>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            );
        }

    }
}
