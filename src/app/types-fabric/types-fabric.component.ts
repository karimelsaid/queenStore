import { Component,AfterViewInit} from '@angular/core';
import  typesFabric from '../../assets/typesFabric/typesFabric.json';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { debounce } from 'lodash';
@Component({
  selector: 'app-types-fabric',
  templateUrl: './types-fabric.component.html',
  styleUrls: ['./types-fabric.component.css']
})
export class TypesFabricComponent implements AfterViewInit{

  faSearch =faSearch //ده لل icon
  Fabrics = typesFabric.Fabrics //ملف json

  searchValue: any; //قيمة البحث
  filteredValue: string = ''; //قيمة لمنع الارقام والرموز
  filteredItems: any[] = this.Fabrics; //لتصفية المصفوفه

  filterData = debounce(() => {
    const regex =/[^\p{L}\s]/gu;
    this.searchValue = this.searchValue.replace(regex, '');
    if (this.searchValue.trim() !== '') {
      this.filteredValue = this.searchValue;
    }else{
      this.filteredItems = this.Fabrics
    }
  });

    filterItems(){
      this.filterData();
      if (this.searchValue.trim() !== '') {
        // تطبيق الفلتر على العناصر هنا
        this.filteredItems = this.Fabrics.filter(e =>
          e.name.toLowerCase().includes(this.searchValue.toLowerCase())
          );
        } else {
        // عرض جميع العناصر بدون فلتر
        this.filteredItems = this.Fabrics
      }

    }

ngAfterViewInit(): void {
  this.shuffleArray(this.Fabrics);
}
shuffleArray(array: any[]) {
  return array.sort(() => Math.random() - 0.5);
}
}
