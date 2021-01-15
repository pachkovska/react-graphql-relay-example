import React from 'react';
import { createFragmentContainer } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import Chart from './Chart';
import { IRepositoryLanguage } from "../typeAnnotations/types";

interface IProps {
       edges: {
           edges: IRepositoryLanguage[];
       }
}

function RepoLanguages({ edges }:IProps) {

    return(
        <div className="flex justify-center items-center">
            <Chart edges={edges.edges}/>
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