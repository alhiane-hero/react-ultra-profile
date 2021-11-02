import {HomeEl, InformationEl, TitleEl,
    HomeInfoEl, HomeDescEl, SpanEl, HomeBtn, } from './style';

function Home() {
    return (
        <HomeEl>
            <div className="container">
                <InformationEl>
                    <TitleEl>Hamza Nabil</TitleEl>
                    <HomeInfoEl>Creative Director</HomeInfoEl>
                    <HomeDescEl>
                        Iam a professional 
                        <SpanEl>UX Designer</SpanEl>
                        and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </HomeDescEl>
                    <HomeBtn>Let's Begin</HomeBtn>
                </InformationEl>
            </div>
        </HomeEl>
    );
}

export default Home;