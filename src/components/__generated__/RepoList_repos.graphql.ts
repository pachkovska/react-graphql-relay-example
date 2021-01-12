/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type RepoList_repos = {
    readonly nodes: ReadonlyArray<{
        readonly createdAt: unknown;
        readonly isInOrganization: boolean;
        readonly isPrivate: boolean;
        readonly name: string;
        readonly primaryLanguage: {
            readonly name: string;
        } | null;
    } | null> | null;
    readonly " $refType": "RepoList_repos";
};
export type RepoList_repos$data = RepoList_repos;
export type RepoList_repos$key = {
    readonly " $data"?: RepoList_repos$data;
    readonly " $fragmentRefs": FragmentRefs<"RepoList_repos">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
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
          "name": "createdAt",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isInOrganization",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isPrivate",
          "storageKey": null
        },
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "Language",
          "kind": "LinkedField",
          "name": "primaryLanguage",
          "plural": false,
          "selections": [
            (v0/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "RepositoryConnection",
  "abstractKey": null
};
})();
(node as any).hash = '5b6bef87e6aaf461d797bca48c7ec1a7';
export default node;
