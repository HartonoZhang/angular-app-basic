import { Component, OnInit } from '@angular/core';

interface ItemModel {
  id: number;
  name: string;
  address: string;
  mode_edit?: boolean;
}

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent implements OnInit {

  // items: Array<ItemModel>

  incrementId = 1;

  items: ItemModel[] = [
    {
      id: this.incrementId++,
      name: 'Binus',
      address: 'Syahdan',
    },
    {
      id: this.incrementId++,
      name: 'Binus',
      address: 'Kemanggisan',
    },
  ];

  itemTemporary: ItemModel = {
    id: 0,
    name: '',
    address: '',
  };

  constructor() { }

  ngOnInit(): void {
  }

  toggleMode(item: ItemModel, modeEdit: boolean){
    if(modeEdit){
      this.items.forEach(i => {
        i.mode_edit = false;
      })
    }
    this.itemTemporary = JSON.parse(JSON.stringify(item));
    item.mode_edit = modeEdit;
  }

  onPopItem(){
    this.items.pop();
    this.incrementId--;
  }

  onPushItem(){
    this.items.push({
      id: this.incrementId++,
      name: "",
      address: "",
      mode_edit: false,
    });
  }

  onDeleteItem(item: ItemModel){
    const itemIndex = this.items.indexOf(item);
    if(itemIndex < 0){
      return;
    }
    this.items.splice(itemIndex, 1);
  }

  onSaveItem(item: ItemModel){
    const itemIndex = this.items.indexOf(item);
    if(itemIndex < 0){
      return;
    }
    this.items[itemIndex] = JSON.parse(JSON.stringify(this.itemTemporary));
    this.items[itemIndex].mode_edit = false;
  }
  

}
