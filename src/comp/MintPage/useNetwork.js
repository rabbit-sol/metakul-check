export declare function useNetwork(): readonly [
  {
    readonly data: {
      readonly chain:
        | {
            id: number;
            unsupported: boolean | undefined;
            name?: string | undefined;
            nativeCurrency?:
              | {
                  name: string;
                  symbol: string;
                  decimals: 18;
                }
              | undefined;
            rpcUrls?: string[] | undefined;
            blockExplorers?:
              | {
                  name: string;
                  url: string;
                }[]
              | undefined;
            testnet?: boolean | undefined;
          }
        | undefined;
      readonly chains: import("wagmi").Chain[];
    };
    readonly error: Error | undefined;
    readonly loading: boolean | undefined;
  },
  (
    | ((chainId: number) => Promise<
        | {
            data: undefined;
            error: import("wagmi").SwitchChainError;
          }
        | {
            data: import("wagmi").Chain | undefined;
            error: undefined;
          }
      >)
    | undefined
  ),
];
