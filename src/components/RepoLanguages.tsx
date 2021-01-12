import React from 'react';
import { createFragmentContainer } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import { IRepository } from "../typeAnnotations/types";


function RepoLanguages({ edges }:any) {

    return(
        <div>
            {edges.edges.map(edge => <div>{edge.node.name}</div>)}
        </div>
    )
}

export default createFragmentContainer(RepoLanguages, {
    edges: graphql`
        fragment RepoLanguages_edges on LanguageConnection {
            edges {
                node {
                    color
                    id
                    name
                }
                size
            }
        }
    `
});