"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deployMulticall2 = exports.deployMulticall = void 0;
const ethereum_waffle_1 = require("ethereum-waffle");
const constants_1 = require("../../constants");
const deployMulticall = async (provider, chainId) => {
    return deployMulticallBase(constants_1.MultiCall, provider, chainId);
};
exports.deployMulticall = deployMulticall;
const deployMulticall2 = async (provider, chainId) => {
    return deployMulticallBase(constants_1.MultiCall2, provider, chainId);
};
exports.deployMulticall2 = deployMulticall2;
const deployMulticallBase = async (contract, provider, chainId) => {
    const multicall = await (0, ethereum_waffle_1.deployContract)((await provider.getWallets())[0], {
        bytecode: contract.bytecode,
        abi: contract.abi,
    });
    const multicallAddresses = { [chainId]: multicall.address };
    return multicallAddresses;
};
//# sourceMappingURL=deployMulticall.js.map