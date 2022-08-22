## Learning_repo

Hello, I am Eugene.
There's a learning repository for the Node.js course. 

##### My learning task:
 1. Write Node.js script what will write  "Hello World" to stdout  at the start. It should finish in 10 seconds with  the message "Goodbye world". If user sends finish script early, then it should finish with message "Stopped by user after x seconds".
 
    >To run the project, type `node Task-1-hello-world.js` in the console, while you must be in the project directory.   
---
2. Write Node.js script that will check that the environment has docker, git, npm, nvm and node.js. For every tool write to stdout the tool version. If some tools don't exist, write to stderr message about it and finish process with right exit code. The tool names are stored in an array `tools`. If some tool is missing, you will see an error in the console.

    >To run the project, type `node Task-2-version-check.js` in the console, while you must be in the project directory.
---
3. Write a script which will take a string as an argument and calculate it md5 hash.

    >To run the project, type `node Task-3-create-hash.js <argument>` in the console, while you must be in the project directory. If the argument is empty, you will get an error.
---
4. Write script which will take a file path as argument and calculate md5 hash for its content using only build-in Node.js modules

    >To run the project, type `node Task-4-file-hash.js <path file>` in the console, while you must be in the project directory. If the file path is not specified or the file is empty or something else, you will get an error.
---
5. This task contains 2 subtasks: 
    - Write a script which will take a file path as argument and calculate md5 hash for its content using npm package what you will chose.
    - Find a package for functionality for subtask 2 that can be used with npm exec command. Write at readme.md example of usage.

    > To start, go to the project directory, install npm modules, type `npm install`.

    > To run the script, use `npm start <path file>`, while you must be in the project directory.
    
    > For independent use of the md5-file module, type `npm exec md5-file <path file>`, while you must be in the project directory.
---
 6. Download and extract the file https://drive.google.com/file/d/1ZQZQB5uyl_O3iK2O3GX4f_x0urrvNMJS/view?usp=sharing to the source code folder. The file content should be under gitignore. Create a script what will try to read the file content to memory. Write to readme.md stack trace and what error you had.

    > On startup I got the following error: 'Invalid string length'
    
    ---

    > Stack trace: 
    at ReadStream.<anonymous> (D:\Git\learning_repo\Task-6\Task-6-file-procces.js:10:43)  
    at ReadStream.emit (node:events:527:28)  
    at addChunk (node:internal/streams/readable:315:12)  
    at readableAddChunk (node:internal/streams/readable:289:9)  
    at ReadStream.Readable.push (node:internal/streams/readable:228:10)  
    at node:internal/fs/streams:275:14  
    at FSReqCallback.wrapper [as oncomplete] (node:fs:660:5)  

    ---

This happens because this is a V8 limitation. The maximum number of UTF16 codepoints in a string on 64-bit platforms has passed from -((-1) << 30 + 1) = 2147483648 = 2048M to ((1 << 29) - 24) = 536870888 = 512M (which is the current browser limit in Chrome too).

---
7. Create a script that will write to stdout all countries from the file with lines count. It should process the file line by line. This script uses streams and the readline module to read a large file line by line.

    >To run the project, type `node Task-7-read-file.js` in the console, while you must be in the project directory.

---
8. The processing is long and user doesn't understand how long he needs to wait. Add cli-progress package for better user experience. Think how you calculate process.

    >To run the project, type `node Task-8-calc-progress.js` in the console, while you must be in the project directory.

---
9. All changes at this task will be with source code for the last project. All next tasks should use code style.  

    - Configure .prettierrc. Default settings is okey.  
    - Configure .eslintrc.js with some node.js related config. It should have enabled no-console rule  
    - Fix eslint errors. Start with autofix, then use manual fix. Use // eslint-disable-next-line for no-console error.  
    - Add npm script format what will run prettier fix and then run eslint fix  
    - Add npm script lint what will run prettier check and then eslint check.  
    - Add precommit hook with husky and lint-staged which will format changed files. 

---
10. Create docker compose file that will include the LTS version with Postgres, RabbitMQ and Redis. All services should run on the same network and be exposed on the default port. Use environment variables for configuring docker containers.

    - `DB_URL=postgresql://postgres:password@localhost:5432/nodejs-db`
    - `CACHE_URL=redis://localhost:6379`
    - `BUS_URL=amqp://user:pass@localhost:5672`

---
11. Healtcheck:  

    - Create a REST service on the port that source code reads from env var PORT.  
    - Add to the service endpoint /random. The flow described here. Response format example {"resutl": true}.  
    - If response is maybe, then return 500. Add to the service /healthz endpoint. Add ping healtchcheck what uses HEAD http method for checking connectivity with yesno.wtf domain. It should be  returned 200, if service can access the yesno.wtf domain and return 500, if service can not.  
    - Add Dockerfile to your project.

---
12. Deploy application on AWS:
        - Deploy your Docker image from healtcheck task to target platform using cli commands.  
        - Add deploy instruction including used cli command to Readme.md  
        - Provide link to your running app  
    Instruction:
    1. Creating a Dockerfile.  
    2. Building a docker image: Now that we have defined our Dockerfile, let’s build the image with a title using -t: `docker build -t node-api .`
    3. Install the AWS CLI. https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html  
    4. Setup your AWS CLI. https://docs.aws.amazon.com/cli/latest/userguide/getting-started-quickstart.html  
    5.  Authenticate the Docker to your default registry. That way, the docker command can push and pull images with Amazon ECR.    
        `aws ecr get-login-password --region REGION | docker login --username AWS --password-stdin AWS_ACCOUNNT_ID.dkr.ecr.REGION.amazonaws.com` 
    6. Create a repository on Amazon ECR. Now that you have an image to push to Amazon ECR, you must create a repository to hold it. In this example, you create a repository called hello-world to which you later push the hello-world:latest image. To create a repository, run the following command:   
        `aws ecr create-repository --repository-name task-11 --image-scanning-configuration scanOnPush=true --region REGION`
    7. Push an image to Amazon ECR.  
            - List the images you have stored locally to identify the image to tag and push:  
            `docker images`    
            - Tag the image to push to your repository:    
            `docker tag node-api:latest AWS_ACCOUNNT_ID.dkr.ecr.REGION.amazonaws.com/task-11:latest`    
            - Push the image:    
            `docker push AWS_ACCOUNNT_ID.dkr.ecr.REGION.amazonaws.com/task-11:latest`    
    
    8. Create a new task definition. Tasks function like the docker run command of the Docker CLI but for multiple containers. From Task Definitions in the ECS dashboard, press on the Create new Task Definition (ECS) button.  
        
        Set a task name and use the following steps:  
            - Add Container: node-api (the one we pushed).    
            - Image: the URL to your container. Mine is 899246525245.dkr.ecr.eu-central-1.amazonaws.com/task-11    
            - Soft limit: 512    
            - Map 80 (host) to 3000 (container) for node-api    
            - Env Variables: NODE_ENV: production        
    
    9. Create the Amazon EKS cluster role. https://docs.aws.amazon.com/eks/latest/userguide/service_IAM_role.html#create-service-role  
   
    10. Create a Cluster. A cluster is the place where AWS containers run. They use configurations similar to EC2 instances. 
        Define the following:     
            - Cluster name: node-api-cluster  
            - EC2 instance type: t2.micro  
            - Number of instances: 1  
            - EBS storage: 22  
            - Key pair: None  
            - VPC: New  
        When the process is complete, you may choose to click on “View cluster.
        
    11. Create a service to run it. Go to Task Definition > click node-api > click on the latest revision. Inside of the task definition, click on the actions dropdown and select Create servcie
        Use the following:  
            - Launch type: EC2  
            - Service name: demo-nodejs-app-service  
            - Number of tasks: 1   
      
    12. You’ll see its status as PENDING. Give it a little time and it will indicate RUNNING. Go to Cluster (through a link from the service we just created) > EC2 instances > Click on the container instance to reveal the public DNS.
      
    13. Use the public DNS to test our app! Mine is `ec2-3-70-225-2.eu-central-1.compute.amazonaws.com` 
      Use endpoints /random and /healthz.

--- 
13.  Telegram bot. Create telegram bot what supports these commands:
        - /about – provides short info about you
        - /links – provides list of your social links (github, linkedid, etc)
        - /start and /help – shows list of commands with reply markup  
     
        [My telegram bot.](https://telegram.me/About_Bondarenko_bot) Telegram bot deployed on Heroku.

---
14.