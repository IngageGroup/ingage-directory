import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'getEmployeeCause' })
export class GetEmployeesCausePipe implements PipeTransform {
    public transform(causes: any[], filter: string) {
        if (!filter) { return causes; }
        return causes.filter(cause => cause.title == filter);
    }
}
