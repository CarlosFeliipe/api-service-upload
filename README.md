# Image Upload - with Serverless Nodejs Typescript and S3

### Configuration

```
$ npm install
$ create .env with S3_ACCESS_KEY and S3_SECRETS_KEY
$ create bucket s3 in aws
$ put the name of your aws bucket in the serverless file in the project root, in environment
```

### Deployment

```
$ run in terminal -> serverless config credentials -o --provider aws --key=MyKeyAWS --secret MySecretsAws
$ npm run deploy
```

### Run Project

```
$ npm run local
```