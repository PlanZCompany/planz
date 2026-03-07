Implement step 2 from `02-payload-schema-foundation.md`.

Goal:
Create the initial real Payload collections for this project.

Collections to create:

1. Projects
- title: text
- shortDescription: text
- startedAt: date, optional
- deadlineAt: date, optional
- releasedAt: date, optional
- fullDescription: richText
- estimate: richText, optional
- ideas: relationship to Ideas, hasMany true
- tasks: relationship to Tasks, hasMany true
- members: relationship to Members, hasMany true

2. Ideas
- title: text
- description: richText

3. Tasks
- title: text
- description: richText
- status: select with values pending, review, done
- payStatus: select with values pending, done
- estimate: richText
- comments: array of text rows
- receivedAt: date
- members: relationship to Members, hasMany true

4. Members
- auth-enabled collection
- name: text
- email: email
- role: select with values admin, viewer

Requirements:
- keep the schema minimal and clean
- use proper Payload field types
- keep existing Payload bootstrap working
- remove or replace the temporary test collection if needed
- do not build frontend UI yet
- do not add shadcn/ui yet
- do not refactor unrelated files

Deliverables:
- all collection files created
- payload config updated
- short summary of changed files
- mention manual steps I need to run