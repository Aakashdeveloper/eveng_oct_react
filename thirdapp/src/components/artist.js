import React, {Component} from 'react';
import Header from './header';

const URL_ARTIST = 'http://localhost:7800/artists'

class Artist extends Component{
    constructor(props){
        super(props);

        this.state = {
            artist: ''
        }
    }

    componentDidMount(){
        console.log(this.props.match.params.artistid)
        fetch(`${URL_ARTIST}/${this.props.match.params.artistid}`,{
            method:'GET'
        })
            .then((res) => res.json())
            .then((json)=>{
                this.setState({
                    artist:json
                })
            })
    }

    render(){
        return(
            <div>
                <Header></Header>
                <div className="artist_bio">
                    <div className="artist_image">
                        <span style={{background:`url('/images/covers/${this.state.artist.cover}.jpg')no-repeat`}}>
                        </span>
                        <div className="bio">
                            <h3>{this.state.artist.name}</h3>
                            <div className="bio_text">
                                {this.state.artist.bio}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Artist