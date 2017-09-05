# Fees Register Admin Web Acceptance Tests

## Running tests 

To run tests the same they as they are run on the build server execute command: 

`docker-compose up integration-tests ; docker-compose down`

## Starting test development environment

1. Execute the following command to start local testing infrastructure:

   `docker-compose -f docker-compose.yml -f docker-compose.local.yml up -d fees-admin-web`
      
   Once it is up and running you'll have access the following access:
   - Fees Register Admin Console on https://localhost:3415
   - IDAM Authentication Application on https://localhost:3001
   - IDAM API on http://localhost:4551
   
2. Start Chrome Web Driver (https://sites.google.com/a/chromium.org/chromedriver/downloads):

   `chromedriver --port=4444 --verbose --url-base=/wd/hub`

3. Run tests:

   `yarn test`

4. Once you're finished, you can stop testing infrastructure by executing:

   `docker-compose down`
