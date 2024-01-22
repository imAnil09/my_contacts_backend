const express = require("express");
const {
  getContact,
  createContact,
  updateContact,
  deleteContact,
  getContacts,
} = require("../contollers/contactController");
const validateAccessToken = require("../middleWare/validateAccessToken");

const router = express.Router();

//#region without refactoring

// router.route("/").get(getContact)

// router.route("/").post(createContact)

// router.route("/:id").put(updateContact)

// router.route("/:id").delete(deleteContact)

//#endregion

router.use(validateAccessToken);

router.route("/").get(getContacts).post(createContact);

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
