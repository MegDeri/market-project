import React from 'react';
import './ContactPage.scss'

 export class ContactPage extends React.Component  {
     render() {
         return (
        <div>
            <h1>Contact:</h1>
            <div className="contact__information">
                <p className="contact__part">
                    Street:
                    <span className="contact__main">
                        Warren Avenue 9
                    </span>
                </p>
                <p className="contact__part">
                        City:
                    <span className="contact__main">
                        Brighton
                    </span>
                </p>
                <p className="contact__part">
                    Country:
                    <span className="contact__main">
                        UK
                    </span>
                </p>
                <p className="contact__part">
                    Zip Code:
                    <span className="contact__main">
                        RG 60017
                    </span>
                </p>
                <p className="contact__part">
                        Mobile number:
                    <span className="contact__main">
                        605-790-269
                    </span>
                </p>
                <p className="contact__part">
                    E-mail:
                    <span className="contact__main">
                        mymail@ms.com
                    </span>
                </p>
             </div>
        </div>
        )
    }
 }