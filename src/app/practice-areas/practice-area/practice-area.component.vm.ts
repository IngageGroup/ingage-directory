// import { Observable } from 'rxjs';
import { FocusAreaViewModel } from './FocusAreaViewModel';

export interface PracticeAreaViewModel {
    practiceAreaName: string;
    practiceManagerName: string;
    practiceManagerEmail: string;
    focusAreas: FocusAreaViewModel[];

}

