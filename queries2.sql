
SELECT *
FROM customers
where city = 'Paris' or country = 'Gemany';


SELECT *
FROM customers
order by country, city;

-- see a list of the first 5 customers sort the results by country
SELECT *
FROM customers
order by country
limit 5;

-- see a list of the first 5 customers sort the results by country descending
SELECT *
FROM customers
order by country desc
limit 5;

-- add data to tables
insert into Categories (categoryName, description)
values ('microsoft products', 'the most microsofty products on the market');

-- update a record
update categories
	set categoryName = 'Apple Products'
where categoryId = 9; -- do not forget the where when updating or all records will be updated

-- removing records
delete from categories 
where categoryId = 9; -- do not forget the where when deleting or all records will be deleted