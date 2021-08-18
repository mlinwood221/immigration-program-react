# ImmUI
Immigraters Questionnaire Module


For CICD - AWS CodePipeline - will vary based on branch
buildspec.yml on root
/public/appspec.yml
/public/deployscripts/*

For Enironemnt Variable
-   Create new .env.'yourenv'  (e.g .env.staging)
-   Add script command in package.json  
    (e.g .env.staging)
    - "build:staging": "env-cmd -f .env.staging react-scripts build",
    - "start:staging": "env-cmd -f .env.staging react-scripts start",
    This will grab the env variable from the .env.'yourenv' file accordingly 
- Then we can just use env var by calling process.env.'yourvar'

For CodeDeploy
-   As we are using the same codebuild for both staging/live pipepline, we need to find a way to tell which env var the codebuild should use.   
-   The logic is: base on the codebuild initiator (which pipeline is calling codebuild), codebuild will use different .env file accordingly
    Example:
      - |
        if [ "${CODEBUILD_INITIATOR}" = "codepipeline/IMM-UI-LIVE" ] ; then
          npm run build:prod;
        fi

