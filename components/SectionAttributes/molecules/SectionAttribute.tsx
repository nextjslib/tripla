import { FC, useState } from 'react';

import AttributeHeader from '../atoms/AttributeHeader';
import AttributeName from '../atoms/AttributeName';
import AttributeRequired from '../atoms/AttributeRequired';
import AttributeEdit from '../atoms/AttributeEdit';
import AttributeView from '../atoms/AttributeView';
import AttributeOptions from '../../AttributeOptions/AttributeOptions';

const SectionAttribute: FC<{ index: number; name: number; removeAttribute: () => void }> = ({
  index,
  name,
  removeAttribute,
}) => {
  const [editValue, setEditValue] = useState('input');
  const [viewValue, setViewValue] = useState('label');

  return (
    <>
      <AttributeHeader title={`Attribute ${index + 1}`} removeAttribute={removeAttribute} />
      <div className="grid grid-cols-6 gap-x-2 mt-2 xs:mt-6 mb-1">
        <AttributeName parentName={name} />
        <AttributeRequired parentName={name} />
        <AttributeEdit parentName={name} setValue={setEditValue} />
        <AttributeView parentName={name} setValue={setViewValue} />
      </div>
      {(editValue === 'select' || viewValue === 'tag') && (
        <AttributeOptions parentName={name} showTagColor={viewValue === 'tag'} />
      )}
    </>
  );
};

export default SectionAttribute;
