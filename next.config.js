const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

// TODO: Remove once hosted from precept.sh via CNAME
const basePath = process.env.NODE_ENV === "production" ? "/docs" : "";

module.exports = {
  ...withNextra(),
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
};
