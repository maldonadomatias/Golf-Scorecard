
let getHomepage = (req, res) =>{
    return res.render("homepage.ejs");
};

let getAdminPage = (req, res) => {
    return res.render("start.ejs")
}

let getForgotPage = (req, res) => {
    return res.render("users/forgot.ejs")
}

let getAllUsersPage = (req, res) => {
    return res.render("users/manageUsers.ejs")
}
module.exports = {
    getHomepage: getHomepage,
    getAdminPage: getAdminPage,
    getForgotPage: getForgotPage,
    getAllUsersPage: getAllUsersPage
};
