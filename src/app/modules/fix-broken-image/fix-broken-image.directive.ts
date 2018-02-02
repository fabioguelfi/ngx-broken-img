import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[fixBrokenImage]'
})

export class FixBrokenImgDirective {
  @Input() fixBrokenImage;
  private defaultImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABdwAAAXcCAMAAAAP67xWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDVBNUUyMDE5QTdDMTFFNDhDNjA4MDk3NjIzQ0U3NDQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDVBNUUyMDA5QTdDMTFFNDhDNjA4MDk3NjIzQ0U3NDQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QUM1REE1NDA5QTdDMTFFNDgyOTg5ODg3NzE3REVDMkMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUM1REE1NDE5QTdDMTFFNDgyOTg5ODg3NzE3REVDMkMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4y/2RTAAAABlBMVEXp7vG6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';
  @HostListener('error', ['$event.target']) onError(img) {
    img.src = this.fixBrokenImage || this.defaultImg;
  }
}
