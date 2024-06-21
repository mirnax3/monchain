export {};

declare global {
  type ParentClassNameProp = {
    className?: string;
  };

  type ChildrenProp = {
    children?: React.ReactNode;
  };

  type GenericEvent = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e?: any;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type GenericHandler = (e?: any) => void;

  type ClickEventProp = {
    onClick?: GenericHandler;
  };

  // Web3
  interface WindowEventMap {
    'eip6963:announceProvider': CustomEvent;
  }

  interface EIP6963ProviderInfo {
    rdns: string;
    uuid: string;
    name: string;
    icon: string;
  }

  interface EIP6963ProviderDetail {
    info: EIP6963ProviderInfo;
    provider: EIP1193Provider;
  }

  interface EIP6963AnnounceProviderEvent extends CustomEvent {
    detail: {
      info: EIP6963ProviderInfo;
      provider: Readonly<EIP1193Provider>;
    };
  }

  interface EIP1193Provider {
    isStatus?: boolean;
    host?: string;
    path?: string;
    sendAsync?: (
      request: { method: string; params?: Array<unknown> },
      callback: (error: Error | null, response: unknown) => void
    ) => void;
    send?: (
      request: { method: string; params?: Array<unknown> },
      callback: (error: Error | null, response: unknown) => void
    ) => void;
    request: (request: { method: string; params?: Array<unknown> }) => Promise<unknown>;
  }
}
