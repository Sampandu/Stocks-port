import React from 'react';
import { Dimmer, Header } from 'semantic-ui-react';

const Loading = ({ isPending }) => {
  return (
    <Dimmer
      active={isPending}
      page
      style={{ display: 'flex', justifyContent: 'center' }}
    >
      <Header as="h2" icon inverted>
        <div className="customizedLoader" />
        <label>Loading...</label>
      </Header>
    </Dimmer>
  );
};

export default Loading;
