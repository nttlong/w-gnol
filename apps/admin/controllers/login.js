var apps = require("n-gnol");
module.exports = {
    url: "login",
    template: "login.html",
    actions: {
        get: apps.action("public", (sender) => {
            return new apps.view(sender, {});
        })
    }
}