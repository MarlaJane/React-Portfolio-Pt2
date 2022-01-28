import beeGif from './images/portwebB.gif'
import './css/index.css'

export default function homeBlock() {
    return (
        <div className="row">
            <div className="col">

            </div>
            <div className="col">
                <div className="container" id='intro'>
                    <h1 className= 'card-title' id='introT'> This is </h1>
                    <h1 className= 'card-title' id='introB'> Marla Jane.</h1>
                    <img id='beeGif' src={beeGif} alt="beeGif" class="rounded-circle responsive" />
                    
                </div>

            </div>
        </div>

       
        
    );
}