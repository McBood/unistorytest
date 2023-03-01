"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMockProvider = void 0;
const ethereum_waffle_1 = require("ethereum-waffle");
const ethers_1 = require("ethers");
const constants_1 = require("../../constants");
const deployMulticall_1 = require("./deployMulticall");
const mineBlock_1 = require("./mineBlock");
const generateRandomWallets = () => {
    const balance = '0x1ED09BEAD87C0378D8E6400000000'; // 10^34
    const wallets = [];
    for (let i = 0; i < 10; i++) {
        wallets.push(ethers_1.Wallet.createRandom());
    }
    return wallets.map((w) => ({ balance, secretKey: w.privateKey }));
};
/**
 * Creates a MockProvider, with an option to override `chainId`.
 * Automatically deploys multicall.
 */
const createMockProvider = async (opts = {}) => {
    var _a;
    const chainId = (_a = opts.chainId) !== null && _a !== void 0 ? _a : constants_1.ChainId.Mainnet;
    const provider = new ethereum_waffle_1.MockProvider({
        ganacheOptions: { chain: { chainId }, wallet: { accounts: generateRandomWallets() } },
    });
    const multicallAddresses = await (opts.multicallVersion === 2
        ? (0, deployMulticall_1.deployMulticall2)(provider, chainId)
        : (0, deployMulticall_1.deployMulticall)(provider, chainId));
    const [deployer, ...wallets] = provider.getWallets();
    return {
        provider,
        multicallAddresses,
        wallets,
        deployer,
        chainId,
        mineBlock: () => (0, mineBlock_1.mineBlock)(provider),
    };
};
exports.createMockProvider = createMockProvider;
//# sourceMappingURL=createMockProvider.js.map