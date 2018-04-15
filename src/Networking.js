import React from 'react';
import ReactDOM from 'react-dom';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import './index.css';


function ShowMedia(props) {
    console.log('showmedia', props);
    if(props.media.media_type == 'image') {
        return(
            <div>
                <img style={{width:'80%', margin: 'auto', marginBottom: '60px' }} src={props.media.mediaUrl}/>
            </div>            
        );
    }else{
        return(
            <div>
                <iframe style={{width:'80%', margin: 'auto',marginBottom: '60px' }} width="420" height="315"
                src={props.media.mediaUrl}>
                </iframe>
            </div>
            
        );                
    }

}

class Networking extends React.Component{
    constructor(props){
        super(props);
        this.state = {explanation: '', mediaUrl: '', media_type:''}; 
    }

    componentDidMount() {
        fetch('https://api.nasa.gov/planetary/apod?api_key=4lIS1UyV8Dm8vxeL8aimnOMuzHAyKqj0zE4WoB1n')
        .then((Response) => Response.json())
        .then((responseData) => {
            console.log(responseData),
            this.setState({
                explanation: responseData.explanation,
                mediaUrl: responseData.url,
                media_type: responseData.media_type,
            });

            
        });
    }

    render(){
        return (
            <Card className="GeneralCard">
                {/* <ShowMedia media={this.state}/> */}
                <CardTitle title="NASA API" />
                <CardHeader
                />
                <CardMedia 
                 overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}>
                <ShowMedia media={this.state}/>
                </CardMedia>
                <CardTitle title="Information" subtitle="Explanation:" />
                <CardText style={{textAlign: "left"}}>{this.state.explanation}</CardText>               
            </Card>

        );
    }

}

export default Networking;