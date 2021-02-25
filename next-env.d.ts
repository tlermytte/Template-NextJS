/// <reference types="next" />
/// <reference types="next/types/global" />
declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}
declare module '*.scss' {
  const classes: { [key: string]: string };
  export default classes;
}
declare module '*.png';
declare module '*.jpg';
declare module '*.svg' {
  const content: undefined;
  export default content;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let gtag: any;
