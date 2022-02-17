## FRONT_END:
 - React (Typescript)
 - SCSS (BEM, RSCSS, SMACSS) — modular e escalável
 - Redux (Saga)

## BACK_END:
  - NestJS (Prisma)

## LAMBDAS:
  
  - Using serverless framework for aws integration and template creation ``` https://www.serverless.com/framework/docs/getting-started ```
  - ENDPOINTS ``` under construction, no integration with dynamoDB ```
    ```
    ┌────────────────────────────────────────────────────────────────────────────┐
    │                                                                            │
    │   GET    | http://localhost:4001/dev/notifications                         │
    │   POST   | http://localhost:4001/dev/notifications                         │
    │   PUT    | http://localhost:4001/dev/notifications/{id}                    │
    │   GET    | http://localhost:4001/dev/notifications/{id}                    │
    │   DELETE | http://localhost:4001/dev/notifications/{id}                    │
    │                                                                            │
    └────────────────────────────────────────────────────────────────────────────┘
    ```
  - #### DEPLOY AWS:

    ``` 
      - unive-micro-service-prod	CREATE_IN_PROGRESS	2021-09-14 00:08:36 UTC-0300	The AWS CloudFormation template for this Serverless application
      - unive-micro-service-qa	UPDATE_COMPLETE	2021-09-14 00:01:11 UTC-0300	The AWS CloudFormation template for this Serverless application
      - unive-micro-service-dev	UPDATE_COMPLETE	2021-09-13 23:57:33 UTC-0300	The AWS CloudFormation template for this Serverless application
    ```

    unive-micro-service-qa	-	The AWS CloudFormation template for this Serverless application
    unive-micro-service-dev	-	The AWS CloudFormation template for this Serverless application

  - ### RUN ``` local ```
    - npm run local dev|qa ``` CMD: sls offline start --stage ```

  - ### RUN ``` aws ```
    - npm run deploy dev|qa ``` CMD: sls deploy --stage ```



## UI
 - https://www.figma.com/file/aAe8emYzBO2C5dY93U4rcw/Student-Dashboard?node-id=0%3A1

