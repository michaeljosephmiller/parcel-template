module.exports = {
  data: {
    test: require("./src/data/test.json"),
  },
  site: {
    title: "Website Template Repo",
    description: "Example Project using Parcel, Typescript, PostCSS, and EJS",
    url: "/",
    author: "Michael J Miller",
    meta_data: {
      twitter: "@michaelj_miller",
      opengraph_default: "static/opengraph-default.jpg",
    },
    env: process.env.NODE_ENV,
  },
};
