import {useState, useEffect} from 'react';
import axios from 'axios';
import {WorkEl, TitleEl, SpanEl, WorkPartEl,
    IconEl, PartTitleEl, LineEl, PartDescEl} from './style';

function Work() {

    // state = {
    //     works: []
    // }

    const [works, setWorks] =  useState([]); // {works: []};
    /*
        setStaet => setWorks;
        suseState([]) => [] default value of works;
    */

    // component life cycle => didMount, didUpdate, ...:
    useEffect(_ => {
        axios.get('js/data.json').then(response => {
            setWorks(response.data.works);
        });
    }, []); 

    const MappingOnWorks = works.map(work => {
        return (
            <WorkPartEl first={work.id} key={work.id}>
                <IconEl className={work.icon_name}></IconEl>
                <PartTitleEl>{work.title}</PartTitleEl>
                <LineEl />
                <PartDescEl>{work.body}</PartDescEl>
            </WorkPartEl>
        );
    });

    return (
        <WorkEl>
            <div className="container">
                <TitleEl><SpanEl>My</SpanEl> Work</TitleEl>
                {MappingOnWorks}
            </div>
        </WorkEl>
    );
}

export default Work;