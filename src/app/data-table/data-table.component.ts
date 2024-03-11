import { Component, OnInit } from '@angular/core';

interface Supplier {
  name: string,
  address: string,
  email: string,
  phone: string
}

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})
export class DataTableComponent {
  [x: string]: any;

  suppliers: Array<Supplier> = [
    {name: 'Supplier 1', address: 'Address 1', phone: '56655654645', email: 'supplier1gmail.com'},
    {name: 'Supplier 2', address: 'Address 2', phone: '56655654645', email: 'supplier2gmail.com'},
    {name: 'Supplier 3', address: 'Address 3', phone: '56655654645', email: 'supplier3gmail.com'},
    {name: 'Supplier 4', address: 'Address 4', phone: '56655654645', email: 'supplier4gmail.com'},
    {name: 'Supplier 5', address: 'Address 5', phone: '56655654645', email: 'supplier5gmail.com'},
    {name: 'Supplier 6', address: 'Address 6', phone: '56655654645', email: 'supplier6gmail.com'},
    {name: 'Supplier 7', address: 'Address 7', phone: '56655654645', email: 'supplier7gmail.com'},
    {name: 'Supplier 8', address: 'Address 8', phone: '56655654645', email: 'supplier8gmail.com'},
    {name: 'Supplier 9', address: 'Address 9', phone: '56655654645', email: 'supplier9gmail.com'},
    {name: 'Supplier 10', address: 'Address 10', phone: '56655654645', email: 'supplier10@gmail.com'},
    {name: 'Supplier 11', address: 'Address 11', phone: '56655654645', email: 'supplier11gmail.com'},
    {name: 'Supplier 12', address: 'Address 12', phone: '56655654645', email: 'supplier12gmail.com'},
    {name: 'Supplier 13', address: 'Address 13', phone: '56655654645', email: 'supplier13gmail.com'},
    {name: 'Supplier 14', address: 'Address 14', phone: '56655654645', email: 'supplier14gmail.com'},
    {name: 'Supplier 15', address: 'Address 15', phone: '56655654645', email: 'supplier15gmail.com'},
    {name: 'Supplier 16', address: 'Address 16', phone: '56655654645', email: 'supplier16gmail.com'},
    {name: 'Supplier 17', address: 'Address 17', phone: '56655654645', email: 'supplier17gmail.com'},
    {name: 'Supplier 18', address: 'Address 18', phone: '56655654645', email: 'supplier18gmail.com'},
    {name: 'Supplier 19', address: 'Address 19', phone: '56655654645', email: 'supplier19gmail.com'},
    {name: 'Supplier 20', address: 'Address 20', phone: '56655654645', email: 'supplier20gmail.com'},
    {name: 'Supplier 21', address: 'Address 21', phone: '56655654645', email: 'supplier21gmail.com'},
  ]

  currentPage: number = 1;
  pageSize: number = 5;

  filteredSupplier: Array<Supplier> = this.suppliers;
  pageSizes: Array<number> = [ 5, 10, 20 ];


  ngOnInit() {
    this.visibleData();
    this.pageNumbers();
  }

  // loadFromLocalStorage() {
  //   const storedSuppliers = this.storage.get('suppliers');
  //   if (storedSuppliers) {
  //     this.suppliers = storedSuppliers;
  //     this.filteredSupplier = storedSuppliers;
  //   }
  // }

  // // Save to local storage
  // saveToLocalStorage() {
  //   this.storage.set('suppliers', this.suppliers);
  // }

  visibleData() {
    let startIndex = (this.currentPage - 1) * this.pageSize;
    let endIndex = startIndex + this.pageSize;
    return this.filteredSupplier.slice(startIndex, endIndex);
  }

  nextPage() {
    this.currentPage++;
    this.visibleData();
  }

  previousPage() {
    this.currentPage--;
    this.visibleData();
  }

  pageNumbers() {
    let totalPages =Math.ceil(this.filteredSupplier.length / this.pageSize);
    let pageNumArray = new Array(totalPages);
    // console.log('Total Page', totalPages);

    return pageNumArray;
  }

  changePage(pageNumber:number) {
    this.currentPage = pageNumber;
    this.visibleData();
  }


  filterData(searchTerm:string) {
    this.filteredSupplier = this.suppliers.filter( 
      item => Object.values(item).some( val => val.toLowerCase().includes(searchTerm.toLowerCase())));
    this.visibleData();
  }
  
  changePageSize(pageSize:any) {
    this.pageSize = pageSize;
    this.visibleData();
  }
 
 
}
