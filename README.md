## Task overview:

### Frontend:

### Docker requriement:

1. Containerize the NextJS portion, ensuring it runs in its own Docker container. (DONE)
1. Set up a PostgreSQL container to host the database. (DONE)
1. Use Docker-compose to define your application in a YAML file. (DONE)

### Backend:

1. Utilize NextJS's server environment as your backend. (DONE)
1. Implement Prisma as your ORM for querying the PostgreSQL database. (DONE)
1. Define your database schema using Prisma's schema file. (DONE)

### Form Submission Logic:

1. When the form is submitted, create a batch matching the entered details. (DONE)
1. The batch should have machine numbers, with the quantity matching the entered quantity in the form. (DONE)
1. Each machine number should have the model, date matching the batch submission, and a random string of numbers (serial_number) (DONE)
