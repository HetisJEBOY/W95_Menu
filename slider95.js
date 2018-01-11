/**
 * Created by marijn on 10/01/2018.
 */




/* (x) is direction loop for array */
function selectCourse(x) {

    /* store current number of textContent */
    var goToNumber;

    /*This array is dynamic you can make as many slides as you want and use your own styling tags*/
    var textsContent = [
        '<h1>Course 1</h1>' +
        '<p>Content of your first course</p>',

        '<h1>Coure 2</h1>' +
        '<p>Content of your second course.</p>',

        '<h1>Course 3</h1>' +
        '<p>Content of your third course.</p>',

        '<h1>Course 4</h1>' +
        '<p>Content of your fourth course.</p>'
    ];

    /*change 'story_block' in your own id if you dont want to use the current styling the array data wil be placed in there*/
    var selectedCourse = document.getElementById('story_block').className;
    for (let i = 0; i < textsContent.length; i++) {

        var counter = 'current-course'+i;

        if (counter === selectedCourse) {

            if (x === 1) {
                goToNumber = i+1;
                document.getElementById('story_block').innerHTML= textsContent[goToNumber];
                document.getElementById('story_block').className='current-course' + goToNumber;
                /*console.log(goToNumber);*//* log on what number you are */
            }

            if (x === 0) {
                goToNumber = i-1;
                document.getElementById('story_block').innerHTML= textsContent[goToNumber];
                document.getElementById('story_block').className='current-course' + goToNumber;
                /*console.log(goToNumber);*//* log on what number you are */
            }

            if (x === 0 && i === 0) {
                goToNumber = textsContent.length -1;
                document.getElementById('story_block').innerHTML= textsContent[goToNumber];
                document.getElementById('story_block').className='current-course' + goToNumber;
                /*console.log(goToNumber);*//* log on what number you are */
            }


            if (x === 1 && i === textsContent.length -1) {
                goToNumber = i;
                document.getElementById('story_block').innerHTML= textsContent[goToNumber = 0];
                document.getElementById('story_block').className='current-course' + 0;
                /*console.log(goToNumber);*//* log on what number you are */
            }


        }


    }

}