import {CreativeEl, CreativeInfoEl, InfoTitleEl, InfoTitleSpanEl,
    InfoDirEl, InfoDescEl, DescLinkEl} from './style';

function About() {
    return (
        <CreativeEl>
            <div className="container">
                <CreativeInfoEl>
                    <InfoTitleEl>
                        <InfoTitleSpanEl>This is</InfoTitleSpanEl> Me
                    </InfoTitleEl>
                    <InfoDirEl>Creative Director</InfoDirEl>
                    <InfoDescEl>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <DescLinkEl href="!">explicabo</DescLinkEl> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDescEl>
                    <InfoDescEl>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDescEl>
                </CreativeInfoEl>
            </div>
        </CreativeEl>
    );
}

export default About;