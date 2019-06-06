---
title: Unplugged Retreat
type: tech-project
content_order: 2
image: "./image.png"
image_description: "Screenshot of Unplugged Retreat Project"
main_skills: |
    Adobe Photoshop, HTML5, CSS3, Responsive Web Design, Media Queries, Flexbox
description: |
    Developed a website for the Unplugged Retreat based on a Photoshop design comp (a Skillcrush project).
website: https://jessabejar.github.io/unplugged-retreat/
source: https://github.com/JessAbejar/unplugged-retreat
---
## Creating a Better Web Development Process

As the final project for Skillcrush's Coding Responsive Websites course, the task was to develop a responsive website based on the designs provided by a group of Photoshop files, which included images, fonts, colors, icons, and text content.

While this was an opportunity to practice my development skills in responsive design, especially with Flexbox, I wanted to take this opportunity to rethink my own web development process. I wanted a much more systematic process of developing websites, making sure that there was an organized way of writing initial code so that few revisions are made during the process, but if changes were necessary then there was a quicker and smoother process for implementing them. I knew I also wanted to include web accessibility and that functionality should be separate from styling, ensuring that the sites were accessible as possible.

I found it necessary to prepare and examine the files thoroughly, identifying key patterns in how content was presented, laid out, and styled. This also helped determine the role of each element and identify any landmarks. This would be particularly useful in coding the site in HTML only, a format that could easily assess if the website met basic web accessibility standards (I aimed for at least WCAG 2.0 Level A compliance).

Styling was also done systematically. Previously I had styled elements individually, finding only patterns in recurring elements like text headings. However, since my aim was to create a smoother development process, I decided to put the majority of my work in first identifying patterns. I sought out finding reusable UI patterns in layout, text, and styling. Finding patterns in layout meant creating less < div > elements and targeting similar elements using a class name. Understanding text patterns meant creating a new system for styling heading text that never compromised accessibility. Lastly, remaining styles were applied to individual elements; by that time, most styles had already been applied, leaving only unique properties of each element to be added.

This entire process helped not only in writing and styling content but also in other aspects. The process anticipated possible challenges before any code was written, and whenever a change needed to be made mid-process, the elements or actual code affected were only a few. It was a rather painless process to debug any issues. Using both Git and GitHub assisted with addressing issues and tracking progress and provided an outlet to explain why certain decisions were made, which unexpectedly helped me to understand my own coding patterns and development choices. A final QA check included validating code; checking for any other accessibility issues; testing across browsers, device sizes, and assistive devices; and auditing performance.

In the end, not only was I proud of the final product but I was extremely proud of the process that I had developed. I hope to use the process of building this project as the framework for how I complete all my processes in the future.

## Project Details

**Title**: Unplugged Retreat

**Description:** Developed a website for the Unplugged Retreat based on a Photoshop design comp (a Skillcrush project).

**Main Skills:** Adobe Photoshop, HTML5, CSS3, Responsive Web Design, Media Queries, Flexbox

**Other Skills & Tools:** Visual Studio Code, HTML5 Boilerplate, Google DevTools, Git, GitHub, W3C HTML & CSS Validation, ChromeVox, VoiceOver, WAVE Accessibility Checker, AChecker, Lighthouse

## Pre-Planning: HTML

After printing out the design comps, I identified the different parts of each page, dividing the website into components based on the content. I divided each page into a header, a main section, and a footer, with each of these sections broken down further into sub-sections. Each sub-section component was then broken down further into elements. I also took this opportunity to assign most of the components and elements a class or ID, to be used for CSS.

### * Example: Header Component

For this project, the header was divided into a logo element and a navigation element. Navigation was further broken down into an unordered list with each link being a list item.

After identifying each element, I started comparing the layouts of each page across the different device sizes, in this case - mobile, tablet, and desktop layouts. This would later help in determining how to write media queries for each element, and because of that, it confirmed which elements should be grouped together.

### * Example: Services Component

The services component was one section that changed the most across browser sizes. In the mobile version it starts off as elements in a single column, moving to two columns in the tablet version, and three in the desktop version. Keeping this in mind, I had originally grouped the services elements separately and in its own single container; however, I later “ungrouped” them and made the entire services section component itself flexible, allowing for the heading to remain at a 100% width while allowing for the single service elements to fluidly change in width, and subsequently, its layout across browsers. Even with this minor change during the process, pre-planning had allowed me to easily identify it and helped remove unnecessary extraneous code in the process. 

## Coding the HTML

So after planning each page’s content and layout by pen and paper, the pages were then coded. The HTML5 Boilerplate was used to provide a framework for the website files. HTML was implemented first, using semantic HTML to ensure readability and accessibility. Comments were also included to separate and easily identify elements and components.

HTML was tested for errors using the Nu Html Checker. The site was also tested for accessibility using the ChromeVox and VoiceOver screenreaders as well as tested for keyboard accessibility manually. The website was viewed with HTML only to ensure that the content was still presented logically even without styling, allowing for users with limited or slow Internet to be able to access, navigate, and understand the content of the site.

Each page of the Unplugged Retreat website in the browser, HTML only without CSS styling.

### * Semantic HTML in Headings

Making sure that the content appeared in a logical manner was of utmost importance. As such, heading levels were used for function rather than for styling and were determined by order and context. As we will later see in the CSS - Text Styling section of this article, a styled heading class was created to match heading text similar stylings. In some instances, two headings could have the same styles in the design comp but were determined to be at different levels so that assistive technology can understand the information in a logical manner. On the front page, the aside or complementary component had two headings one reading "Want to join the next retreat?" and "Find out more". They both had the same stylings and could have been in the same heading level. But in the context of the *entire* page, it made more sense for the former heading to be at <h2> and the latter to be at <h3> to connect the content together.

### GitHub Flow

The GitHub Flow is a process I use even as a single developer. A master branch is created at the lowest level (boilerplate with pages). Development takes place in a separate branch that is tracked on GitHub (one branch for HTML, a new one for CSS, plus a few other branches include clean-up and one for final features). The branch is then merged using a Pull Request, allowing me to easily compare changes and write comments and notes to myself to check for better solutions, to clean up blocks of code, to remind to test for accessibility, etc. Once approved, the branch is pulled into the remote master branch. The remote master is then fetched and merged into the local master branch. A pull request is usually made at each major feature, in this instance, one after all the HTML is written, one after all the CSS.

## Pre-Planning: CSS

The CSS is then planned out. The major part of determining how to style each component and element consists of identifying patterns. While I also identify each element’s individual style including flexible layout, font, color, and other features, patterns are determined first before code is written. Single patterns are given a class name for higher CSS specificity and to not affect semantic HTML and content logic. These patterns are then compiled into a library.

### Layout

The website was designed to have a responsive layout. The first part was determining which section components were flexible, meaning which had children whose width was fluid and whose layout and placement changed at certain breakpoints. The second step was to then determine the behavior of the child elements, ie: going from full-width (arranged in a single column) to half-width (arranged in two columns) or even one-third-width (arranged in three columns). Elements that exhibited similar behavior at certain breakpoints were given the same class name rather than simply assigning these properties and values to the element itself.

### * Challenge: Margins and Padding

One of the challenges I faced was not considering margins and padding with the layout. I didn't notice this until after all styles were added and had imagined this to be a difficult process. But I approached this challenge in the same manner - looking at each element individually and then identifying any patterns. For the most part, most elements with the same flexbox grid behaviors also had the same margin and padding, so these values were added to the styling of that class. Elements with completely different margin and padding values had their values added specifically to those elements using ID names and other selectors of higher specificity.

### Text Stylings

Determining text stylings was also a tedious process that involved identifying each text element’s styling including font-family, font-size, line-heighting, font-weight, text-decoration, text-transform, and text-align. These properties were also identified across each media query breakpoint.

Patterns were then identified based on these properties. After grouping the elements and defining a root font-size, the font-sizes of each group were converted into rem. Then any repeating sizes (based on rem) from one breakpoint to another were determined; this was to ensure that code did not have to repeat if it was not needed.

Spreadsheets grouping, sorting, and identifying text elements with similar property patterns.

### * Example: Heading Text Styles

As mentioned earlier, heading level was determined by its order in presenting content logically and was separate from styling. While many elements had similar levels, they had different styling, and while their levels could have changed to keep styling grouped with their HTML levels, this would not present the content in a logical order. So heading styles were identified by the class names “heading-lg”, “heading-md-lg”, "heading-md," and “heading-sm." "Heading-md-lg" was added later as a group of headings became larger than similar headings at larger breakpoints.

### Individual Styles

Individual styles were then determined last, this included properties and values of background images, forms, icons, maps, and definition lists.

## Coding the CSS

CSS was coded after each pre-planned section. This process rather than coding all CSS together was decided as it would be easier to maintain, troubleshoot, and track issues if necessary.

Layout was coded first, starting mobile-first and then adding appropriate media queries. The site was quickly viewed using Chrome DevTools to test its behavior across browser sizes and devices.

Text styles were then added, followed by individual stylings. As mentioned earlier, margins and paddings were later added as they were initially left out.

## QA