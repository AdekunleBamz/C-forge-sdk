import { DEFAULT_GAS_FEE_CURRENCY, type HexAddress } from "@bamzzstudio/cforge-addresses";

export type MiniPayEthereum = {
  isMiniPay?: boolean;
  request?: (args: { method: string; params?: unknown[] }) => Promise<unknown>;
};

export function getInjectedEthereum(): MiniPayEthereum | undefined {
  if (typeof window === "undefined") return undefined;
  return (window as unknown as { ethereum?: MiniPayEthereum }).ethereum;
}

export function isMiniPay(): boolean {
  return Boolean(getInjectedEthereum()?.isMiniPay);
}

export function miniPayTransactionOptions(feeCurrency: HexAddress = DEFAULT_GAS_FEE_CURRENCY) {
  return {
    type: "legacy",
    feeCurrency,
  } as const;
}

export async function requestInjectedAccounts(): Promise<HexAddress[]> {
  const ethereum = getInjectedEthereum();
  if (!ethereum?.request) return [];
  const accounts = await ethereum.request({
    method: "eth_requestAccounts",
    params: [],
  });
  return Array.isArray(accounts) ? (accounts as HexAddress[]) : [];
}
