import React from 'react';
import environment from '../relay-env';
import { QueryRenderer } from 'react-relay';
import { graphql } from  'babel-plugin-relay/macro';
import RepoList from "./RepoList";

const query = graphql`
    query RepoListWrapperQuery ($login:String!) {
        user (login: $login) {
            repositories(orderBy: {field: CREATED_AT, direction: DESC}, first:100, privacy: PUBLIC) {
                pageInfo {
                    startCursor
                }
                totalCount
                totalDiskUsage
                ...RepoList_repos
            }
        }
    }
`
interface IProps {
    error: Error | null;
    props: any;
}

const renderQuery = ({error, props}: IProps) => {

    if(error) return <div>Error!</div>;

    if(!props) return <div>Loading...</div>;

    return <div><RepoList repos={props.user.repositories}/></div>
};

function RepoListWrapper ({login}) {

    return (
        <QueryRenderer
            environment={environment}
            query={query}
            render={renderQuery}
            variables={{login}}
        />
    );
}

export default RepoListWrapper;