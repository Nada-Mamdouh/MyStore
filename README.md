# MyStore
<img src="https://github.com/Nada-Mamdouh/MyStore/blob/main/MyStore.gif" width="800" height="400"/>

## Table of contents
* [General info](#general-info)
* [Project features](#project-features)
* [Technologies](#technologies)
* [Setup](#setup)

## General info
This project is a simple e-commerce application built with Angular, it's project 1 for EgFWD diploma_Angular_cross_skilling_Sept. cohort.

## Project features
This project consists of these components:
  #### HeaderComponent:
      It's shared component displayed above the whole application, above all other components. Through this component we can navigate to 'Product-List'               component and 'Cart' component. It also contains cart icon that display number of total products added to cart.
  #### ProductListComponent:
      This component is the home component, it's compound of child components of 'Product-item' Component. It displays list of components.
  #### ProductItemComponent:
      The building block for Product list component, it contains product image, product name, product price, the user can select the amount and add the product       to cart. When click on product image we will route to 'ProductItemDetails' component.
  #### ProductItemDetailsComponent:
      It contains the same contents as ProductItemComponent.
  #### CartComponent:
      It contains list of products added to it, we can remove any one of them, as well as displaying the total order price,and another section contains form         where the user fill out with his checkout informations, such as: userfullname, address, credit card number. If the form inputs are valid you can submit         and complete the checkout process which then will route to 'ConfirmationComponent'.
  #### ConfirmationComponent:
      This component shows up when we perform the checkout and confirm the order, it displays fullname and the total order price.
  	
## Technologies
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.5.

## Setup
To run this project:

#### Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

#### Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

#### Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

#### Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

#### Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

#### Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
