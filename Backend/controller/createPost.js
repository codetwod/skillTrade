const cloudinary = require('cloudinary').v2;
const postUpload=require('../model/Post/postSchema'); 

exports.createPost = async (req, res) => {
    try {
        const { username, caption, tags } = req.body;
        console.log(username, caption, tags);
        const uploadedImage = req.files.imageFile;
        console.log('recived file successfully');
        const supportedImageTypes = ['jpg', 'jpeg', 'png'];
        console.log('running');
        const imageExtension = req.files.imageFile.name.split('.')[1].toLowerCase();
        console.log(imageExtension);
        if (!username || !caption || !tags || tags.length === 0) {
            return res.status(400).json({
              success: false,
              message: 'Username, caption, and tags are required',
            });
        }
        console.log('evrything exists');
        if(!isSupportedFileType(imageExtension,supportedImageTypes))
        {
            return res.status(400).json({
                success: false,
                message: 'file type not supported use,supported file types:jpg,jpeg,png',
            });
        }
        const response = await uploadImage(uploadedImage, "skillTradePost");
        console.log('image uploaded');
        console.log(response);
        const fileData=await postUpload.create({username,caption,img_URL:response,tags});
        console.log("databse entry done "+response);
        res.status(200).json({
            success:true, 
            message:'image successfully uploaded',
            data:fileData
        })

    } catch (err) {
        res.status(400).json({
            success:false,
            message:'something went wrong'
        })
    }
}

function isSupportedFileType(type, supportedTypes) {
    return supportedTypes.includes(type);
}

async function uploadImage(imageFile, folder) {
    const options = { folder };
    const result=await cloudinary.uploader.upload(imageFile.tempFilePath, options);
    return result.secure_url;
}
