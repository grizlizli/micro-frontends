export class DynamicModuleResolver {
  static modules: any[] = [];
  static addModule(module: any) {
    DynamicModuleResolver.modules.push(module);
  }
  constructor() {
  }
}
