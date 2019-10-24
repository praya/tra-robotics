import { fromEvent, merge, of } from 'rxjs';
import { distinctUntilChanged, map, switchMap, throttleTime } from 'rxjs/operators';
import { getItems } from '../../services/getItems';


const cardHeight = 144;
const pageHeight = () => window.innerHeight;
const scrolled = () => window.scrollY;

export const getDynamicItems = (q: string, sort: string, assembly: string, review: string) =>
    merge(
        of(undefined),
        fromEvent(window, 'scroll'),
        fromEvent(window, 'resize')
    ).pipe(
        throttleTime(1000, undefined, { leading: true, trailing: true }),
        map(() => {
            const start = Math.floor((scrolled() - pageHeight()) / cardHeight);
            const end = Math.floor((scrolled() + pageHeight() * 2) / cardHeight);
            return [start >= 0 ? start : 0, end];
        }),
        distinctUntilChanged(([start1], [start2]) => {
                const threshold = pageHeight() / 2 / cardHeight;
                return Math.abs(start2 - start1) < threshold;
            }
        ),
        switchMap(([start, end]) => {
            return getItems({ q, start, end, sort, order: 'asc', assembly, review })
                .pipe(map((response) => ({ start, end, response })))
        }),
    );
