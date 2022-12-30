declare module '*.css';
declare module '*.less';

type NativeAPIFun = (paramsStr: string | null) => void;
type tftNativeApiCallBackPrefix = 'tftNativeApiCallBack__';
type tftNativeApiCallBack = `${tftNativeApiCallBackPrefix}`;

declare interface Window {
  tftNativeApiCallBackObj: Record<string, (res: any) => void>;
  tftNativeApiCallBack;
  webkit: {
    messageHandlers: Record<string, Record<string, NativeAPIFun>>;
  };
  cdTft: Record<string, NativeAPIFun>;
  android: Record<string, NativeAPIFun>;
}
