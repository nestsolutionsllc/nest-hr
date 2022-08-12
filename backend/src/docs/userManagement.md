# User Management Usage Guidance

**Implemented Methods**
| Methods | Purpose |
| ------ | ------ |
| `tokenCheck` | Takes token from authorization and checks if the user is authorized or not and passes userInfo to locals for next middleware usage|
| `checkPermission` | Takes 2 input parameters ("module", "action") Module is for where you want to access (eg: salary) Action is for what kind of operation you want to do with the data/collection (e.g. update)|
| `authLogin` | Takes Login information and Check if the user is Eligible to login, And if s/he is Eligible to login then Generate Token (JWT) and return |
| `authRegister` | |

**How to use checkPermission method:**
_*For example*: if you want to create one collection called `SecretCollection` in the DB and you want to restrict this collection API`s for only certain people._

- Note that GROUP always contains all the permissions! And the user will have a groups list that s/he belongs
- SuperAdmin or HR need to create a group with permissions about `SecretCollection` (read/create/update/delete) with the following body

```
        {
            _id: "123123"
            "name": "group that can access Secret Collections",
            "permissions": {
                "sCollection": {
                    "read": true;
                }
            }
        }
```

- Now add `user1` to this group:

```
        {
            "userName": "user1",
            ...
            userGroups: ["123123","1111"]
        }
```

- Now to the router you can give `checkPermission` method to restrict only to whom has the permission:

```
    userRouter.get("/scollection", [tokenCheck, checkPermission({ module: "sCollection", action: "read" })], getsCollections);
```

**How to check if someone is permitted to do some certain action:**

- Always use `tokenCheck` method before using `checkPermission`!!! \*_Reason:_ `tokenCheck` method decode the token and passes userInfo to `checkPermission`
- Make Request with Authorization: Bearer Token

## Update User Guide

- To update some certain part of user information (other than groups)

```
{
    "userId": "62e893a5784f8957b14a8887",   # user id that you want to do an operation
    "update": {                             # new information that you want to update
      "email": "test2@gmail.com"
    },
}
```

- To add a user to a group (example request)

```
// note that you need to provide action but not update
{
    "userId": "62e893a5784f8957b14a8887",   # user id that you want to do an operation
    "groupId": "62f079cb7d09e5aa9cb5588e",  # group id that you want to remove or add
    "action":"push"                         # use "pull" to remove from group
}
```
