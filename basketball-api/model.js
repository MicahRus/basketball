const rp = require("request-promise");
const men3GamesList =
  "https://www.playhq.com/basketball-victoria/org/knox-basketball-association-inc/senior-domestic-summer-202021/tuesday-men-3/1fb0b44f/R11";

const getData = () => {
  return new Promise(function (resolve, reject) {
    rp(men3GamesList).then(function (html) {
      resolve(html);
    });
    reject("error");
  });
};

// rp(men3GamesList)
// .then(function (html) {
//   // console.log(JSON.parse(JSON.stringify(html)));
//   // return JSON.stringify(html);
//   return ["test"];
// })
// .catch(function (err) {
//   console.log(err);
//   return "nothing";
// });

module.exports = {
  getData,
};
