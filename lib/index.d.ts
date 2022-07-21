export const matter: (source: string) => ({
    content: string,
    data: FrontMatterData
})
export type FrontMatterData = {
    title: string,
    slug?: string,
    url?: string,
    created_at?: Date,
    published_at?: Date,
    tags?: string[],
    [customKey: string]: string | string[] | Date | undefined,
}