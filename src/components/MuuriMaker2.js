import React from 'react';
import {MuuriComponent} from 'muuri-react';

const App = () => {
  // Items.
  const items = [
    {key: '1', text: 'zl', size: 's', color: 'red'},
    {key: '2', text: 'zg', size: 'l', color: 'blue'},
    {key: '3', text: 'nx', size: 'l', color: 'blue'},
  ];

  // Items to components.
  const children = items.map((props) => <Item {...props} />);

  // Render.
  return (
  	<div>
      <MuuriComponent>{children}</MuuriComponent>
     </div> 
  );
};

export default MuuriMaker2;