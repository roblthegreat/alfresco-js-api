/*!
* @license
* Copyright 2018 Alfresco Software, Ltd.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import { Pagination } from '../../content-rest-api/model/pagination';
import { TypeEntry } from './typeEntry';

export class TypePagingList {
    pagination?: Pagination;
    entries?: TypeEntry[];

    constructor(input?: any) {
        if (input) {
            Object.assign(this, input);
            this.pagination = input.pagination ? new Pagination(input.pagination) : undefined;
            if (input.entries) {
                this.entries = input.entries.map((item: any) => {
                    return new TypeEntry(item);
                });
            }
        }
    }

}
