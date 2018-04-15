import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {
    Table,
    TableBody,
    TableHeader,
    TableFooter,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
    TablePagination,
    } from 'material-ui/Table';
import DatePicker from 'material-ui/DatePicker';

class List extends React.Component{
    constructor(props){
        super(props);
        this.state = {listItems: [], date: ''}; 
    }

    componentDidMount() {
        var date = new Date();
        const strDate = date.getFullYear() + "-" +
                    ('0' + (date.getMonth()+1)).slice(-2) + "-" +
                    ('0' + date.getDate()).slice(-2);
        console.log(strDate);
        fetch('https://api.nasa.gov/neo/rest/v1/feed?start_date='+strDate+'&end_date='+strDate+'&api_key=4lIS1UyV8Dm8vxeL8aimnOMuzHAyKqj0zE4WoB1n')
        .then((Response) => Response.json())
        .then((responseData) => {
            console.log(responseData),
            this.setState({
                listItems: responseData.near_earth_objects[strDate],
                date: strDate
            });            
        });
    }

    render(){
        const itemRows = this.state.listItems.map((asteroid) =>
            <tr key={asteroid.name}>
                <td>{asteroid.name}</td>
                <td>{asteroid.close_approach_data[0].miss_distance.kilometers}</td>
            </tr>
        )
        return (
        <Card className="GeneralCard">
                <CardTitle title={" Closest asteroids today " + this.state.date} subtitle="NASA API"/>
                <Table>
                <TableHeader displaySelectAll={false}>
                <TableRow>
                    <TableHeaderColumn >Name</TableHeaderColumn>
                    <TableHeaderColumn>Min Distance</TableHeaderColumn>
                </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>                    
                {this.state.listItems.map((item, index) =>
                <TableRow key={index} >
                <TableRowColumn>{item.name}</TableRowColumn>
                <TableRowColumn>{item.close_approach_data[0].miss_distance.kilometers}</TableRowColumn>
                </TableRow>  
                )}
                </TableBody>
                </Table>                
            </Card>

        );
    }

}

export default List;