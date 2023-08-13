import { filter, genre, movie, moviesScheduleMonthWise } from "./app-data-types";

export const monthsData: Array<string> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export const filterData: filter = {
  genreId: 0,
  movieTitle: ''
};

export const moviesData: Array<movie> = [
  {
    title: "Now you see me",
    genreId: 1,
    releaseYear: "2013",
    runTime: "1h 55min",
    poster: "1.jpg"
  },
  {
    title: "Catch me if you can",
    genreId: 1,
    releaseYear: "2003",
    runTime: "2h 21min",
    poster: "2.jpg"
  },
  {
    title: "Spider man",
    genreId: 2,
    releaseYear: "2002",
    runTime: "2h 1min",
    poster: "3.jpg"
  },
  {
    title: "Final destination",
    genreId: 3,
    releaseYear: "2000",
    runTime: "1h 38min",
    poster: "4.jpg"
  }
]

export const genresData: Array<genre> = [
  {
    id: 1,
    name: 'Thriller'
  },
  {
    id: 2,
    name: 'Action'
  },
  {
    id: 3,
    name: 'Horrer'
  }
]

export const moviesScheduleMonthWiseData: Array<moviesScheduleMonthWise> = [
  {
    showMonth: '08',
    moviesScheduleDayWise: [{
      showDay: '25',
      movies: moviesData.slice(1, 3)
    },
    {
      showDay: '22',
      movies: moviesData.slice(0, 2)
    },
    {
      showDay: '19',
      movies: moviesData.slice(2, 4)
    }]
  },
  {
    showMonth: '07',
    moviesScheduleDayWise: [{
      showDay: '20',
      movies: moviesData.slice(0, 1)
    },
    {
      showDay: '12',
      movies: moviesData.slice(1, 4)
    },
    {
      showDay: '05',
      movies: moviesData.slice(0, 3)
    }]
  }
]