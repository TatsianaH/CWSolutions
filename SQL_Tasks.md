*1*
https://www.hackerrank.com/challenges/revising-the-select-query/problem
```sql
select *
from city
where countrycode = 'usa' and population > 100000
```

*2*
https://www.hackerrank.com/challenges/weather-observation-station-5/problem
Task: Query the two cities in STATION with the shortest and longest CITY names, as well as their respective lengths (i.e.: number of characters in the name). If there is more than one smallest or largest city, choose the one that comes first when ordered alphabetically.
```sql
select city, length (city)
from station
order by length(city) ASC, city limit 1;

select city, length (city)
from station
order by length(city) DESC, city limit 1;
```
*3*
Query the list of CITY names starting with vowels (i.e., a, e, i, o, or u) from STATION. Your result cannot contain duplicates.
```sql
select distinct city
from station 
where city like 'A%' 
or  city  LIKE 'E%' 
or city  LIKE 'I%'
 or city  LIKE 'O%' 
or city  LIKE 'U%';
```