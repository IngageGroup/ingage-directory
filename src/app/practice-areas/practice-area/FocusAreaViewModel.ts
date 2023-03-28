import { FocusAreaMemberViewModel } from './FocusAreaMemberViewModel';

export interface FocusAreaViewModel {
    focusAreaName: string;
    lead: FocusAreaMemberViewModel;
    members: FocusAreaMemberViewModel[];
}
