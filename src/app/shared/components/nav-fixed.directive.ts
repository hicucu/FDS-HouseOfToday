import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';
import { StateService } from 'src/app/core/services/state.service';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Directive({
  selector: '[NavFixed]'
})
export class NavFixedDirective {

  constructor(public el: ElementRef, public renderer: Renderer2, private stateService: StateService) { }

  @HostListener("window:scroll") scrollHandler() {
    if (window.pageYOffset > 0)
      this.toggleNavFixed(true);
    else this.toggleNavFixed(false);

  }

  toggleNavFixed(fixed: boolean) {
    this.renderer.setStyle(
      this.el.nativeElement,
      "position", fixed ? "fixed" : "relative"
    );
    this.stateService.setIsNavFixed(fixed);
  }
}
