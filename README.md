# Adonis fullstack application

This is the fullstack boilerplate for AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Session
3. Authentication
4. Web security middleware
5. CORS
6. Edge template engine
7. Lucid ORM
8. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

"home marketing pages"
home
- /home/find-job
- /home/find-room
- /home/post-job
- /home/host-room

- /sign-in
- /sign-up
  when signing up you have to complete additional forms if you want to host room, post jobs or are looking for a room and/or job

"post something pages" (requires logged in)
- post a job /post/job or /post/job-available
- post a room /post/room or /post/room-availble
- *post seeking for job /post/want-room
- *post want room /post/want-room

"view all listing pages"
- listings
  - for jobs /listings/jobs
  - for rooms /listings/rooms
  - *for jobseekers /listings/want-jobs
  - *for rooms wanted /listings/want-rooms
 additional filters include city/location/salary/

"apply for something pages" (requires logged in)
- apply for job /apply/job
- apply for room /apply/room
- *offer job to available jobseeker /apply/jobseeker
- *offer room to available renter /apply/renter

"accounts page" /my-account or /user/account
- overview of account details and any registration details
"dashoard pages"  (requires logged in) /dashboard or /user
- shows any adverts you've posted and any responses to that advert
