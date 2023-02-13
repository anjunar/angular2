import {Component, ComponentFactoryResolver, Injector, ViewContainerRef} from '@angular/core';
import {ChildComponent} from "./child/child.component";
import {ContainerComponent} from "./container/container.component";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {

  constructor(private viewContainer : ViewContainerRef, private resolver : ComponentFactoryResolver, private injector : Injector) {}

  onClick() {

    let componentFactory = this.resolver.resolveComponentFactory(ChildComponent);
    let componentRef = componentFactory.create(this.injector);
    componentRef.instance.text = "Hello World"
    componentRef.changeDetectorRef.detectChanges()

    this.viewContainer.createComponent(ContainerComponent, {projectableNodes : [[componentRef.location.nativeElement]]})

  }

}
