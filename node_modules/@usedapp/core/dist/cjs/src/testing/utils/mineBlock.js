"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mineBlock = void 0;
const ethers_1 = require("ethers");
const getAdminWallet_1 = require("./getAdminWallet");
const mineBlock = async (provider) => {
    const wallet = await (0, getAdminWallet_1.getAdminWallet)(provider);
    const tx = await wallet.sendTransaction({ to: ethers_1.constants.AddressZero, value: 0 });
    await tx.wait();
};
exports.mineBlock = mineBlock;
//# sourceMappingURL=mineBlock.js.map