import { Injectable } from '@angular/core';

/**
 * options service for the Pagination components.
 * You can inject this service, typically in your root components, and customize the values of its properties in
 * order to provide default values for all the paginations used in the application.
 */
@Injectable({ providedIn: 'root' })
export class PaginationConfig {
  disabled = false;
  boundaryLinks = false;
  directionLinks = true;
  ellipses = true;
  maxPage = 5;
  rotate = true;
}
