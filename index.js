function sameLengthLinesInArray(array, what) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (parseInt(array[i]) === what) {
            count++;
        }
    }
    // return true if two sides are matching
    return (count == 2) ? true: false
}

var path = './test.txt';
var fs  = require("fs");
fs.readFile(path, function(err, f){
    var array = f.toString().split('\n');
   	console.log(array)

    var trianglesArray = [];
    var rectanglesArray = [];
    var squaresArray = [];
    var othersArray = [];
    var mutuallyExclusiveSubsets = [];

    for(var i= 0; i < array.length ;i++)
    {
        var item  = array[i];
        var lines =  item.split(',');
        var length = lines.length;

        switch(length)
        {
            case 3 :

            var a = parseInt(lines[0]);
            var b = parseInt(lines[1]);
            var c = parseInt(lines[2]);
            // If length of two sides is greater than one side
            if (((a + b) > c) && ((a + c) > b) && ((b + c) > a)) {
            trianglesArray.push(item); } else { othersArray.push(item);}
            break;

            case 4 :

            var a = parseInt(lines[0]);
            var b = parseInt(lines[1]);
            var c = parseInt(lines[2]);
            var d = parseInt(lines[3]);
            
            if((a === b) && (b === c) && (c === d) && (d === a))
            {
                squaresArray.push(item);
                break;
            }
            else 
            if(((sameLengthLinesInArray(lines, a)) && (sameLengthLinesInArray(lines, b)))
            ||  ((sameLengthLinesInArray(lines, a)) && (sameLengthLinesInArray(lines, c))) 
            ||  ((sameLengthLinesInArray(lines, a)) && (sameLengthLinesInArray(lines, d))) 
            ||  ((sameLengthLinesInArray(lines, b)) && (sameLengthLinesInArray(lines, c))) 
            ||  ((sameLengthLinesInArray(lines, b)) && (sameLengthLinesInArray(lines, d))) 
            ||  ((sameLengthLinesInArray(lines, c)) && (sameLengthLinesInArray(lines, d))) ) 
            {  rectanglesArray.push(item);   } 
            else {
              othersArray.push(item); }
            break;

            default:
            othersArray.push(item);
            break;

        }
    }

    console.log('triangles subsets:');
    console.log(trianglesArray);

    console.log('squares subsets:');
    console.log(squaresArray);
        
    console.log('rectangles subsets:');
    console.log(rectanglesArray);

    console.log('others subsets:');
    console.log(othersArray);

    mutuallyExclusiveSubsets = trianglesArray.concat (squaresArray, rectanglesArray, othersArray);

    console.log('The union of all four mutually Exclusive Subsets Polygons : ');
    console.log(mutuallyExclusiveSubsets);
    console.log('The union Subsets length equal the Orginal Set length: ');
    console.log( (mutuallyExclusiveSubsets.length ==  array.length )? true : false);
});
