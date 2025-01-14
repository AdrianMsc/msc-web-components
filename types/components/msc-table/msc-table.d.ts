export declare class MscTable {
    comps: {
        category: string;
        components: {
            name: string;
            statuses: {
                platform: string;
                status: string;
            }[];
            comment: string;
            id: number;
        }[];
    }[];
    render(): any;
}
