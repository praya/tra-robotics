import { FilterProp } from './FilterProp';


export interface Filter {
    id: string;
    name: string;
    items: Array<FilterProp>;
}
