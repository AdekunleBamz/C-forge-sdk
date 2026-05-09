# C-forge SDK

Standalone SDK repo for the C-forge app. It is intentionally split into tiny sibling packages so apps can depend only on the pieces they need.

Repository: https://github.com/AdekunleBamz/C-forge-sdk

Umbrella package: `@bamzzstudio/cforge-sdk`

## Packages

- `@bamzzstudio/cforge-addresses`: Celo mainnet addresses, chain IDs, token metadata.
- `@bamzzstudio/cforge-abi`: Contract ABIs for CFRG and ERC-20 approvals.
- `@bamzzstudio/cforge-core`: Fees, formatting helpers, explorer links, mint defaults.
- `@bamzzstudio/cforge-wallets`: MiniPay detection and Celo fee-currency transaction helpers.
- `@bamzzstudio/cforge-react`: Small React hooks layered on top of the wallet helpers.

The umbrella package depends on these sibling packages, matching the layout used by `auralis-sdk`.

## Commands

```bash
npm install
npm run build
npm run typecheck
```
