import {
  CELO_MAINNET,
  CELO_STABLECOINS,
  CFRG_TOKEN,
  type HexAddress,
  type StableSymbol,
} from "@bamzzstudio/cforge-addresses";

export { CELO_MAINNET, CELO_STABLECOINS, CFRG_TOKEN };
export type { HexAddress, StableSymbol };

export const WEB_CELO_MINT_FEE_WEI = 2_000_000_000_000_000n;
export const WEB_CELO_MINT_FEE_DISPLAY = "0.002";
export const MINIPAY_STABLE_MINT_FEE_DISPLAY = "0.0002";
export const CFRG_MINT_AMOUNT_UNITS = 1_000n * 10n ** 18n;
export const CFRG_MINT_AMOUNT_DISPLAY = "1000";

export const MINIPAY_STABLE_MINT_FEE_UNITS: Record<StableSymbol, bigint> = {
  USDm: 200_000_000_000_000n,
  USDC: 200n,
  USDT: 200n,
};

export function getStableMintFeeUnits(symbol: StableSymbol): bigint {
  return MINIPAY_STABLE_MINT_FEE_UNITS[symbol];
}

export function getStableSymbolByAddress(address: string): StableSymbol | null {
  const normalized = address.toLowerCase();
  for (const [symbol, token] of Object.entries(CELO_STABLECOINS) as Array<
    [StableSymbol, (typeof CELO_STABLECOINS)[StableSymbol]]
  >) {
    if (token.address.toLowerCase() === normalized) return symbol as StableSymbol;
  }
  return null;
}

export function getExplorerTxUrl(hash: string): string {
  return `${CELO_MAINNET.explorerUrl}/tx/${hash}`;
}

export function getExplorerAddressUrl(address: string): string {
  return `${CELO_MAINNET.explorerUrl}/address/${address}`;
}

export function isHexAddress(value: string | undefined | null): value is HexAddress {
  return typeof value === "string" && /^0x[a-fA-F0-9]{40}$/.test(value);
}

export function shortAddress(address: string, left = 6, right = 4): string {
  if (address.length <= left + right) return address;
  return `${address.slice(0, left)}...${address.slice(-right)}`;
}

export function formatTokenUnits(value: bigint | undefined, decimals = 18, digits = 4): string {
  if (value === undefined) return "0";
  const divisor = 10n ** BigInt(decimals);
  const whole = value / divisor;
  const fraction = value % divisor;
  const trimmed = fraction.toString().padStart(decimals, "0").slice(0, digits);
  return digits > 0 ? `${whole}.${trimmed}` : whole.toString();
}
