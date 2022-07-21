type matter<T> = (source: string) => ({
    data: T;
    content: string;
})

export default matter;