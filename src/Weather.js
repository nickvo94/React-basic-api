import React from 'react';
import ReactDOM from 'react-dom';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import './index.css';

class Weather extends React.Component{
    constructor(props){
        super(props);
        this.state = {temp: '', weather: '', icon: ''}; 
    }

    componentDidMount() {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=Helsinki&APPID=f7ba8cb466401b68f78e41e54b7be85d')
        .then((Response) => Response.json())
        .then((responseData) => {
            console.log(responseData),
            this.setState({
                temp: responseData.main.temp,
                weather: responseData.weather[0].description,
                icon: responseData.weather[0].icon
            });            
        });
    }

    render(){
        var degreeC = parseInt(Number(this.state.temp) - 273.14);
        var iconUrl = 'https://openweathermap.org/img/w/'+ this.state.icon +'.png';
        return (
            <Card className="GeneralCard">
            <CardTitle title="Weather Helsinki" subtitle="Open Weather Map API"/>
            <CardMedia style={{width:'30%', margin: 'auto' }}>
            <img src={iconUrl} />
            </CardMedia>
            <CardTitle title="Temperature:">{degreeC} Celcius</CardTitle>
            <CardText>Weather: {this.state.weather}</CardText>                               
            </Card>

        );
    }

}

export default Weather;