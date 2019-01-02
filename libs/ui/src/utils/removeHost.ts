import { ElementRef } from '@angular/core';

export const removeHost = (element: ElementRef) => {

  const nativeElement: HTMLElement = element.nativeElement,
    parentElement: HTMLElement = nativeElement.parentElement;

  if (parentElement) {
    parentElement.removeChild(nativeElement);
  }
};