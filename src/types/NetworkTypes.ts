class Response<T> {
    data: T;
    // Additional data?
    constructor(data: T) {
        this.data = data;
    }
}

export { Response };
