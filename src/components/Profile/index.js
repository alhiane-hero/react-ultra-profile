import { useState, useEffect } from 'react';
import axios from 'axios';
import {ProfileSkillsEl, ProfileEl, ProfileTitle, ProfileTitleSpan,
    ProfileList, ProfileItem, ProfileItemSpan, SpanWeb,
    Skills, SkillsTitle, SkillsTitleSpan, SkillsDesc,
    BarEl, BarTitle, BarPerc, ParentEl, ParentSpan} from './style';

function Profile() {

    const [skills, setSkills] = useState([]);

    useEffect(_ => {
        axios.get('js/data.json').then(response => {
            setSkills(response.data.skills);
        });
    }, []);

    const profileSkills = skills.map(skill => {
        return (
            <BarEl>
                <BarTitle>{skill.skill_name}</BarTitle>
                <BarPerc>{skill.perc}</BarPerc>
                <ParentEl>
                    <ParentSpan></ParentSpan>
                </ParentEl>
            </BarEl>
        );
    });

    return (
        <ProfileSkillsEl>
            <div className="container">
                <ProfileEl>
                    <ProfileTitle>
                        <ProfileTitleSpan>My</ProfileTitleSpan> Profile
                    </ProfileTitle>
                    <ProfileList>
                        <ProfileItem>
                            <ProfileItemSpan>Name</ProfileItemSpan>
                            Hamza Nabil
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileItemSpan>Birthday</ProfileItemSpan>
                            21/1/1996
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileItemSpan>Address</ProfileItemSpan>
                            Ain shams
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileItemSpan>Phone</ProfileItemSpan>
                            4444 5555 6666
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileItemSpan>Email</ProfileItemSpan>
                            hamza@hamza.com
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileItemSpan>Website</ProfileItemSpan>
                            <SpanWeb>www.google.com</SpanWeb>
                        </ProfileItem>
                    </ProfileList>
                </ProfileEl>
                <Skills>
                    <SkillsTitle>
                        Some <SkillsTitleSpan>skills</SkillsTitleSpan>
                    </SkillsTitle>
                    <SkillsDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>
                    {profileSkills}
                </Skills>
            </div>
        </ProfileSkillsEl>
    );
}

export default Profile;