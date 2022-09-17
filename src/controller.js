
import './controller.scss';
import IconButton from '@mui/material/IconButton';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import React from "react";
import { color } from '@mui/system';

function Controller() {
    const [temp, setTemp] = React.useState(10);
    const colorArray = ["#EAF2FF", "#3BC4FB", "#3BFBEC", "#01FFDC", "#01FFA4", "#FFAC01", "#FF9601", "#FF7801", "#FF4001", "#FF0101" ]

    const AddOnClick = () => {
        console.log("AddOnClick")
        if (temp < 30){
            setTemp(temp+1);
            let dial = document.getElementsByClassName("circle")[0];
            console.log(dial)
            dial.style.backgroundColor = colorArray[Math.floor((temp+1)/3)]
        }
    };

    const SubOnClick = () => {
        console.log("SubOnClick")
        if (temp > 0){
            setTemp(temp-1);
            let dial = document.getElementsByClassName("circle")[0];
            console.log(dial)
            dial.style.backgroundColor = colorArray[Math.floor((temp+1)/3)]
        }
    };
    


    return (
        <div className="outer">
            <div className="circle">
                <div className="inner-text">
                    <span>{temp} C</span>
                </div>
            </div>
            <div className="button-div">
                <div className="button-inner-div">
                    <IconButton onClick={AddOnClick} className="add"><AddCircleIcon className='icon'/></IconButton>
                    <IconButton onClick={SubOnClick} className="sub"><RemoveCircleIcon className='icon'/></IconButton>
                </div>
            </div>
        </div>
    );
}

export default Controller;
