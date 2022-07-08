
export interface IMovie {
    id?: number;
    title: string;
    description: string;
    release_date: string;
    genres: number[];
    image?: string;
}

export interface IMoviesList {
    size: number;
    results: IMovie[];
}

export interface IMovieRequestDTO extends IMovie {
    director?: string;
    cast: any[];
}