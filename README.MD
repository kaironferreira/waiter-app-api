# API FOR WAITER APP

## TECH'S 🛠️
- Express
- Typescrypt
- Multer
- Mongoose

## SCHEMA DATABASE 💾

### CATEGORY
- ID
- NAME
- ICON

### PRODUCT
- ID
- NAME
- DESCRIPTION
- IMAGEPATH
- PRICE
- INGREDIENTS [{NAME, ICON}]
- CATEGORYID
  
### ORDER
- ID
- TABLE
- STATUS ("WAITING", "IN_PRODUCTION", "DONE")
- CREATEDAT
- PRODUCTS [{PRODUCTID, QUANTITY}]