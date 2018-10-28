import React, {Component} from 'react';

import Banner from '../components/banner';
import ArtistList from '../components/artistList';

const URL_ARTIST = 'http://localhost:7800/artists'
class Home extends Component{

    constructor(props){
        super(props);

        this.state = {
            artist:''
        }
    }

    componentDidMount(){
        fetch(URL_ARTIST, {
            method:'GET'
        })
        .then((response) => response.json())
        .then((json)=>{
            this.setState({
                artist:json
            })
        })
    }

    render(){
        return(
            <div>
                <Banner/>
                <ArtistList allArtists={this.state.artist}></ArtistList>
            </div>
        )
    }
}

export default Home
