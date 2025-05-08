# React + TypeScript + Vite


# Preconditions to run the the full-stack app

Docker, NVM


# Context

I created a healthcare themed React + Vite app, the app is pretty simple - it has a router and we can navigate to different pages; the functionality I did prepare was routing, landing page, CTA, banner I used shadui to get components that look clean along with tailwind which has a nice polished feel and provides me a lot of components I need out of the box right away. I put some effort into the Banner or /home because it's important in the Healthcare field to highlight the services and benefits along with testimonials relativley quickly to build early trust - it wasn't until I started building my own products I paid way more attention to this when doing A/B testing and analytics, things like colours, placement of the CTA, testimonials play a huge part if we look at some data from Hotjar and other analytics.

** Note I did not include build settings in this or have tried to build it for a prod runtime env, we can assume for now it's in dev mode. Additionally there is only test coverage on the required component.

### Technical requirements

Credit Card Validator

Objectives:

Technical Requirements:
● Use React, node.js and typescript for your application
● Authentication and DB are not needed
Functional Requirements:
● The main purpose of this application is to create a webpage to validate a Credit Card
number **
● Use the Luhn checksum algorithm for validation
● Validation should happen in the back-end (API) not the frontend
Minimal UI Requirements:
● At least one text box should be included for credit card input
● Screen should display if the number is valid or not
Delivery


# ENV
add a new .env file
bash```
echo "VITE_BASE_URL=http://localhost:4320" >> .env

```


## Run Tests

<npm run test>

## Linter

<npm run lint>

## Formatter

<npm run format> 

## Run app in dev mode
<npm run dev>


## Tailwind CSS guide I followed for V4

https://tailwindcss.com/docs/upgrade-guide

## Node Version

Use Node version 20 via npm.

<nvm use 20> if not available download the target node version


