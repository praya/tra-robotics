import { ajax } from 'rxjs/ajax';
import { Query } from './Query';
import { map } from 'rxjs/operators';
import { itemsUrl } from '../config';


const buildUrl = (base: string, params: { [key: string]: any }) => {
    const filteredParams = Object.fromEntries(
        Object.entries(params).filter(([key, value]) => ![undefined, null, ''].includes(value))
    );
    const urlSearchParams = new URLSearchParams(filteredParams);
    return `${base}?${urlSearchParams}`;
};

const configToSearchParams = (query: Query) => ({
    q: query.q,
    assemblyStatus: query.assembly,
    reviewStatus: query.review,
    _start: String(query.start),
    _end: String(query.end),
    _sort: query.sort,
    _order: query.order,
});


export const getItems = (query: Query) => ajax(buildUrl(
    itemsUrl,
    configToSearchParams(query)
)).pipe(map(({ xhr, response }) => ({
    total: parseInt(xhr.getResponseHeader('x-total-count') || '') || 0,
    items: response,
})));
