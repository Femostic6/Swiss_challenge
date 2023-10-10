const ethers = require("ethers");
const Web3 = require("web3");

var swiss_web3 = new Web3(Web3.givenProvider || "https://json-rpc.testnet.swisstronik.com/");
var mumbai_web3 = new Web3(Web3.givenProvider || "https://polygon-mumbai.g.alchemy.com/v2/0VdjBfJdcpzoXSc7XAVJpo9RU5QTLxAj");
let swiss = "0x38776A17C106b708aa37F33c925768CB866DC34E";
let mumbai = "0x38776A17C106b708aa37F33c925768CB866DC34E"



async function main() {
const result = await swiss_web3.eth.getStorageAt(swiss, 0)
console.log(`swisstronik testnet is ${result}`);
const result2 = await mumbai_web3.eth.getStorageAt(mumbai, 0)
console.log(`mumbai testnet is ${result2}`);

}

main();