import React from 'react';
import { createFragmentContainer } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import { IRepository } from "../typeAnnotations/types";
import RepoSingle from "./RepoSingle";

interface IProps {
    repos: { nodes: IRepository[] }
}

function RepoList({ repos }:IProps) {

        return(
            <>
                {repos.nodes.map(node => (
                    <RepoSingle key={node.name} node={node}/>
                    )
                )}
            </>
        )
}

export default createFragmentContainer(RepoList, {
    repos: graphql`
        fragment RepoList_repos on RepositoryConnection {
            nodes {
                name
                ...RepoSingle_node
            }
        }
    `
});