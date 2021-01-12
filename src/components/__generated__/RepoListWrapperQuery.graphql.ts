/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type RepoListWrapperQueryVariables = {
    login: string;
};
export type RepoListWrapperQueryResponse = {
    readonly user: {
        readonly repositories: {
            readonly pageInfo: {
                readonly startCursor: string | null;
            };
            readonly totalCount: number;
            readonly totalDiskUsage: number;
            readonly " $fragmentRefs": FragmentRefs<"RepoList_repos">;
        };
    } | null;
};
export type RepoListWrapperQuery = {
    readonly response: RepoListWrapperQueryResponse;
    readonly variables: RepoListWrapperQueryVariables;
};



/*
query RepoListWrapperQuery(
  $login: String!
) {
  user(login: $login) {
    repositories(orderBy: {field: CREATED_AT, direction: DESC}, first: 100, privacy: PUBLIC) {
      pageInfo {
        startCursor
      }
      totalCount
      totalDiskUsage
      ...RepoList_repos
    }
    id
  }
}

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

fragment RepoList_repos on RepositoryConnection {
  nodes {
    name
    ...RepoSingle_node
    id
  }
}

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
    __typename
    avatarUrl
    login
    id
  }
  languages(first: 100, orderBy: {field: SIZE, direction: DESC}) {
    ...RepoLanguages_edges
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "login"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "login",
    "variableName": "login"
  }
],
v2 = {
  "kind": "Literal",
  "name": "first",
  "value": 100
},
v3 = [
  (v2/*: any*/),
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": {
      "direction": "DESC",
      "field": "CREATED_AT"
    }
  },
  {
    "kind": "Literal",
    "name": "privacy",
    "value": "PUBLIC"
  }
],
v4 = {
  "alias": null,
  "args": null,
  "concreteType": "PageInfo",
  "kind": "LinkedField",
  "name": "pageInfo",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "startCursor",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalDiskUsage",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RepoListWrapperQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v3/*: any*/),
            "concreteType": "RepositoryConnection",
            "kind": "LinkedField",
            "name": "repositories",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "RepoList_repos"
              }
            ],
            "storageKey": "repositories(first:100,orderBy:{\"direction\":\"DESC\",\"field\":\"CREATED_AT\"},privacy:\"PUBLIC\")"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RepoListWrapperQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v3/*: any*/),
            "concreteType": "RepositoryConnection",
            "kind": "LinkedField",
            "name": "repositories",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Repository",
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": [
                  (v7/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "createdAt",
                    "storageKey": null
                  },
                  (v8/*: any*/),
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
                      (v5/*: any*/)
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
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "owner",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "__typename",
                        "storageKey": null
                      },
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
                      (v8/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": [
                      (v2/*: any*/),
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
                              (v8/*: any*/),
                              (v7/*: any*/)
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
                    "storageKey": "languages(first:100,orderBy:{\"direction\":\"DESC\",\"field\":\"SIZE\"})"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "repositories(first:100,orderBy:{\"direction\":\"DESC\",\"field\":\"CREATED_AT\"},privacy:\"PUBLIC\")"
          },
          (v8/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "4cdadcd30c65496a90adbe5a56caddb3",
    "id": null,
    "metadata": {},
    "name": "RepoListWrapperQuery",
    "operationKind": "query",
    "text": "query RepoListWrapperQuery(\n  $login: String!\n) {\n  user(login: $login) {\n    repositories(orderBy: {field: CREATED_AT, direction: DESC}, first: 100, privacy: PUBLIC) {\n      pageInfo {\n        startCursor\n      }\n      totalCount\n      totalDiskUsage\n      ...RepoList_repos\n    }\n    id\n  }\n}\n\nfragment RepoLanguages_edges on LanguageConnection {\n  edges {\n    node {\n      color\n      id\n      name\n    }\n    size\n  }\n}\n\nfragment RepoList_repos on RepositoryConnection {\n  nodes {\n    name\n    ...RepoSingle_node\n    id\n  }\n}\n\nfragment RepoSingle_node on Repository {\n  createdAt\n  id\n  description\n  assignableUsers {\n    totalCount\n  }\n  homepageUrl\n  isInOrganization\n  isPrivate\n  name\n  owner {\n    __typename\n    avatarUrl\n    login\n    id\n  }\n  languages(first: 100, orderBy: {field: SIZE, direction: DESC}) {\n    ...RepoLanguages_edges\n  }\n}\n"
  }
};
})();
(node as any).hash = 'ac62cf1106c533d5481b47ce26084710';
export default node;
