const multer = require("multer");
const path = require("path");

// Define storage
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// File filter for image types
const fileFilter = (req, file, cb) => {
  const allowed = /jpg|jpeg|png/;
  const extname = allowed.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowed.test(file.mimetype);
  if (extname && mimetype) return cb(null, true);
  cb(new Error("Only images (jpg, jpeg, png) are allowed"));
};

const upload = multer({ storage, fileFilter });

module.exports = upload;
