/* eslint-disable */
declare module 'meteor/communitypackages:react-router-ssr'
declare module 'meteor/communitypackages:fast-render'

declare module 'meteor/webapp' {
  module WebApp {
    export function addHtmlAttributeHook(callback: () => any): void;
  }
}
