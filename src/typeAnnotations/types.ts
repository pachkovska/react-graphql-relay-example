export interface IRepository  {
    createdAt: string;
    isInOrganization: boolean;
    isPrivate: boolean;
    name: string;
    primaryLanguage: {name: string; id: string};
    id: string;
    languages: {
        edges: []
    };
    description?: string;
}