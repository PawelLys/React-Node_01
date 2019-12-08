module.exports = (req, res, next) => {
  if (req.user.wallet < 1500 && req.body.typeOfTruck === 1) {
    return res.status(403).send({ error: "You don't have enough money." });
  }
  if (req.user.wallet < 2500 && req.body.typeOfTruck === 2)
    return res.status(403).send({ error: "You don't have enough money." });

  next();
};
