/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type RepoLanguages_edges = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly color: string | null;
            readonly id: string;
            readonly name: string;
        };
        readonly size: number;
    } | null> | null;
    readonly " $refType": "RepoLanguages_edges";
};
export type RepoLanguages_edges$data = RepoLanguages_edges;
export type RepoLanguages_edges$key = {
    readonly " $data"?: RepoLanguages_edges$data;
    readonly " $fragmentRefs": FragmentRefs<"RepoLanguages_edges">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RepoLanguages_edges",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "LanguageEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Language",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "color",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "id",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "name",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "size",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "LanguageConnection",
  "abstractKey": null
};
(node as any).hash = '2efef5c86c4dff6b66857561eb4ed819';
export default node;
