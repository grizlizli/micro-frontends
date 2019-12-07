import {
  Directive, ElementRef, EventEmitter,
  Inject,
  Injector,
  Input,
  NgModuleFactory,
  NgModuleFactoryLoader,
  NgModuleRef, OnDestroy,
  OnInit, Output, Type,
  ViewContainerRef
} from '@angular/core';
import {LAZY_MODULES, LAZY_MODULES_MAP} from '../services/module-provider.service';

type ModuleWithRoot = Type<any> & { rootComponent: Type<any> };

@Directive({
  selector: '[loadModule]'
})
export class LoadModuleDirective implements OnInit, OnDestroy {
  @Input('loadModule')
  public moduleName: keyof LAZY_MODULES;

  @Output()
  loaded: EventEmitter<any> = new EventEmitter<any>();

  private moduleRef: NgModuleRef<any>;

  constructor(
    private vcr: ViewContainerRef,
    private injector: Injector,
    private loader: NgModuleFactoryLoader,
    @Inject(LAZY_MODULES_MAP) private modulesMap
  ) {}

  public ngOnInit() {
    this.loader
      .load(this.modulesMap[this.moduleName])
      .then((moduleFactory: NgModuleFactory<any>) => {
        this.moduleRef = moduleFactory.create(this.injector);
        const rootComponent = (moduleFactory.moduleType as ModuleWithRoot).rootComponent;

        const factory = this.moduleRef.componentFactoryResolver.resolveComponentFactory(
          rootComponent
        );

        this.vcr.createComponent(factory);
        this.loaded.emit(rootComponent);
      })
      .catch((error) => console.error(error));

  }

  public ngOnDestroy(): void {
    this.moduleRef && this.moduleRef.destroy();
  }
}
