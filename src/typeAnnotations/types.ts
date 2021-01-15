export interface IRepository  {
    createdAt: string;
    isInOrganization: boolean;
    isPrivate: boolean;
    name: string;
    id: string;
    languages: {
        edges: IRepositoryLanguage[]
    };
    description?: string;
    assignableUsers?: { totalCount: 1 }
    homepageUrl?: string;
    owner: {
        __typename: string;
        avatarUrl: string;
        login: string;
        id: string;
    }
}

export interface IRepositoryLanguage {
    node: {
        color: string;
        name: string;
        id: string; },
    size: number;
}
