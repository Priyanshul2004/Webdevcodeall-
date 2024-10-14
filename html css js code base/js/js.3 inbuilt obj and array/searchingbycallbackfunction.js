let cources = [
    { no:2,naam:'sahil'},
    {no:4,naam:'tiwari'}
]
console.log(cources);

let course = cources.find(function(course)
    {
        return course.naam === 'tiwari';
    })
console.log(course);

let core = cources.find(core => core.naam === 'king');
console.log(core);