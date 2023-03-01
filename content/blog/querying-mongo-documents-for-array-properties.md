---
external: false
draft: false
title: "Querying Mongodb documents for array properties"
date: 2017-04-30
---

Ladies and gents, I’m just posting one short reminder to myself and anyone keen to find out how do
we query array type fields in `Mongodb`.

Let’s start by inserting couple of documents (using `Mongodb` shell) which we’ll use for querying
afterwards:

```javascript
db.developers.insertMany([
  { name: "John", languages: ["java", "php", "javascript"] },
  { name: "Jack", languages: ["java", "c", "c++"] },
  { name: "Jim", languages: ["node", "java"] }
]);
```

Now, when we run the following command in shell:

```javascript
db.developers.find();
```

Command output confirms all test documents are successfully stored:

```json
{
    "_id" : ObjectId("587e6ec738cbd11c2dc46932"),
    "name" : "John",
    "languages" : [
        "java",
        "php",
        "javascript"
    ]
}
{
    "_id" : ObjectId("587e6ec738cbd11c2dc46933"),
    "name" : "Jack",
    "languages" : [
        "java",
        "c",
        "c++"
    ]
}
{
    "_id" : ObjectId("587e6ec738cbd11c2dc46934"),
    "name" : "Jim",
    "languages" : [
        "node",
        "java"
    ]
}
```

Now, say you want to find all documents that have “java” as the first entry in languages array
field, we do by using following syntax:

```javascript
db.developers.find({ "languages.0": "java" });
```

Command output confirms we matched correct document(s):

```json
{
    "_id" : ObjectId("587e6ec738cbd11c2dc46932"),
    "name" : "John",
    "languages" : [
        "java",
        "php",
        "javascript"
    ]
}
{
    "_id" : ObjectId("587e6ec738cbd11c2dc46933"),
    "name" : "Jack",
    "languages" : [
        "java",
        "c",
        "c++"
    ]
}
```

Array position is indexed as expected starting by zero, so in case we want all docs having “java”
at second position, we do it like this:

```javascript
db.developers.find({ "languages.1": "java" });
```

Next, if we want to list all documents that contain “java” at any position inside languages array
field, we do it like this:

```javascript
db.developers.find({ languages: "java" });
```

Command output lists all initially inserted documents:

```json
{
    "_id" : ObjectId("587e6ec738cbd11c2dc46932"),
    "name" : "John",
    "languages" : [
        "java",
        "php",
        "javascript"
    ]
}
{
    "_id" : ObjectId("587e6ec738cbd11c2dc46933"),
    "name" : "Jack",
    "languages" : [
        "java",
        "c",
        "c++"
    ]
}
{
    "_id" : ObjectId("587e6ec738cbd11c2dc46934"),
    "name" : "Jim",
    "languages" : [
        "node",
        "java"
    ]
}
```

Finally, if we want to find all documents that have languages field exact to let’s say:

```json
["java", "php", "javascript"]
```

we do it like this:

```javascript
db.developers.find({ languages: ["java", "php", "javascript"] });
```

Command output prints something like:

```json
{
  "_id": ObjectId("587e6ec738cbd11c2dc46932"),
  "name": "John",
  "languages": ["java", "php", "javascript"]
}
```

I’m primary keeping this as a quick reminder to myself, but will be very happy if someone else finds it useful!

That was all for today! Hope you liked it!
