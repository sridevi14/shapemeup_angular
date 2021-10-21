import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { EmitEvent } from '../../modals/_shared.interface';
@Component({
  selector: 'app-card-view-list',
  templateUrl: './card-view-list.component.html',
  styleUrls: ['./card-view-list.component.scss'],
})
export class CardViewListComponent implements OnInit, OnChanges {

  @Input() itemList: any[] = [];
  @Input() eventType: 'select' | 'delete' | null = null;
  @Input() showAddNewIcon = false;
  @Input() showSearchIcon = false;
  @Output() clickEvent = new EventEmitter<EmitEvent>();

  filteredItemList: any[] = [];
  sortOrder: 'asc' | 'desc' = 'asc';
  eventIcon: 'chevron-forward-outline' | 'trash-outline'

  constructor() { }

  ngOnChanges() {
    this.filteredItemList = this.itemList;
    console.log(this.filteredItemList);
    if (this.eventType) {
      this.eventIcon = this.eventType === 'select' ? 'chevron-forward-outline' : 'trash-outline'
    }
  }

  ngOnInit() { }

  searchItems(event) {
    if (event.target.value) {
      let filteredItems: any[] = [];
      const query = event.target.value.toLowerCase();
      requestAnimationFrame(() => {
        this.itemList.forEach(item => {
          if (item.name.toLowerCase().indexOf(query) > -1) {
            filteredItems.push(item);
          }
        });
      });
      this.filteredItemList = filteredItems;
    } else {
      this.filteredItemList = this.itemList;
    }
  }

  sortItem(order) {
    this.sortOrder = order;
    if (this.sortOrder === 'asc')
      this.filteredItemList.sort((a, b) => a.name < b.name ? -1 : (a.name > b.name ? 1 : 0))
    else
      this.filteredItemList.sort((a, b) => a.name > b.name ? -1 : (a.name < b.name ? 1 : 0))
  }

}
