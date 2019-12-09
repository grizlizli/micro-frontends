# Micro Frontends

Micro Frontends Architecture Concept.
Web application serving as a Frontend API Gateway is developed in Angular.
Micro Frontends services 

## Build

Run `npm run build:popup` to build Popup Component bootrstrapped as an Angular Element.
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Notes

AOT is possible and it should be used.
Ivy compiler could be used in smaller bundles if everything goes smooth.
Do not upgrade `document-register-element`. There is a known issue with versions above v1.8.1.

## Resources
- [Dynamic Remote Component Loader - Proof of concept](https://github.com/dianadujing/dynamic-remote-component-loader)
- [Getting Started with Angular Elements](https://www.telerik.com/blogs/getting-started-with-angular-elements)
- [The Best Way To Lazy Load Angular Elements](https://medium.com/@tomastrajan/the-best-way-to-lazy-load-angular-elements-97a51a5c2007)
- [Here is what you need to know about dynamic components in Angular](https://indepth.dev/here-is-what-you-need-to-know-about-dynamic-components-in-angular/)
- [Modules are not what you think they are](https://www.youtube.com/watch?v=pERhnBBae2k) - Widgets in the Web App
- [Extension Mechanism](https://github.com/maximusk/extension-mechanism-demo), GitHub repo by 
- [The Strengths and Benefits of Micro Frontends](https://www.toptal.com/front-end/micro-frontends-strengths-benefits)
- [Micro Front Ends — Doing It Angular Style — Part 1](https://medium.com/outbrain-engineering/micro-front-ends-doing-it-angular-style-part-1-219c842fd02e)
- [Micro Front Ends — Doing It Angular Style — Part 2](https://medium.com/outbrain-engineering/micro-front-ends-doing-it-angular-style-part-2-1393ced4ceab?)
- [The Best Way To Lazy Load Angular Elements](https://medium.com/@tomastrajan/the-best-way-to-lazy-load-angular-elements-97a51a5c2007)

## Projects: 

List of projects in this repository:
- Micro Frontends Container
- Popup Component
