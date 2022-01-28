import './css/index.css'

export default function AboutBlock() {

    return (
        <div className="row">
            <div className="col">

            </div>
            <div className="col">
                <div className="container">
                <h1 className= 'card-title'> About Me </h1>
                        <div className= 'card-body' id='about'>
                            {/* <h1 className= 'card-title'> About Me </h1> */}
                            <p className= 'card-text'> 
                            I am a creative and analytical Web Developer with a background in back-end and front-end web development. 
                            More specifically I have experience with Javascript, Node.js, REST API's, HTML/CSS, React, Pug, and SQL databases.
                            I am currently searching for a Junior Web Development position that ideally focuses on Node.js and other Javascript 
                            frameworks. I have been researching GreenTech and I am very interested in companies that provide fair trade and sustainable products.
                            </p>
                            <p className="card-text"> My previous education and work experience has shown me that I am very adaptable and love collaborating with others.
                            I have excellent customer service skills and I aim to please. My goal is to provide the best possible product 
                            or software solutions to my team and the customer. </p>
                        </div>
                    
                </div>

            </div>
        </div>
       
        
    );
}