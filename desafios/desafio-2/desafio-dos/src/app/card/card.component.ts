import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass'],
})
export class CardComponent implements OnInit {
  @Input()
  get name(): string {
    return this._name;
  }
  set name(name: string) {
    this._name = (name && name.trim()) || '<no name set>';
  }
  private _name = '';

  @Input()
  get description(): string {
    return this._description;
  }
  set description(description: string) {
    this._description =
      (description && description.trim()) || '<no description set>';
  }
  private _description = '';

  @Input()
  get image(): string {
    return this._image;
  }
  set image(image: string) {
    this._image = (image && image.trim()) || '<no image set>';
  }
  private _image = '';

  @Input()
  get page(): string {
    return this._page;
  }
  set page(page: string) {
    this._page = (page && page.trim()) || '<no page set>';
  }
  private _page = '';

  constructor() {}

  ngOnInit(): void {}
}
