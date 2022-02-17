### About

 - Micro-service for application UNIVE ``` [url](https://github.com/rafaelcarvalhocaetano/Unive) ``` with NodeJS and Lambda AWS.
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

  #### deploy AWS
  ```
  
  unive-micro-service-prod	CREATE_IN_PROGRESS	2021-09-14 00:08:36 UTC-0300	The AWS CloudFormation template for this Serverless application
  unive-micro-service-qa	UPDATE_COMPLETE	2021-09-14 00:01:11 UTC-0300	The AWS CloudFormation template for this Serverless application
  unive-micro-service-dev	UPDATE_COMPLETE	2021-09-13 23:57:33 UTC-0300	The AWS CloudFormation template for this Serverless application
  
  ```



unive-micro-service-qa	-	The AWS CloudFormation template for this Serverless application
unive-micro-service-dev	-	The AWS CloudFormation template for this Serverless application

### RUN ``` local ```
 - npm run local dev|qa ``` CMD: sls offline start --stage ```

### RUN ``` aws ```
 - npm run deploy dev|qa ``` CMD: sls deploy --stage ```
