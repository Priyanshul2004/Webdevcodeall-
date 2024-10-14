const File = require("../model/file");

exports.localfileupload = async (req, res) => {
    try {
        const file = req.files.file;
        console.log("file aa gyi ji ", file);

        let path = __dirname + "/files" + Date.now() + `.${file.name.split('.')[1]}`;
        console.log("path => ", path);


        file.mv(path, (err) => {
            console.log(err);
        });

        res.json({
            success: true,
            message: 'local file upload successfully',
        })

    } catch (error) {
        console.log(error);
    }
}


function isFileTypeSupported(type, supportedType) {
    return supportedType.includes(type);
}

async function uploadFileCloudinary(file, folder) {
    const options = { folder };
    await cloudinaryconnect.upload(file.tempFilePath, options);
}

exports.imageupload = async (req, res) => {
    try {
        const { name, tags, email } = req.body;
        console.log(name, tags, email);

        const file = req.files.imagefile;
        console.log(file);

        const supportedType = ["jpg", "jpeg", "png"];
        const fileType = file.name.split('.')[1].toLowerCase(); // Changed toLowerCase() instead of tolowerCase()

        if (!isFileTypeSupported(fileType, supportedType)) {
            return res.status(400).json({
                success: false,
                message: "file format not supported"
            })
        }

        const response = await uploadFileCloudinary(file, "codehelp");
        console.log(response);

        res.json({
            success: true,
            message: 'image successfully uploaded'
        })
    } catch (error) {
        console.error(error);
        res.status(400).json({
            success: false,
            message: 'something went wrong'
        });
    }
}