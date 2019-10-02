interface BaseDataSource {
    findById<T>(field: string, id: string | number): Promise<T>;
}


