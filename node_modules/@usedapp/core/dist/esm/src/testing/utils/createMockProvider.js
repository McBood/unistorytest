import { MockProvider } from 'ethereum-waffle';
import { Wallet } from 'ethers';
import { ChainId } from '../../constants';
import { deployMulticall, deployMulticall2 } from './deployMulticall';
import { mineBlock } from './mineBlock';
const generateRandomWallets = () => {
    const balance = '0x1ED09BEAD87C0378D8E6400000000'; // 10^34
    const wallets = [];
    for (let i = 0; i < 10; i++) {
        wallets.push(Wallet.createRandom());
    }
    return wallets.map((w) => ({ balance, secretKey: w.privateKey }));
};
/**
 * Creates a MockProvider, with an option to override `chainId`.
 * Automatically deploys multicall.
 */
export const createMockProvider = async (opts = {}) => {
    var _a;
    const chainId = (_a = opts.chainId) !== null && _a !== void 0 ? _a : ChainId.Mainnet;
    const provider = new MockProvider({
        ganacheOptions: { chain: { chainId }, wallet: { accounts: generateRandomWallets() } },
    });
    const multicallAddresses = await (opts.multicallVersion === 2
        ? deployMulticall2(provider, chainId)
        : deployMulticall(provider, chainId));
    const [deployer, ...wallets] = provider.getWallets();
    return {
        provider,
        multicallAddresses,
        wallets,
        deployer,
        chainId,
        mineBlock: () => mineBlock(provider),
    };
};
//# sourceMappingURL=createMockProvider.js.map