import React, {Component} from 'react';

class Header extends Component{
    constructor(props){
        super(props);

        this.state={
            title:'React App',
            serach:''
        }
    }

    inputChange(event){
        console.log(event.target.value)
        this.setState({serach:event.target.value})
        this.props.newsSearch(event.target.value)
    }
    
    render(){

        return(
            <header>
                <div className="logo"
                onClick={() => console.log("hiiiii")}>{this.state.title}</div>
                <center>
                    <input onChange={this.inputChange.bind(this)}/>
                    <h2>{this.state.serach}</h2>
                </center>
            </header>
        )
    }
}


export default Header;




/*

div
header
footer
section

const Header = () => {
    return(
        <div>
            <div>Header</div>
            <h1>Header second</h1>
        </div>
    )
}


const styles ={
           header:{
               background:'#800000'
           },
           logo:{
            color: '#fff',
            textAlign: 'center',
            fontSize:'40px'
           }
        }

 <header style={styles.header}>
                <div style={styles.logo}>Logo</div>
                <input />
            </header>
*/