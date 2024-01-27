
import React, {useState} from "react";
import axios from "axios";

const UploadApp = () => {
    const [uploadFile, setUploadFile] = useState(null);
    const [imgLink, setImgLink] = useState(null);

    console.log(uploadFile);


    function imlementFileUpload(e){
           
           setUploadFile(e.target.files[0])
    }

    async function letsUpload(e){
        e.preventDefault()

        const formData = new FormData();
        formData.append("file", uploadFile);

        try{
            const response = await axios.post("https://instagram-express-app.vercel.app/api/post/upload", formData)
            setImgLink(response.data.data.file_url)
        }
        catch(err){
            console.log(err)
        }

    }



    return(
        <div>
            <form onSubmit={letsUpload}>
                <input type="file" 
                  onChange={imlementFileUpload}
                />
                <button type="submit">Upload</button>
            </form>

            {
                imgLink && <img 
                 style={{
                    width: "300px",
                    height: "300px",
                 }}
                src={imgLink} alt="Uploaded Pic"/> 
            }
        </div>
    )
}

export default UploadApp;