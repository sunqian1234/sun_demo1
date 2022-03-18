const pageConfig = require("./page-config.json");
const pages = pageConfig.pages;
module.exports = {
  outputDir: "./demo1",
  pages: createPages(pages),
};

function createPages(pages) {
  let pageObj = {};
  pages.map((page) => {
    pageObj[page] = {
      entry: "src/projects/" + page + "/main.js",
      template: "public/index.html",
      filename: page + ".html",
      title: page,
    };
  });
  return pageObj;
}
