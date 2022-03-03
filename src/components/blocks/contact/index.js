import resume from './images/smallresume.png'
import resumePDF from './images/mjcResume.pdf'
import './css/index.css';

export default function contactBlock() {
    return (
        <div className='row'>
            <div className='col'>

            </div>
            <div className='col'>
                <div className='container'>
                <h1 className= 'card-title'> Contact </h1>

                        <div className= 'card-body' id='contact'>
                           

                                <div className="row row-cols-1 row-cols-md-2 g-4">
                                    <div className="col">
                                        <p className= 'card-text'>Email:</p>
                                        <p className= 'card-text'> marlajanecaram@gmail.com</p>
                                        <p className= 'card-text'> Phone Number:</p>
                                        <p className= 'card-text'> (347) 766-4247</p>
                                        <i className="bi bi-linkedin" onClick={() => window.open("https://www.linkedin.com/in/marla-jane-caram/")}> </i>
                                        {/* <i className="bi-github" role="img" aria-label="GitHub"> </i>
                                        <i className="bi bi-instagram"> </i> */}
                                    </div>
                                    <div className='col'>
                                    <a href={resumePDF} download><img id='resume' src={resume} alt="resume" class="responsive" /></a>
                                    </div>
                                </div>
                        </div>

                </div>
            </div>
        </div>
        
    );
}