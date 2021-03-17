const multer       = require('multer');

const MINE_TYPES    = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png',
};

const storage       = multer.diskStorage({
    destination: (req, res, callback) => {
        callback(null, 'images')
    },
    filename: (req, res, callback) => {
        const name      = file.originalname.split(' ').join('_');
        const extension = MINE_TYPES[file.mimeType];
        callback(null, + Date.now() + '.' + extension);
    }
});

module.exports      = multer({storage: storage}).single('image')