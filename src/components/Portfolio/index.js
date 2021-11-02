import {useState, useEffect} from 'react';
import axios from 'axios';
import {PortfolioEl, TitleEl, SpanEl, PortfolioListEl, 
    PortfolioItemEl, BoxEl, ImgEl, OverlayEl, OverlaySpanEl} from './style';

function Portfolio() {

    const [prtItems, setPrtItems] = useState([]);

    useEffect(_ => {
        axios.get('js/data.json').then(response => {
            setPrtItems(response.data.portfolio);
        });
    }, []);

    const portfolio = prtItems.map(prtItem => {
        return (
            <BoxEl key={prtItem.id}>
                <ImgEl src={prtItem.image} alt="#" />
                <OverlayEl>
                    <OverlaySpanEl>Show Image</OverlaySpanEl>
                </OverlayEl>
            </BoxEl>
        );
    });

    return (
        <PortfolioEl>
            <TitleEl><SpanEl>My</SpanEl> Portfolio</TitleEl>
            <PortfolioListEl>
                <PortfolioItemEl active>All</PortfolioItemEl>
                <PortfolioItemEl>HTML</PortfolioItemEl>
                <PortfolioItemEl>Photoshop</PortfolioItemEl>
                <PortfolioItemEl>Wordpress</PortfolioItemEl>
                <PortfolioItemEl>Mobile</PortfolioItemEl>
            </PortfolioListEl>
            <div className="boxes">{portfolio}</div>
        </PortfolioEl>
    );
}

export default Portfolio;