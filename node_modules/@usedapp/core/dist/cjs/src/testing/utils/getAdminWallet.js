"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdminWallet = void 0;
async function getAdminWallet(provider) {
    return await provider.getWallets()[9];
}
exports.getAdminWallet = getAdminWallet;
//# sourceMappingURL=getAdminWallet.js.map