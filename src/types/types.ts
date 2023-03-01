export interface IUser {
    id: number;
    username: string;
    email: string;
    address: string | undefined;
}

export interface IData {
    meta: {
        currentPage: number;
        perPage: number;
        totalPages: number;
      };
      items: IUser[];
}