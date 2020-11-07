const express = require("express");
const Jedi = require("./jedi-model");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    res.json(await Jedi.find());
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const jedi = await Jedi.findById(req.params.id);
    if (!jedi) {
      return res.status(404).json({
        message: "Jedi not found",
      });
    }

    res.json(jedi);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const jedi = await Jedi.create(req.body);
    res.status(201).json(jedi);
  } catch (err) {
    next(err);
  }
});
