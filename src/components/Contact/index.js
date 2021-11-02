import { Fragment } from 'react';
import Footer from './../Footer/index';
import {DropEl, DropTilteEL, DropTilteSpanEL, DropFormEl,
    InputBoxEl, FirstTextInput, SecondTextInput, EmailInput,
    TextareaEl, SubmitInput} from './style';

function Contact() {
    return (
        <Fragment>
            <DropEl>
                <div className="container">
                    <DropTilteEL>
                        <DropTilteSpanEL>Drop </DropTilteSpanEL>Me A line
                    </DropTilteEL>
                    <DropFormEl action="">
                        <InputBoxEl>
                            <FirstTextInput type="text" placeholder="Your Name" />
                            <EmailInput type="email" placeholder="Your Email" />
                        </InputBoxEl>
                        <SecondTextInput type="text" placeholder="Your Subject" />
                        <TextareaEl cols="30" rows="10" placeholder="Your Message">
                        </TextareaEl>
                        <SubmitInput type="submit" value="Send Message" />
                    </DropFormEl>
                </div>
            </DropEl>
            <Footer />
        </Fragment>
    );
}

export default Contact;