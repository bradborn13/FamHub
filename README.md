# Huskøbet

## Git workflow

We use an industry standard called Gitflow, which is a branching model for git. Along with it, there is a gitflow toolkit (<https://github.com/nvie/gitflow>) that makes it easy it adhere to the workflow, which is recommended to use.

Watch this 5 minute introduction video <https://www.youtube.com/watch?v=xgo60yhetZk&t> which sums up the model pretty good.

When you are done watching that, read this article <https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow> and you should have enough info to start using it.

In addition to the above, here are a few tips that many have found useful using git on a regular basis:

    1. Commit early, commit often (<https://sethrobertson.github.io/GitBestPractices/#commit>)
    2. Keep your feature branch up to date. Ideally you should merge develop into you branch every time it is updated. If that is not feasible, a good rule of thumb is to do it once a day if the branch is not finished on the same day it was created. This helps you avoid "huge" merges
    3. Always merge develop into you feature branch before closing the feature branch. That way you can handle all merge conflicts in the feature branch and not on the develop branch.

## Git commit messages

We adhere to the _Conventional Commits_ specification <https://www.conventionalcommits.org/en> which is a consistent way of writing commit messages, used widely among the opensouce community and projects such as Angular.

## Branches

**_master:_** Should always contain the code that is currently in the production environment. This means:

    - Whenever a release or a hotfix is finished, the master branch which now contains the updated code should be deployed to production.
    - There should only be deployed to production from this branch

**_develop:_** Should always contain the code that is currently in the test environment. This means:

    - Whenever a feature branch is finished, "deploy-dev" should be run on the "develop" branch to update the test environment with the updated code.
    - Only "deploy-dev" should be used on this branch.
    - Use "serve-dev" if you wish to test locally.

**_feature branches:_** Should be used for every new feature: - Use git flow explained below to create a new feature branch - Only _serve-dev_ should be used on feature branches to test locally and once it's merged into develop you can deploy and test on the live test site.

**_bugfix branches:_** Should be used for every new bug fix: - Use git flow explained below. - Similarly to feature branches, test locally and once you finish the bugfix you can test on a deployed site.

**_hotfix branches:_** Should be used when a bug in the master branch needs to be fixed as soon as possible

## Pull requests

    Try to keep them short, focusing on small features and small fixes. When doing a big feature try to break it down into small chuncks. This will make code reviews easier to do.

### Naming your pull requests

    Please prefix every pull request you make with the following:
    "[WIP]" - for work in progress pull requests
    "[DONE]" - for pull requests where your work is done and that are ready to be reviewed

## GitFlow in practice

### Feature

**Start new feature** -> terminal command: _git flow feature start "feature-branch-name"_

    When running the command, git flow will automatically do the following:
    1. It will create a new local feature branch to which you will have to commit your new changes to.

**Publish new feature** -> terminal command: _git flow feature publish feature-branch-name_
note: you can skip branch name from the command if your local branch is currently on the one you wish to publish

    Running the command, git flow will automatically do the following:
    1. It will check if your're up to date with develop, otherwise you'll have to start over
    2. Pushes the remote branch onto the remote repository so you can create a pull request

    After you publish you will see a link in the terminal window that you can click to create a pull request.

**Finish feature** -> terminal command: _git flow feature finish feature-branch-name_
note: you can skip branch name from the command if your local branch is currently on the one you wish to finish

    Before running the command, be sure to create a pull request on bitbucked, and get it approved.

    When running the command, git flow will automatically do the following:
    1. Checks if develop has any changes, if so it will tell you to pull and start over, also checks
    if develop and origin/develop diverge, so make sure your local develop branch is up to date.
    2. Finishes the feature and merges it in and then closes the branch to keep the repository clean.

### Bugfix

**Start new bugfix** -> terminal command: _git flow bugfix start "bugfix-branch-name"_

    When running the command, git flow will automatically do the following:
    1. It will create a new local feature branch to which you will have to commit your new changes to.

**Publish new bugfix** -> terminal command: _git flow bugfix publish bugfix-branch-name_
note: you can skip branch name from the command if your local branch is currently on the one you wish to publish

    Running the command, git flow will automatically do the following:
    1. It will check if your're up to date with develop, otherwise you'll have to start over
    2. Pushes the remote branch onto the remote repository so you can create a pull request

    After you publish you will see a link in the terminal window that you can click to create a pull request.

**Finish bugfix** -> -> terminal command: _git flow bugfix finish bugfix-branch-name_
note: you can skip branch name from the command if your local branch is currently on the one you wish to finish

    Before running the command, be sure to create a pull request on bitbucked, and get it approved.

    When running the command, git flow will automatically do the following:
    1. Checks if develop has any changes, if so it will tell you to pull and start over, also checks
    if develop and origin/develop diverge, so make sure your local develop branch is up to date.
    2. Finishes the feature and merges it in and then closes the branch to keep the repository clean.

### Release

Note: A release will merge all the new changes from develop into master since the last version.

**Start new release** -> terminal command: _git flow release start "1.X.X"_

    When running the command, git flow will automatically do the following:
    1. First of gitflow will checks if you already have an open release branch running, if so it will abort

    When the git flow command has finished, a few more manual steps are needed
    1. Bump version number in package.json so it matches the versioning number of release you just created and commit the changes.
    2. All new code from develop since last release is tested, any bugs found will be fixed on the release branch
    3. Finish the release, see next section

**Finish release** > terminal command: _git flow release finish_

    When running the command, git flow will automatically do the following:
    1. Checks if origin master (meaning our master branch on bitbucket) has any changes, if so it will tell you to pull down and start over
    2. If master is up to date it will merge the release branch into master and then into develop.
    3. It will create a new tag with the version number

    When the git flow command has finished, a few more manual steps are needed
    1. Make sure you are on the master branch after the release has finished
    2. Deploy the changes to production
    3. Push master and develop to origin (bitbucket)
    4. Push the new tag that git flow created to origin (bitbucket)
    5. Delete the release branch

### Hotfix

**Start new hotfix** > terminal command: _git flow hotfix start "X.X.1"_

    When running the command, git flow will automatically do the following:
    1. First of gitflow will checks if you already have an open hotfix branch running, if so it will abort
    2. Then gitflow will automatically checkout the master branch and start the hotfix from there

    When the git flow command has finished, a few more manual steps are needed
    1. Bump version number in package.json so it matches the versioning number of hotfix you just created and commit the changes.
    2. Fix the bug/bugs
    3. Finish the hotfix, see next section

**Finish hotfix** > terminal command: _git flow hotfix finish_

    When running the command, git flow will automatically do the following:
    1. Checks if origin master (meaning our master branch on bitbucket) has any changes, if so it will tell you to pull down and start over
    2. Checks if you already have an open hotfix branch running, if so it will abort
    3. If master is up to date it will merge the hotfix branch into master and then into develop.
    4. It will created a new tag with the version number

    When the git flow command has finished, a few more manual steps are needed
    1. Make sure you are on the master branch after release has finished
    2. Deploy the changes to production
    3. Push master and develop to origin (bitbucket)
    4. Push the new tag that git flow created to origin (bitbucket)
    5. Delete the hotfix branch

## Versioning

Using package.json to keep track of versions, it should be updated whenever a hotfix or a release is started.

## Frontend dev setup

### Setup

1. yarn -> Download yarn if not already on your system and run the installer: <https://yarnpkg.com/en/docs/install>
2. When yarn is installed open a command prompt in the client dir and run **_yarn install_**

### yarn serve local scripts

- yarn serv

### Testing

*****

### Extensions (vsCode)

**Must have:**

- Tslint
- Prettier
- EditorConfig
- Vetur
- formatting toggle
