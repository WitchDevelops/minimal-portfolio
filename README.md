# About

It's a frontend dev portfolio project ([FrontEnd mentor challenge](https://www.frontendmentor.io/challenges/minimalist-portfolio-website-LMy-ZRyiE)). Build in React using isolated components to the best of my current ability, deployed to Netlify.

## Challenge description

From the FrontEnd Mentor challenge description:
>Your users should be able to:
>
>* Click the "About Me" call-to-action on the homepage and have the screen scroll down to the next section
>* Receive an error message when the contact form is submitted if:
> * The Name, Email Address or Message fields are empty should show "This field is required"
> * The Email Address is not formatted correctly should show "Please use a valid email address"
>* View the optimal layout for the interface depending on their device's screen size
>* See hover and focus states for all interactive elements on the page

Despite I could easily build it in vanilla JS, I decided to push myself to practice React, routing and isolated components.

## Build with

* React (using React Router)
* SCSS and Bootstrap
* Isolated components (CSS modules library)

## Live

[Live on Netlify](https://roaring-dango-d529da.netlify.app/)

## Useful resources

### CSS modules

I've been reading about frontend architecture called atomic design and the principle really stick to me, because when left unchecked CSS styles can quickly get very messy. I wanted to put this principle into practice, starting with isolated components.

* [Introduction to what CSS modules are](https://dev.to/eransakal/how-to-isolate-component-styles-in-react-using-css-modules-mkm)
* [How to deal with multiple classes using CSS modules](https://www.codeconcisely.com/posts/react-css-modules-multiple-classes/)
* [GH repo with the library](https://github.com/css-modules/css-modules)

What I quickly learned:

* BEM naming practices don't really work here, either using "--" for variantions or kebab-case caused errors, so I had to rename all the classes to use underscores instead.

```css
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

```jsx
<header className={`${styles.home__intro} ${styles.padding_2}`}>
```

### react hooks

#### `useNavigate`

To move from one component to another. I used if for the page which displays details of each project and has those two buttons at the bottom. `useNavigate` helps to go to the specific URL, forward or backward pages.

* [what is it and how to use it](https://www.geeksforgeeks.org/reactjs-usenavigate-hook/)
* [Stack overflow question](https://stackoverflow.com/questions/64838587/how-to-properly-use-usehistory-from-react-router-dom)

```jsx
const navigate = useNavigate()
navigate('/')
```

#### `useLocation`

Useful hook to render a component based on the path. I am conditionally rendering the CTA component: it is displayed on every page BUT the `/contact`.
How to set it up:

```jsx
{/* define the location in question */}
const location = useLocation();
const isContactPage = location.pathname === "/contact";

{/* ... */}
return (
    <Routes>
        {/* ... */}
        {!isContactPage && <CTA />}
        {/* ... */}
    </Routes>
)
```

When using this the `<Router>` has to wrap the whole `<App>`.

## Attributions

* FrontEnd Mentor - design
* [Freepik/Flaticon](https://www.flaticon.com/free-icons/portfolio) - icon for the favicon
* [Favicon converter](https://favicon.io/favicon-converter/) - generated favicon pack
* [Form Bold](https://formbold.com/) - free form backend

## Performance

Needs work, but I don't know how to improve it. Can it be blamed on `create-react-app`?

![image](https://github.com/WitchDevelops/minimal-portfolio/assets/112077394/d4b62934-c0e6-4f65-96ba-a5355f13fd8e)

