export type HexAddress = `0x${string}`;

export const CELO_MAINNET = {
  id: 42220,
  name: "Celo",
  rpcUrl: "https://forno.celo.org",
  explorerUrl: "https://celoscan.io",
} as const;

export const CELO_SEPOLIA = {
  id: 11142220,
  name: "Celo Sepolia",
  rpcUrl: "https://forno.celo-sepolia.celo-testnet.org",
  explorerUrl: "https://sepolia.celoscan.io",
} as const;

export const ZERO_ADDRESS =
  "0x0000000000000000000000000000000000000000" as const;

export const CELO_STABLECOINS = {
  USDm: {
    symbol: "USDm",
    name: "Mento USD",
    address: "0x765DE816845861e75A25fCA122bb6898B8B1282a" as HexAddress,
    decimals: 18,
  },
  USDC: {
    symbol: "USDC",
    name: "USDC",
    address: "0xcebA9300f2b948710d2653dD7B07f33A8B32118C" as HexAddress,
    decimals: 6,
  },
  USDT: {
    symbol: "USDT",
    name: "USDT",
    address: "0x48065fbbe25f71c9282ddf5e1cd6d6a887483d5e" as HexAddress,
    decimals: 6,
  },
} as const;

export type StableSymbol = keyof typeof CELO_STABLECOINS;

export const DEFAULT_GAS_FEE_CURRENCY = CELO_STABLECOINS.USDm.address;

export const CFRG_TOKEN = {
  name: "cforge",
  symbol: "CFRG",
  decimals: 18,
  address: "0x24A3b0B4A60Cf33dFb37E4725d987E6002828F04" as HexAddress,
} as const;
