//https://eth-ropsten.alchemyapi.io/v2/6G-50KdpL9dtwxsCuS0RpGDUEqKqJg9L

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/6G-50KdpL9dtwxsCuS0RpGDUEqKqJg9L",
      accounts: [
        "2fee3dcdb322bee9a7ecd1122efe662de0c732cc1d765fcdbe79ca2b179ab454",
      ],
    },
  },
};
