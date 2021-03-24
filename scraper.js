const rp = require("request-promise");
const men3GamesList =
  "https://www.playhq.com/basketball-victoria/org/knox-basketball-association-inc/senior-domestic-summer-202021/tuesday-men-3/1fb0b44f/R11";

rp(men3GamesList)
  .then(function (html) {
    console.log(JSON.parse(JSON.stringify(html)));
  })
  .catch(function (err) {
    console.log(err);
  });
