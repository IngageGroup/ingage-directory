import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'eligbleEmployees' })
export class EligibleEmployeesPipe implements PipeTransform {
    public transform(items: any[], filter: Array<string>) {
        if (!filter) { return items; }
        for (var f of filter) {
            items = items.filter(item => item.type.toLowerCase() != f.toLowerCase());
        }
        return items
    }
}
