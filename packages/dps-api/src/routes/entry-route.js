const express = require("express");
const multer  = require("multer");
const upload = multer();
const authorize = require("../middleware/authorize.js");
const { sanitizeQuery } = require("../middleware/sanitize.js");
const EntryController = require("../controllers/entry-controller.js");
const router = new express.Router();

// pull all entries/index thereof
router.get("/", 
    sanitizeQuery,
    EntryController.fetchIndex
    );

// view entry
router.get("/:slug",
    EntryController.fetchEntry
    );

// new entry
router.post("/new", 
    authorize, 
    upload.none(), 
    EntryController.createEntry
    );

// update entry
router.patch("/:id", 
    authorize, 
    upload.none(), 
    EntryController.updateEntry
    );

module.exports = router
