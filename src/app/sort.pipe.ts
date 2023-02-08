import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any[] {
    
      return value.sort(function(a:any,b:any){
        if(a.price>b.price){
          return 1
        }
        else{
          return -1
        }
      })
    
  }

}
