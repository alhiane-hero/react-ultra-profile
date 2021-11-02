import {useState, useEffect} from 'react';
import axios from 'axios';
import {SocialMediaEl, SocialEl, IconEl, ParentEl, ParentSpan,
    ParentSpanInfo1} from './style';

function SocialMedia() {

    const [social, setSocial] = useState([]);

    useEffect(_ => {
        axios.get('js/data.json').then(response => {
            setSocial(response.data.social);
        }); 
    }, []);

    const socials = social.map(item => {
        return (
            <SocialEl id={item.id} key={item.id}>
                <IconEl className={item.icon}></IconEl>
                <ParentEl>
                    <ParentSpan>{item.title}</ParentSpan>
                    <ParentSpanInfo1>{item.body}</ParentSpanInfo1>
                </ParentEl>
            </SocialEl>
        );  
    });

    return (
        <SocialMediaEl>{socials}</SocialMediaEl>
    );
}

export default SocialMedia;