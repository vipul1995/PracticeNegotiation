var express = require('express');
var session = require('express-session');
var router = express.Router();
var mongoose = require('mongoose');
var Book = require('../models/AddCasesSchema.js');
const multer = require('multer');
const path = require('path');
var Create_DateVar = require('../models/Create_Date.js');
var fs = require('fs');
/* GET ALL BOOKS */
router.get('/', function(req, res, next) {
  Book.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE BOOK BY ID */
router.get('/:id', function(req, res, next) {
  Book.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE BOOK */
router.post('/', function(req, res, next) {

  const formData = req.body;
  const createDate = { create_Date: Create_DateVar.create_Date };
  const finalParams = { ...formData, ...createDate };
  console.log(finalParams);

  Book.create(finalParams, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE BOOK */
router.put('/:id', function(req, res, next) {
  Book.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE BOOK */
router.delete('/:id', function(req, res, next) {
  Book.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


//******************************************** FOR Debriefing PDF UPLOAD *****************************

// Set The Storage Engine
const storageDefPdf = multer.diskStorage({
  destination: './public/uploads/DefPdf/',
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
  }
});

// Init Upload
const uploaDefPdf = multer({
  storage: storageDefPdf,
  limits: { fileSize: 200 * 1024 * 1024 },
  fileFilter: function (req, file, cb) {
    checkFileTypeDefPdf(file, cb);
  }
}).single('uploads');

// Check File Type
function checkFileTypeDefPdf(file, cb) {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif|pdf|PDF/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  //const mimetype = filetypes.test(file.mimetype);

  if (extname) {
    return cb(null, true);
  } else {
    cb('Error: Images Only!');
  }
}

router.post('/uploadDebriefingPDF', (req, res) => {
  console.log('api called');
  req.on('close', function () {
    console.log('closed');
  })
  
  uploaDefPdf(req, res, (err) => {
    if (err) 
    {
      res.send(err);
      console.log('error');
    }
    else
    {
      if (req.file == undefined) 
      {
        console.log('sorry');
        res.send('Sorry Dear there is an error for undefined');
      }
      else 
      {
        console.log('file uploaded successful');
        res.send({ msg: 'File Uploaded', file: `${req.file.filename}` });
        //console.log('403 is',res.status(403));
        // res.render('index', {
        //   msg: 'File Uploaded!',
        //   file: `uploads/${req.file.filename}`
        // });
      }
    }
  });
});


router.get('/deleteDebriefingPDF/:file', function (req, res) {
  console.log('delete api call');
  let destination =  './public/uploads/DefPdf/';
  var targetPath = destination + req.param("file");

  console.log(targetPath);
  fs.unlink(targetPath, function (err) {
    if (err) {
      console.log(err);
      res.send("Error to delete file: " + err);
     
    } else {
      console.log('delete');
      res.send("File deleted successfully!");
      
    }
  })
});

//******************************************** FOR Debriefing Video UPLOAD *****************************

// Set The Storage Engine
const storageDefVideo = multer.diskStorage({
  destination: './public/uploads/DefVideo/',
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
  }
});

// Init Upload
const uploadDefVideo = multer({
  storage: storageDefVideo,
  limits: { fileSize: 200 * 1024 * 1024 },
  fileFilter: function (req, file, cb) {
    checkFileTypeDefVideo(file, cb);
  }
}).single('uploads');

// Check File Type
function checkFileTypeDefVideo(file, cb) {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif|pdf|PDF/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  //const mimetype = filetypes.test(file.mimetype);

  if (extname) {
    return cb(null, true);
  } else {
    cb('Error: Images Only!');
  }
}

router.post('/uploadDebriefingVideo', (req, res) => {
  console.log('api called');
  req.on('close', function () {
    console.log('closed');
  })

  uploadDefVideo(req, res, (err) => {
    if (err) {
      res.send(err);
      console.log('error');
    }
    else {
      if (req.file == undefined) {
        console.log('sorry');
        res.send('Sorry Dear there is an error for undefined');
      }
      else {
        console.log('file uploaded successful');
        res.send({ msg: 'File Uploaded', file: `${req.file.filename}` });
        //console.log('403 is',res.status(403));
        // res.render('index', {
        //   msg: 'File Uploaded!',
        //   file: `uploads/${req.file.filename}`
        // });
      }
    }
  });
});


router.get('/deleteDebriefingVideo/:file', function (req, res) {
  console.log('delete api call');
  let destination = './public/uploads/DefVideo/';
  var targetPath = destination + req.param("file");

  console.log(targetPath);
  fs.unlink(targetPath, function (err) {
    if (err) {
      console.log(err);
      res.send("Error to delete file: " + err);

    } else {
      console.log('delete');
      res.send("File deleted successfully!");

    }
  })
});



/***************************************** FRONT END WORK ****************************************** */

/* GET SINGLE BOOK BY ID */
router.get('/getRelatedCase/:caseTypesName', function (req, res, next) {
  console.log('api called');
  console.log('the case type is', req.params.caseTypesName);
  let paramsVar = {'caseTypes':req.params.caseTypesName}
  Book.find(paramsVar, function (err, post) {
    if (err) {

      console.log(err);
    }
    else
    {
      console.log(post);
      res.json(post);
    } 
  });
});

module.exports = router;
