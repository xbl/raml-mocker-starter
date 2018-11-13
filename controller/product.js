exports.getProductDetail = (req, res, webApi) => {
  // console.log(webApi);
  console.log(req.get('Authorization'));
  res.send('Hello World!');
}
