
import React from 'react';
import environment from './relay-env';
import { QueryRenderer } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

const query = graphql`
  query AppQuery {
    viewer {
      login
    }
  }
`
interface Props {
  error: Error | null;
  props: any;
}

const renderComponent = ({ error, props }: Props) => {
  if(error) {
    return <div>Error!</div>;
  }
  if(!props) {
    return <div>Loading...</div>;
  }
  return <div>Hello there ...{props.viewer.login}</div>;
};

function App() {
  return (
      <QueryRenderer
          environment={environment}
          query={query}
          render={renderComponent}
          variables={{}}
      />
  );
}

export default App;