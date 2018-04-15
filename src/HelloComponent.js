import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter'
import Networking from './Networking'
import Weather from './Weather'
import List from './List'
import GitHub from './GitHub'
import { Grid, Row, Col } from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';

class HelloComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {firstname: '', name: ''};
    }

    inputChanged = (event) => {
        this.setState({firstname: event.target.value})
    }

    componentDidMount() {
        this.setState({name: 'React'})
    }

    render() {        
        return (
            <Grid>
                <Row className="App-header">
                <Col className="App" >
                    <h2>Welcome To {this.state.name}</h2>
                    <p>Hello {this.state.firstname}</p>
                    <input type='text' value={this.state.firstname} onChange={this.inputChanged} />
                </Col>       
                </Row>
                <Row>                            
                    <Col xs={8}>
                        <Networking/>
                        <GitHub/>                    
                    </Col>
                    <Col xs={4}>
                    <Weather/>
                    <List/>
                    </Col>
                    {/* <Col xs={8}><GitHub/></Col>                    
                    <Col xs={4}><List/></Col> */}
                </Row>              
            </Grid>    

        );        
    }
}

export default HelloComponent;
    