import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {
    Table,
    TableBody,
    TableHeader,
    TableFooter,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
    } from 'material-ui/Table';

class GitHub extends React.Component{
    constructor(props){
        super(props);
        this.state = {items: [], search: '', 
        toggle: true, items5: [], allItems: []};
    }

    componentDidMount(search) {
        let temp5 = [];
        if(!search){search = 'react'}
        fetch('https://api.github.com/search/repositories?q=' + search)
        .then((Response) => Response.json())
        .then((responseData) => {
            console.log(responseData);
            for (var i = 0; i < 5; i++) {
                temp5 = [...temp5, responseData.items[0]];                                
            }
            this.setState({
                // items: responseData.items,
                items5: temp5,
                allItems:  responseData.items,            
            }, this.Extend());
            this.Extend();           
        })
        .catch((err) => {
            return ( 
                <div>Time Out, Reload</div>
            );                
        })      
        console.log(this.state.items5, this.state.allItems)        
    }

   
    inputChanged = (event) => {
        items: [];
        this.setState({
            search: event.target.value,
        });        
    }

    Search = () => {
        this.componentDidMount(this.state.search); 
    }

    Extend = () => {
        this.setState((prevState) => {
            return {toggle: !(prevState.toggle)}
        }, this.EditItems())
        console.log(this.state.toggle)
    }

    EditItems = () => {        
        if(this.state.toggle){
            this.setState((prevState) => {
                return {items: this.state.allItems}
            })
        }else{
            this.setState((prevState) => {
                return {items: this.state.items5}
            })
            console.log('false')
        }
        console.log(this.state.items5, this.state.allItems, this.state.toggle, this.state.items)
    }

    render(){
        // const itemRows = this.state.items.map((item) =>
        //     <tr key={item.full_name}>
        //         <td>{item.full_name}</td>
        //         <td><a href='url'>{item.owner.repos_url}</a></td>
        //     </tr>
        // )
        return (
            <Card className="GeneralCard">
                <CardTitle title="Reposistories" subtitle="GitHub API"/>
                <TextField hintText='Search' value={this.state.search} onChange={this.inputChanged} />
                <RaisedButton onClick={this.Search} primary={true} label='Search'/>         
                <Table>
                <TableHeader displaySelectAll={false}>
                <TableRow>
                    <TableHeaderColumn>Name</TableHeaderColumn>
                    <TableHeaderColumn>URL</TableHeaderColumn>
                </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>                    
                {this.state.items.map((item, index) =>
                <TableRow key={index} >
                <TableRowColumn>{item.full_name}</TableRowColumn>
                <TableRowColumn><a href='url'>{item.owner.repos_url}</a></TableRowColumn>
                </TableRow>  
                )}
                </TableBody>
                </Table>
                <RaisedButton style={{margin: '10px'}} 
                onClick={this.Extend} primary={true} label={this.state.toggle? 'Extend': 'Close' }/>                 
            </Card>

        );
    }

}

export default GitHub;