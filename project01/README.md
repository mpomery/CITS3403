# Project 1

Website can be found at:
	http://student.csse.uwa.edu.au/~21130887/CITS3403/project01/

## Contents

* Contents
* Specifications
* Pages
* Form Controls
* CSS
* Javascript
* DHTML
* Things Used

## Specifications

**The following is a list taken from the [project webpage](http://undergraduate.csse.uwa.edu.au/units/CITS3403/index.php?fname=project-1&project=yes)**

> 1. A total of at least 5 pages to meet your site purpose.
2. Your website must support Internet Explorer, Firefox and Opera, under the version used in our Lab Linux system. You code must be CSS2.1 and XHTML1.1 Strict or HTML5 valid. Display the validation logo and the link to the validation results. CSS3 is required. Note that validation errors on CSS3 properties will not affect your mark. You can still display the CSS2.1 valid logo.
3. Site Structure
    1. The site should implement a mixed structure, main pages to be linked in a hiearachical structure
    2. Pages naturally forms a linear chain should be connected using a linear structure.
4. Navigational aids
    1. Site Map
    2. Navigation bars on every page
5. Aesthetics
    1. The site should have a consistent look and feel (make sure you use external style sheets for formatting)
    2. While maintain a sense of belonging to the site, each page has to be different to show locality so readers know they are on the same site but browsing different pages (make sure you use inline and embedded styles)
    3. The design theme should agree with the site purpose and meet the needs and taste of potential audience
    4. Most importantly, make sure the foreground and background are contrasting well and good typography is used
    5. Sensible use of images and other multi-media formats.
6. Hyperlinks
    1. Use relative URLs to ensure portability
    2. Make sure no broken images or broken links
7. Appropriate use the following techniques and provide a README file (can be in plain text) to document the rationale and how you used them. This README file should also help the project marker to locate which pages contain the required technique.
    * Form Controls
    * CSS
    * Client-side Programming: Javascript - Basic form validation
    * Demonstrating the use of DHTML (A combination of CSS, JavaScript, DOM and Event Models)
8. Page Layout needs to be done by CSS positioning, no layout tables are allowed.
9. Use of free images, free website template, free video clips and multimedia files obtained from the Web is permitted, but you will need to provide a separate Reference Page for the site (in addition to the 5+ required pages). Copyright materials must get permission before use.

**A summary of the above list:**

> 1. 5 pages minimum
2. HTML5 strict and CSS2.1 Valid
3. Site Structure - Linear
4. Navigation on every page.
    * And a site map
5. Consistent look and feel
    * Something to show pages are different
    * Suitable theme
    * Good foreground/background
    * Sensible use of media
6. Relative Links. None Dead.
7. Documentation in README of the following:
    * Form Controls
    * CSS
    * Javascript
    * DHTML
8. Page layouts in CSS ONLY
9. References for all free media on a webpage

**Tickboxes:**
> 1. Done
2. Yep
3. Done
4. Done
5. Done. Neaten up CSS though
6. Done
7. Done
8. Done.
9. Done

## Pages

* index.html - Login Page
* home.html - Main Page
* jobs_list.html - Shows Jobs
* jobs_search.html - Search Jobs
* details.html - Shows details for a job
* users_list.html - List users
* users_search.html - Search Users

Pages above HAVE been tested as HTML5 strict and CSS2.1 Valid

All pages (excluding the login page) contain the same navigation menu

Pages are mostly linear, however it makes sense to go from jobs to users and vice versa

All pages use the same structure and CSS stylesheets. (Also, black and white is always a good idea)

Links HAVE been tested to make sure they are noty dead. And they are all relative.

CSS has been used for page layouts. Excluding places where tables make sense. Like tabulated data.

A reference page DOES exists at about.html

## Form Controls

* Login Form (index.html)
* Search Jobs (jobs_search.html)
* Search Users (users_search.html)
* Add Users (users_add.html)

Not Made:
* Add Jobs

## CSS

File: css/css.css

CSS was written as SCSS (SASS) which is essentially CSS with the ability to lay 
it out in several files before combining it into one. It also has neat features making
it easy to see what falls below classes in the hierarchy.

## Javascript

File: js/ui.js

Javascript is used to generate and create the links for the HTML and CSS Validation icons.
It also allows the user to switch between Home, Tickets and Logout in the menu bar on the left.

## DHTML

Dynamic HTML (DHTML) is used to change the data that is shown in the left menu.
Upon clicking one of the links up the top of the menu, the menu changes to show the new tab.
JS was also used to generate these links, rather than hard coding them, as in a template based website,
new links can be added without needing to update the Javascript.

## Things Used

* SASS
  * For writing the CSS
* csscss
  * For helping simplify the CSS
* http://www.styleneat.com/
  * Cleaning up the CSS post everything
* Notepad++
  * As the IDE
* http://www.markdownviewer.com/
  * To help format this readme