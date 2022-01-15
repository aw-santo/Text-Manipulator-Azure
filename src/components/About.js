import React from 'react'

export default function About( props ) {
    return (
        <div className="container">
            <h2 className={`my-4 text-${props.mode==='light'?'dark':'light'}`}>About</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        About the app
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Text Manipulating and modifying web-app.</strong> Bring some text and play with it, turn all characters to uppercase, to lowercase, to capitalize format, trim the text and many more to come in future also. Hence it is called text-utility app.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Technology Used
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is purely a <code>react</code> based app.</strong> And a simple routing is implemented with the help of <code>
                            react-router-dom</code>.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
