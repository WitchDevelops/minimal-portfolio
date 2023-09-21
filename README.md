# About

It's a frontend dev portfolio project ([FrontEnd mentor challenge](https://www.frontendmentor.io/challenges/minimalist-portfolio-website-LMy-ZRyiE)). Build in React using isolated components to the best of my current ability, deployed to Netlify.

# Challenge description

From the FrontEnd Mentor challenge description:
>Your users should be able to:
>
>* Click the "About Me" call-to-action on the homepage and have the screen scroll down to the next section
>* Receive an error message when the contact form is submitted if:
>    * The Name, Email Address or Message fields are empty should show "This field is required"
>    * The Email Address is not formatted correctly should show "Please use a valid email address"
>* View the optimal layout for the interface depending on their device's screen size
>* See hover and focus states for all interactive elements on the page

Despite I could easily build it in vanilla JS, I decided to push myself to practice React, routing and isolated components.

# Build with

* React (using React Router)
* SCSS and Bootstrap
* Isolated components (CSS modules library)

# Live

[Live on Netlify](https://roaring-dango-d529da.netlify.app/)

# Useful resources

## CSS modules

I've been reading about frontend architecture called atomic design and the principle really stick to me, because when left unchecked CSS styles can quickly get very messy. I wanted to put this principle into practice, starting with isolated components.
* [Introduction to what CSS modules are](https://dev.to/eransakal/how-to-isolate-component-styles-in-react-using-css-modules-mkm)
* [How to deal with multiple classes using CSS modules](https://www.codeconcisely.com/posts/react-css-modules-multiple-classes/)
* [GH repo with the library](https://github.com/css-modules/css-modules)

What I quickly learned:
* BEM naming practices don't really work here, either using "--" for variantions or kebab-case caused errors, so I had to rename all the classes to use underscores instead.

```
.box--red {
    BAD (compilation errors)
}
.box-red {
    still BAD (doesn't compile)
}
.box__red {
    GOOD (compiles)
}
```
* when using multiple classes in JSX one has to precede the className declaration with the dolalr sign and basically template literals syntax. Like this:
```
<header className={`${styles.home__intro} ${styles.padding_2}`}>
```