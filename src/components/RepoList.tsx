import React from 'react';
import { createFragmentContainer } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import { IRepository } from "../typeAnnotations/types";

interface IProps {
    repos: { nodes: IRepository[] }
}

function RepoList({ repos }:IProps) {

        return(
            <div>
                <ul>
                    {repos.nodes.map(node => <li key={node.id}>{node.name}</li>)}
                </ul>
            </div>
        )
}

export default createFragmentContainer(RepoList, {
    repos: graphql`
        fragment RepoList_repos on RepositoryConnection {
            nodes {
                createdAt
                isInOrganization
                isPrivate
                name
                primaryLanguage {
                    name
                }
                id
            }
        }
    `
});