import React from 'react';
import { createFragmentContainer } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import { IRepository } from "../typeAnnotations/types";
import RepoLanguages from "./RepoLanguages";

interface IProps {
    node : IRepository;
}

function RepoSingle({ node }:IProps) {

    return(
        <div className="bg-white w-1/4 min-w-24 shadow-lg rounded-lg m-2" key={node.id}>
            <div>{node.name}</div>
            {node.description && <div>{node.description}</div>}
            <RepoLanguages edges={node.languages} />
        </div>
    )
}

export default createFragmentContainer(RepoSingle, {
    node: graphql`
        fragment RepoSingle_node on Repository {
            createdAt
            id
            description
            assignableUsers {
                totalCount
            }
            homepageUrl
            isInOrganization
            isPrivate
            name
            owner {
                avatarUrl
                login
                id
            }
            languages (first: 100, orderBy: {field: SIZE, direction: DESC}) {
                ...RepoLanguages_edges
            }
        }
    `
});