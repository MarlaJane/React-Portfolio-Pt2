import marvel from './images/dareDEVils.png'
import weather from './images/weatherdash.png'
import codebr from './images/codebr.png'
import pup from './images/pupHub.png'
import './css/index.css';

export default function WorksBlock() {
    return (
        <div className='row'>
            <div className='col'>

            </div>
            <div className='col'>
                <div className='container'>
                <h1 className= 'card-title'>Work </h1>
                    {/* <div className= 'card-body' id='work'> */}
                        {/* <h1 className= 'card-title'>Work </h1> */}
                        <div class="row row-cols-1 row-cols-md-2">
                        <div class="col">
                                <div class="card">
                                    <div class="card1-body">
                                        <h5 class="card-title">DareDEVils Archive</h5>                                        
                                        <div className='container' id='preOverlay'>
                                            <p class="card-text"> 
                                            </p>
                                            <img id='marvel' src={marvel} alt="marvel" class="responsive" /> 
                                            <div className='overlay' id="overlay">                                
                                                <div className='card2-body '>                                
                                                    <p class="card-text">
                                                    A Marvel hero search engine using basic html, css, javascript, and public APIs.
                                                    </p> 
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <div class="card1-body">
                                        <h5 class="card-title">Weather Dashboard</h5>                                        
                                        <div className='container' id='preOverlay'>
                                            <p class="card-text">
                                                
                                            </p>
                                            <img id='weather' src={weather} alt="weather" class="responsive" /> 
                                    
                                            <div className='overlay' id="overlay">                                
                                                <div className='card2-body '>                                
                                                    <p class="card-text">
                                                    A server side API displaying weather at a users request using html, javascript, and css.
                                                    </p> 
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <div class="card1-body">
                                        <h5 class="card-title">Code&lt;br{'>'}</h5>                                        
                                        <div className='container' id='preOverlay'>
                                            <p class="card-text">
                                            </p>
                                            <img id='codebr' src={codebr} alt="codebr" class="responsive" /> 
                                    
                                            <div className='overlay' id="overlay">                                
                                                <div className='card2-body '>                                
                                                    <p class="card-text">
                                                    An app that shares, stores, and finds code snippets to reduce dev time using react and apollo.
                                                    </p> 
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <div class="card1-body">
                                        <h5 class="card-title ">PupHub</h5>                                        
                                        <div className='container' id='preOverlay'>
                                            <p class="card-text">
                                            </p>
                                            <img id='pup' src={pup} alt="pup" class="responsive" /> 
                                    
                                            <div className='overlay' id="overlay">                                
                                                <div className='card2-body '>                                
                                                    <p class="card-text">
                                                    A user platform to search and review local dog related companies using handlbars and sass.
                                                    </p> 
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
            {/* </div> */}


                </div>
            </div>
            </div>
        </div>



    );
}