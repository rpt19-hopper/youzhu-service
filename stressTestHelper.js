const artilleryContext = (context, events, done) => {
  context.vars.id = Math.floor(Math.random() * 10000000);
  context.vars.storeId = Math.floor(Math.random() * 10000000);
  context.vars.userId = Math.floor(Math.random() * 10000000);
  context.vars.text = "test test test"
  context.vars.starRating = Math.floor(Math.random() * 5);

  return done();
}
module.exports = { artilleryContext }