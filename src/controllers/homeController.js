let getHomePage = (req, res) => {
  return res.render('homepage.ejs')
}
let getAboutPage = (req, res) => {
  return res.render('test/about.ejs')
}

module.exports = { getHomePage, getAboutPage }
// Controller
// Giữ nhiệm vụ tiếp nhận điều hướng các yêu cầu từ người dùng, giúp lấy dữ liệu đúng với những thông tin cần thiết nhờ vào các nghiệp vụ lớp Model cung cấp và hiển thị các dữ liệu đó ra cho người dùng.
