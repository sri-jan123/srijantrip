import React, { useState, useRef } from 'react';
import Topbutton from './Topbutton';
import Downbutton from './Downbutton';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';

// Move the FileUploader component outside
export const FileUploader = ({ handleFile, setUploadedImages, uploadedImages }) => {
    const hiddenFileInput = useRef(null);

    const handleClick = () => {
        console.log("click");
        hiddenFileInput.current.click(); // Programmatically trigger the file input click
    };

    const handleChange = (event) => {
        const fileUploaded = event.target.files[0];
        handleFile(fileUploaded); // Pass the uploaded file to the parent component
    };

    return (
        <>
            <Downbutton
                style={{
                    padding: '10px',
                    backgroundColor: 'transparent',
                    border: 'none',
                    borderRadius: '25px',
                    boxShadow: '5px 5px 5px black',
                    cursor: 'pointer',
                    fontSize: '15px',
                    margin: '0px'
                }}
                label1="+ ADDIMAGE"
                onClick={handleClick} // Trigger file input on button click
            />
            <input
                type="file"
                onChange={handleChange}
                ref={hiddenFileInput}
                style={{ display: 'none' }} // Hide the file input
            />

        </>
    );
};

function Internalbar({ backgroundColor, width, boxShadow, marginLeft, showTopButtons, showDownButtons }) {
    const [uploadedImages, setUploadedImages] = useState([]);
    const style = {
        backgroundColor: backgroundColor || 'defaultColor',
        width: width || 'defaultWidth',
        boxShadow: boxShadow || 'defaultboxShadow',
        marginLeft: marginLeft || 'defaultmarginLeft'
    };

    const iconContainer = {
        height: '50px',
        width: '50px',
        backgroundColor: 'rgb(36, 39, 43)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        boxShadow: '5px 5px 30px black'
    };

    const iconStyle = {
        fontSize: '25px',
        color: 'rgb(111, 120, 124)'
    };

    // Handle the uploaded file (for example, display it or upload it to a server)
    const handleFileUpload = (file) => {
        // console.log('Uploaded file:', file); // Handle the uploaded file here
        var url = URL.createObjectURL(file);
        setUploadedImages([...uploadedImages, url])
    };

    return (
        <div className='internalrect' style={style}>
            {showTopButtons && (
                <>
                    <Topbutton label="About Me" />
                    <Topbutton label="Experiences" />
                    <Topbutton label="Recommended" />
                </>
            )}
            {showDownButtons && (
                <div style={{display:"flex", flexDirection:"column",}}>
                    <div style={{display: "flex", justifyContent:"space-between", gap:"2rem", }}>

                        <Downbutton label1="Gallery" />

                        <FileUploader handleFile={handleFileUpload} uploadedImages={uploadedImages} setUploadedImages={setUploadedImages} />

                        <div style={iconContainer}>
                            <ArrowLeftOutlined style={iconStyle} />
                        </div>
                        <div style={iconContainer}>
                            <ArrowRightOutlined style={iconStyle} />
                        </div>
                    </div>

                    <div>
                        {
                            uploadedImages && uploadedImages.map((img, idx) => (
                                <img src={img} width={150} height={150} />
                            ))
                        }
                    </div>
                </div>
            )}
        </div>
    );
}

export default Internalbar;