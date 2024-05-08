import { BehaviorSubject, Observable, map, of, switchMap, tap, throwError } from 'rxjs';
import { Category, Course } from './news.types';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class NewsService
{
    // Private
    private _categories: BehaviorSubject<Category[] | null> = new BehaviorSubject(null);
    private _course: BehaviorSubject<Course | null> = new BehaviorSubject(null);
    private _courses: BehaviorSubject<Course[] | null> = new BehaviorSubject(null);

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for categories
     */
    get categories$(): Observable<Category[]>
    {
        return this._categories.asObservable();
    }

    /**
     * Getter for courses
     */
    get courses$(): Observable<Course[]>
    {
        return this._courses.asObservable();
    }

    /**
     * Getter for course
     */
    get course$(): Observable<Course>
    {
        return this._course.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get categories
     */
    getCategories(): Observable<Category[]>
    {
        return this._httpClient.get<Category[]>('api/apps/news/categories').pipe(
            tap((response: any) =>
            {
                this._categories.next(response);
            }),
        );
    }

    /**
     * Get courses
     */
    getCourses(): Observable<Course[]>
    {
        return this._httpClient.get<Course[]>('api/apps/news/courses').pipe(
            tap((response: any) =>
            {
                this._courses.next(response);
            }),
        );
    }

    /**
     * Get course by id
     */
    getCourseById(id: string): Observable<Course>
    {
        return this._httpClient.get<Course>('api/apps/news/courses/course', {params: {id}}).pipe(
            map((course) =>
            {
                // Update the course
                this._course.next(course);

                // Return the course
                return course;
            }),
            switchMap((course) =>
            {
                if ( !course )
                {
                    return throwError('Could not found course with id of ' + id + '!');
                }

                return of(course);
            }),
        );
    }
}
