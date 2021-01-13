/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type RepoSingle_node = {
    readonly createdAt: unknown;
    readonly id: string;
    readonly description: string | null;
    readonly assignableUsers: {
        readonly totalCount: number;
    };
    readonly homepageUrl: unknown | null;
    readonly isInOrganization: boolean;
    readonly isPrivate: boolean;
    readonly name: string;
    readonly owner: {
        readonly avatarUrl: unknown;
        readonly login: string;
        readonly id: string;
    };
    readonly languages: {
        readonly " $fragmentRefs": FragmentRefs<"RepoLanguages_edges">;
    } | null;
    readonly " $refType": "RepoSingle_node";
};
export type RepoSingle_node$data = RepoSingle_node;
export type RepoSingle_node$key = {
    readonly " $data"?: RepoSingle_node$data;
    readonly " $fragmentRefs": FragmentRefs<"RepoSingle_node">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RepoSingle_node",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "createdAt",
      "storageKey": null
    },
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "description",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "UserConnection",
      "kind": "LinkedField",
      "name": "assignableUsers",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "totalCount",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "homepageUrl",
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
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "owner",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "avatarUrl",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "login",
          "storageKey": null
        },
        (v0/*: any*/)
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 100
        },
        {
          "kind": "Literal",
          "name": "orderBy",
          "value": {
            "direction": "DESC",
            "field": "SIZE"
          }
        }
      ],
      "concreteType": "LanguageConnection",
      "kind": "LinkedField",
      "name": "languages",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "RepoLanguages_edges"
        }
      ],
      "storageKey": "languages(first:100,orderBy:{\"direction\":\"DESC\",\"field\":\"SIZE\"})"
    }
  ],
  "type": "Repository",
  "abstractKey": null
};
})();
(node as any).hash = '01bdd8e4745ba67d956f687d67352295';
export default node;
