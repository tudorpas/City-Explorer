import '../css/search.css'

export default function Result( {props} ){
    return(
        <div className="results-container">

                    {  
                        props?.map(city => (
                            <div className="result" key={city.id}>
                                <h2>{city.name}</h2> 
                            </div>
                        ))
                    }   
                </div>
    )
}