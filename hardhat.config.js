// require("@nomicfoundation/hardhat-toolbox");
// require("dotenv").config();

// /** @type import('hardhat/config').HardhatUserConfig */
// const MUMBAI_API_KEY = process.env.MUMBAI_API_KEY;
// const PRIVATE_KEY_5 = process.env.PRIVATE_KEY_5;
// const PRIVATE_KEY_2 = process.env.PRIVATE_KEY_2;
// module.exports = {
//   solidity: {
//     compilers: [
//       {
//         version: "0.8.4",
//         settings: {
//           optimizer: {
//             enabled: true,
//             runs: 200,
//           },
//         },
//       },
//     ],
//   },
//   defaultNetwork: "polygon_mumbai",
//   networks: {
//     hardhat: {},
//     polygon_mumbai: {
//       url: `https://polygon-mumbai.g.alchemy.com/v2/${MUMBAI_API_KEY}`,
//       accounts: [PRIVATE_KEY_2, PRIVATE_KEY_5],
//     },
//   },
//   solidity: {
//     version: "0.5.15",
//     settings: {
//       optimizer: {
//         enabled: true,
//         runs: 200,
//       },
//     },
//   },
//   paths: {
//     sources: "./contracts",
//     tests: "./test",
//     cache: "./cache",
//     artifacts: "./artifacts",
//   },
//   mocha: {
//     timeout: 40000,
//   },
// };

require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
const fs = require("fs");
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});
const MUMBAI_API_KEY = process.env.MUMBAI_API_KEY;
const PRIVATE_KEY_5 = process.env.PRIVATE_KEY_5;
const PRIVATE_KEY_2 = process.env.PRIVATE_KEY_2;

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    polygon_mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/sdH-l_KmOBNMYo7DFyi144oLYp0ewqIf`,
      accounts: [
        "b3ba6aa8f36fa86c366b5ec48f95bc913babee5849b33d184f2ca2f7e169ad1e",
        "521e9fb392d259b817df478a264df4eb8733a4b7550881d371be750a5e388be7",
      ],
    },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
