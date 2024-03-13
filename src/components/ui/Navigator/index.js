import React from "react";
import './style.css';
import NavItem from "../NavItem";
import AboutMeFigure from "../../../images/about-me.png";
import Photos from "../../../images/photos.png";
import Posts from "../../../images/posts.png";
import DataEntry from "../../../images/data-entry.png";
import SendPhoto from "../../../images/send-photo.png";
import SendMail from "../../../images/send-mail.png";
//import cv from "../../../docs/CV_Eren_Turkel.pdf";

const Navigator = (value) => {
    return (
        //<NavItem text="Hakkımda" image={AboutMeFigure} link={cv} download="CV_Eren_Turkel" />
        <div className="navigator">
            <NavItem text="Hakkımda" image={AboutMeFigure} link='/aboutme'/>
            <NavItem text="Fotoğraflar" image={Photos} link='/photos'/>
            <NavItem text="Gönderiler" image={Posts} link='/posts'/>
            <NavItem text="Veri girişi" image={DataEntry} link='/dataentry'/>
            <NavItem text="Fotoğraf gönder" image={SendPhoto} link='/sendphoto'/>
            <NavItem text="Mesaj gönder" image={SendMail} link='/sendmail'/>
        </div>
    );
}

export default Navigator;