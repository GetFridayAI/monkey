import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'select-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input() dropdownOptions!: Array<any>;
  @Input() selectedOption!: any;
  @Output("selectOption") selectOption: EventEmitter<any> = new EventEmitter();

  isDropdownOpen: boolean = false;
  optionsListContainerClass: string = "options-list";

  constructor() { }

  ngOnInit(): void {
  }

  toggleDropdown(newState: boolean): void {
    this.isDropdownOpen = newState;
  }

  onOptionSelect(option: any): void {
    this.selectOption.emit(option);
    this.toggleDropdown(false);
  }

}
