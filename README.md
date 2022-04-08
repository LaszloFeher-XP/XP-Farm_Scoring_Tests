[![Run Tests](https://github.com/LaszloFeher-XP/XP-Farm_Scoring_Tests/actions/workflows/test.yml/badge.svg)](https://github.com/LaszloFeher-XP/XP-Farm_Scoring_Tests/actions/workflows/test.yml/badge.svg) 
"[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=LaszloFeher-XP_XP-Farm_Scoring_Tests&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=LaszloFeher-XP_XP-Farm_Scoring_Tests)" 
"[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=LaszloFeher-XP_XP-Farm_Scoring_Tests&metric=bugs)](https://sonarcloud.io/summary/new_code?id=LaszloFeher-XP_XP-Farm_Scoring_Tests)" 
"[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=LaszloFeher-XP_XP-Farm_Scoring_Tests&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=LaszloFeher-XP_XP-Farm_Scoring_Tests)" 
"[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=LaszloFeher-XP_XP-Farm_Scoring_Tests&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=LaszloFeher-XP_XP-Farm_Scoring_Tests)" 
"[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=LaszloFeher-XP_XP-Farm_Scoring_Tests&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=LaszloFeher-XP_XP-Farm_Scoring_Tests)" 
"[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=LaszloFeher-XP_XP-Farm_Scoring_Tests&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=LaszloFeher-XP_XP-Farm_Scoring_Tests)" 
"[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=LaszloFeher-XP_XP-Farm_Scoring_Tests&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=LaszloFeher-XP_XP-Farm_Scoring_Tests)" 
"[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=LaszloFeher-XP_XP-Farm_Scoring_Tests&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=LaszloFeher-XP_XP-Farm_Scoring_Tests)" 
"[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=LaszloFeher-XP_XP-Farm_Scoring_Tests&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=LaszloFeher-XP_XP-Farm_Scoring_Tests)" 
[![Open Issues](https://img.shields.io/github/issues/LaszloFeher-XP/XP-Farm_Scoring_Tests/badge.svg)](https://github.com/LaszloFeher-XP/XP-Farm_Scoring_Tests/issues) 

[![Build Status](coverage/badge-branches.svg)](coverage/badge-branches.svg) 
[![Build Status](coverage/badge-functions.svg)](coverage/badge-functions.svg) 
[![Build Status](coverage/badge-lines.svg)](coverage/badge-lines.svg) 
[![Build Status](coverage/badge-statements.svg)](coverage/badge-statements.svg) 
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) 

[Metrics report](metrics.md) 
[Complexity report](complexity-report.md) 

# Scoring Tests

... 

## Instructions 

A new school year is approaching, which also means students will be taking tests.

The tests in this kata are to be graded in different ways. A certain number of points will be given for each correct answer and a certain number of points will be deducted for each incorrect answer. For ommitted answers, points will either be awarded, deducted, or no points will be given at all.

Return the number of points someone has scored on varying tests of different lengths.

The given parameters will be:

    An array containing a series of 0s, 1s, and 2s, where 0 is a correct answer, 1 is an omitted answer, and 2 is an incorrect answer.
    The points awarded for correct answers
    The points awarded for omitted answers (note that this may be negative)
    The points deducted for incorrect answers (hint: this value has to be subtracted)

Note: The input will always be valid (an array and three numbers)
Examples

#1:
```sh
[0, 0, 0, 0, 2, 1, 0], 2, 0, 1  -->  9
```
because:

- 5 correct answers: 5*2 = 10
- 1 omitted answer: 1*0 = 0
- 1 wrong answer: 1*1 = 1

which is: 10 + 0 - 1 = 9

#2:
```sh
[0, 1, 0, 0, 2, 1, 0, 2, 2, 1], 3, -1, 2)  -->  3
```
because: 4*3 + 3*-1 - 3*2 = 3


## User Stories 

### 1. First story 
As a user
I want to count the correct anwsers
So that creat the logic for checking zeros

#### Scenarios 

#### 1. 
Given [0, 1, 2, 0, 0], 1, 0, 0
When logic
Then return 3

#### 2. 
Given [0, 1, 2, 0, 0], 2, 0, 0
When logic
Then return 6

#### 3. 
Given [0, 1, 2, 0, 0, 0], 3, 0, 0
When logic
Then return 12

### 2. First story 
As a user
I want to count the omitted anwsers
So that creat the logic for checking ones

#### Scenarios 

#### 4. 
Given [1, 1, 2, 0, 1], 0, 2, 0
When logic
Then return 6

#### 5. 
Given [1, 1, 2, 0, 1], 2, -2, 0
When logic
Then return -6

# Setting up the environment 

## To install dependencies 

To install dependencies, run the following: 

```npm install``` 

## To run the tests 

To run the tests, there is a script in the project root called test. It calculates code coverage, incorporates watch mode, and prints in verbose mode, so all test file's test report will be visible. Alternatively, you can achieve the same with the command the script contains: 

```npm test -- --watchAll --collect-coverage --verbose```  

