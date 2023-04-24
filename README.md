# Let's build an app to practice relationMappings


```
yarn install
createdb intro-to-associations_development

cd server
yarn migrate:latest
```

### Users 
- username 
- email

### Beanie Babies
- name 
- color 
- releaseYear
- hasTag



- create migrations (unsigned, index, references, notNullable)
- add relationMappings 
- implement in router



Serializers 
- we need at least the user serializer
- one method for index
- one method for show with related "statuses"
- time permitting, serialize the statuses 