export interface filter {
    genreId: number,
    movieTitle: string
}

export interface genre {
    id: number,
    name: string
}

export interface movie {
    title: string,
    genreId: number,
    releaseYear: string,
    runTime: string,
    poster?: string
}

export interface moviesScheduleDayWise {
    showDay: string,
    movies: Array<movie>
}

export interface moviesScheduleMonthWise {
    showMonth: string,
    moviesScheduleDayWise: Array<moviesScheduleDayWise>
}