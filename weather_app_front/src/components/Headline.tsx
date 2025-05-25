import React, { useContext } from 'react';
import { HeaderContext } from '../context/HeaderContext';
import { Heading } from './ui/Typography';

const Headline: React.FC = () => {
  const { title } = useContext(HeaderContext);

  return (
    <div className="text-center my-6">
      <Heading>{title}</Heading>
    </div>
  );
};

export default Headline;