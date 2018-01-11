# W95_Slider
Windows 95 style slider

This project is a javascript dynamic slider in windows 95 style. </br>

![Imgur](https://i.imgur.com/yoZQGct.jpg)

### Using the code without w95.css styling

Change ('story_block') on line 30 inside slider95.js to the div you want to use the array data

and inside the for loop on every getElementbyID

```
document.getElementById('story_block').className;

document.getElementById('story_block').innerHTML

```

### Add this function in your Html tag for looping through the array data

```
onClick="selectCourse(1) // for forward 

onClick="selectCourse(0) // for back
```
Like this

![Imgur](https://i.imgur.com/WrOr9Rd.jpg)

### Adding content 

Inside the w95.js file add content in var textContent

example

```
var textsContent = [
        '<h1>Slider item 1</h1>' +
        '<p>Content content for slider item 1 </p>',

        '<h1>Slider item 2</h1>' +
        '<p>Content content for slider item 2 </p>'
    ];
```
![Imgur](https://i.imgur.com/ofK2Gp6.jpg)



### Live version

[live](http://i334350.iris.fhict.nl/w95_slider/)
