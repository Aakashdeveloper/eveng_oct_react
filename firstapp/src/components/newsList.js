import React from 'react';

const NewsList = (props) => {

    console.log(props)

    const items= props.sendNews.map((data) => {
        return(
            <div>
                <h3>{data.title}</h3>
                <div>
                    {data.feed}
                </div>
            </div>
        )
    })

    return(
       <div>
           {items}
        </div>
    )
}

export default NewsList;




/*
function employee(){
    this.name="Mayank",
    this.age = 10
    var designation = "developer";
    this.out = alert(designation)
}


var akkas = new employee();
*/