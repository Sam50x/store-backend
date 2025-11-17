# Endpoints

## [POST] /products

- receives an object of product data from a form like this formula: { name: string, price: number, category: string, variations: [ { name: string, image: string, in_stock: number, }, ] }
- validates all data with the correct data types
- creates an image upload for each file using Notion API then stores the url in an object with the other variation data
- creates the object using prisma
