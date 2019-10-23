import moment from 'moment';
import { AssemblyProcessItem } from '../../../services/api';


export const items: AssemblyProcessItem[] = [
    {
        '_id': '5d4193af0717dd5261aac038',
        'img': 'http://placehold.it/160x100',
        'age': 28,
        'assemblyStatus': 'IN_REVIEW',
        'reviewStatus': 'DRAFT',
        'title': 'S6: Center Structure',
        'updated': moment().subtract(20, 'minutes').toISOString(),
    },
    {
        '_id': '5d4193aff7e282781c5c5979',
        'img': 'http://placehold.it/160x100',
        'age': 37,
        'assemblyStatus': 'IN_REVIEW',
        'reviewStatus': 'SIMULATION_FINISHED',
        'title': 'S6: Center Structure v2.0',
        'updated': moment('2019-04-20 15:00:00').toISOString(),
    },
    {
        '_id': '5d4193affb8affd3341571d9',
        'img': 'http://placehold.it/160x100',
        'age': 22,
        'assemblyStatus': 'REVIEW_FINISHED',
        'reviewStatus': 'SIMULATION_NEGATIVE',
        'title': 'S1–S4: Underbody',
        'updated': moment('2019-04-20 16:00:00').toISOString(),
    },
    {
        '_id': '5d4193afe62ac7a863bf045c',
        'img': 'http://placehold.it/160x100',
        'age': 33,
        'assemblyStatus': 'REVIEW_FINISHED',
        'reviewStatus': 'SIMULATION_POSITIVE',
        'title': 'S1: Center Structure',
        'updated': moment('2019-04-20 16:00:00').toISOString(),
    },
    {
        '_id': '5d4193afc8739de8cb8ed43e',
        'img': 'http://placehold.it/160x100',
        'age': 25,
        'assemblyStatus': 'REVIEW_FINISHED',
        'reviewStatus': 'SIMULATION_REQUESTED',
        'title': 'S1: Center Structure',
        'updated': moment('2019-04-19 17:20:00').toISOString(),
    },
    {
        '_id': '5d4193af52777505cd2d556f',
        'img': 'http://placehold.it/160x100',
        'age': 32,
        'assemblyStatus': 'REVIEW_FINISHED',
        'reviewStatus': 'DRAFT',
        'title': 'S1: Center Structure',
        'updated': moment('2019-04-19 17:20:00').toISOString(),
    },
];
