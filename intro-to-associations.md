
```no-highlight
yarn install
createdb intro-to-associations_development

cd server
yarn migrate:latest
```

User:

- username (required)
- email (required)

Status:

- body (required)
- privacy (required)
- belongs to User (required)

Belongs to Association - `bigInteger`

`unsigned`: positive integer only

`index`: improves query time against this column if there are many records, and if a number

`references`: our queries will work without this.
however, this adds a dependency such that a Status can't be added without a valid User
and when a User is deleted it will also delete the Users associated Statuses


`relationmapping`

- relation
- modelClass
- join - from & to