export const colors = {
  orange: "#f79119",
  white: "#FFFFFF",
  dark: "#696D7D",
  green: "#0BFAC3",
  black: "#000000"
};

export const sizes = {
  mS: "10px",
  mM: "20px",
  mL: "30px"
};

let env = "development";
if (process.env.NODE_ENV === "production") {
  env = "production";
}

const configs = {
  development: {
    apiUrl: "http://localhost:3000/graphql"
  },
  production: {
    apiUrl: "https://seafood-data.herokuapp.com/graphql"
  }
};

let config = configs.development;
if (env === "production") {
  config = configs.production;
}

export { config };
