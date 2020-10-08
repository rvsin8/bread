// create, : index, : show, : update, : destroy
const express = require("express");
const router = express.Router();
const Expense = require("../../models/Expense");
const mongoose = require("mongoose");

router.get("/:userId", (req, res) => {

  Expense.find({ id: mongoose.ObjectId(req.params.userId) })
    .select("amount date")
    .then((expense) => {
      return res.json(expense);
    });
});

router.get("/", (req, res) => {
  Expense.find((error, expenses) => {
    if (error) return res.status(404).json({ NoExpense: "No record of any expense." })
    res.json(expenses.map((expenses) => {
      return ({
        price: expenses.amount,
        date: expenses.date,
        id: expenses.id
      })
    }));
  });
});


router.post("/new", (req, res) => {
  const newExpense = new Expense({
    amount: req.body.amount,
    payer_id: req.body.userId,
  });
  newExpense.save().then((expenses) => res.json(expenses));
});


router.delete("/delete/:expenseId", (req, res) => {
  Expense.findByIdAndRemove(req.params.expenseId)
    .then((expenses) => {
      if (!expenses) {
        return res.status(404).send({
          message: "Expenses not found",
        });
<<<<<<< HEAD
      }
      return res.send({ message: "Expenses successfully deleted" });
    })
    .catch((err) => {
      res.status(400).send({ message: "Could not delete expense" });
=======
        newExpense.save().then((expenses) => res.json(expenses));
    }
);

router.get("/:id/expense", (req, res) => {
  Expense.find({ id: mongoose.ObjectId(req.params.id) })
    .select("price")
    .then((expense) => {
      return res.json(expense);
>>>>>>> f57f3b561daf4404aa61c4c70eceb00f7bfa6071
    });
});

module.exports = router;
