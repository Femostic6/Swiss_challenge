// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "../src/Challenge.sol";

contract CounterTest is Test {
    Challenge public challenge;

    function setUp() public {
        challenge = new Challenge(500);
    }

    function testdata() public view {
     uint result =  challenge.getData();
     console.log(result);
    }

}
