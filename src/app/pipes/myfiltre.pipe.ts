import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myfiltre'
})
export class MyfiltrePipe implements PipeTransform {

  transform(objs: any, term: any): any {
    if (term === undefined || term === null || term.trim() === '') {
      return objs;
    }

    return objs.filter((obj: any) => {
      return (obj.name && obj.name.toLowerCase().includes(term.toLowerCase()));
    });
  }
}
