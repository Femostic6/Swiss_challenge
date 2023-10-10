// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract Challenge {
    uint256 private privateData;
    
    constructor (uint num){
        privateData = num;
    }

    function setData(uint newNum) public {
        privateData = newNum;
    }

    function getData() public view returns(uint) {
        return privateData;
    }
}
