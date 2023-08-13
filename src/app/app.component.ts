import { Component } from '@angular/core';
import { filter, genre, movie, moviesScheduleDayWise, moviesScheduleMonthWise } from './app-data-types';
import { filterData, genresData, monthsData, moviesData, moviesScheduleMonthWiseData } from './app-data'

@Component({
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /**
   * Component variables
   */
  filter: filter = filterData;
  months: Array<string> = monthsData;
  genres: Array<genre> = genresData;
  movies: Array<movie> = moviesData;
  moviesScheduleMonthWise: Array<moviesScheduleMonthWise> = moviesScheduleMonthWiseData;
  moviesScheduleMonthWiseMaster: Array<moviesScheduleMonthWise> = [];

 /**
 * As soon as the component gets initialized the movie master copy will be set
 */
  ngOnInit(){
    this.moviesScheduleMonthWiseMaster = structuredClone(this.moviesScheduleMonthWise);
  }

  /**
   * Return the name of the month by number of month
   * @param monthNum - number of month ex 01 => Jan
   * @returns month name
   */
  getMonthName(monthNum: string){
    return this.months[parseInt(monthNum)-1];
  }

  /**
   * Returns genre name by its id
   * @param id - id of genre
   * @returns genre name
   */
  getGenreName(id: number){
    let genreName: string = '';
    this.genres.forEach((value) => {
      if(value.id === id){
        genreName =  value.name;
      }
    })
    return genreName;
  }

  /**
   * Calculates the row span required for month's <td>
   * @param movieScheduleMonthWise - a perticular months complete move data
   * @returns - row span required
   */
  getRowSpanForMonth(movieScheduleMonthWise: moviesScheduleMonthWise){
    let dayWise: Array<moviesScheduleDayWise> = movieScheduleMonthWise.moviesScheduleDayWise;
    let rowSpan = dayWise.length+1;
    dayWise.forEach((value: moviesScheduleDayWise) => {
      rowSpan += value.movies.length;
    })
    return rowSpan;
  }

  /**
   * This is a common filter function which will help to compare like or exact wrt genre or title
   * @param objKey - key of move object
   * @param value - user input value to compare
   * @param doExactMatch - flag to say the type of compare required either exact or just like
   */
  filterObjectArray(objKey: keyof movie, value?: string | number, doExactMatch: boolean = false){
    let thisObj = this;
    this.moviesScheduleMonthWise.forEach((moviesScheduleMonthWiseObj: moviesScheduleMonthWise, key1: number) => {
      moviesScheduleMonthWiseObj.moviesScheduleDayWise.forEach((moviesScheduleDayWiseObj, key2)=>{
        thisObj.moviesScheduleMonthWise[key1].moviesScheduleDayWise[key2].movies = moviesScheduleDayWiseObj.movies.filter((movie: movie) => {
          if(doExactMatch && movie[objKey] === Number(value)){
            return true;
          } else if(!doExactMatch && String(movie[objKey]).toLowerCase().indexOf(String(value)) === 0){
            return true;
          } 
          return false;
        })
      })
    })
  }

  /**
   * Filtering movies data on user inputs
   * @returns - void but at the object level filtered data will be stored
   */
  filterMovies(){
    this.moviesScheduleMonthWise = structuredClone(this.moviesScheduleMonthWiseMaster);
    type movieKey = keyof movie;
    if(Number(this.filter.genreId)){
      this.filterObjectArray('genreId' as movieKey, String(this.filter.genreId), true);
    }
    if(this.filter.movieTitle.trim()){
      this.filterObjectArray('title' as movieKey, this.filter.movieTitle.trim().toLowerCase(), false);
      return;
    }
  }
}
