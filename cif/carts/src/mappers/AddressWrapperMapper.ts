/*
 * Copyright 2019 diconium
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

import { InputSettings, Mapper } from '@diconium/commerce-cif-hybris-core';
import { AddressWrapper } from '@adobe/commerce-cif-model';
import { AddressWsDTO } from '@diconium/commerce-cif-hybris-clients';
import AddressMapper from './AddressMapper';

export default class AddressWrapperMapper extends Mapper<AddressWrapper> {

  constructor(settings: InputSettings) {
    super(settings);
  }

  mapFromInputArgsToActionParameters(mappable: any) {

    const {
      address,
      id,
    } = mappable;

    return { id, address: this.mapFromEntity(address) };
  }

  mapFromEntity(entity: AddressWrapper, mappable?: AddressWsDTO) {
    return new AddressMapper(this.settings).mapFromEntity(entity);
  }
  /* istanbul ignore next */
  mapToEntity(dto: AddressWsDTO, entity?): AddressWrapper {
    throw new Error('Unsupported Operation');
  }

}
