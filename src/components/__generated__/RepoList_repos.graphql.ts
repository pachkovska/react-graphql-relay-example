/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type RepoList_repos = {
    readonly nodes: ReadonlyArray<{
        readonly name: string;
        readonly " $fragmentRefs": FragmentRefs<"RepoSingle_node">;
    } | null> | null;
    readonly " $refType": "RepoList_repos";
};
export type RepoList_repos$data = RepoList_repos;
export type RepoList_repos$key = {
    readonly " $data"?: RepoList_repos$data;
    readonly " $fragmentRefs": FragmentRefs<"RepoList_repos">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RepoList_repos",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Repository",
      "kind": "LinkedField",
      "name": "nodes",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "RepoSingle_node"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "RepositoryConnection",
  "abstractKey": null
};
(node as any).hash = 'd544b1e9362c8b541f53e7ec90bf38e2';
export default node;
