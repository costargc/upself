var fs = require('fs');

datavector = ["ai","botprofile","computers","conversations","emotion","food","gossip","greetings","health","history","humor","literature","money","movies","politics","psychology","science","sports","trivia"];
// datavector = ["computers"];


for (var j = 0; j < datavector.length; j++) {
    select = datavector[j];

    var rawdata = fs.readFileSync('./controller/data/english/raw/' + select + '.yml');

    read = false;
    categories = false;
    var data_categories = [];
    var data_user_input = [];
    var data_response = [];
    var file = [];
    var countinput = 0;
    var countresp = 0;

    stringdata = rawdata.toString();
    while (stringdata.indexOf('\"') > -1) {
        stringdata = stringdata.replace('\"', "'");
    }

    stringdata.split('\n').forEach(function (line, index) {


        if (line.indexOf("conversations:") > -1) {
            console.log(line);
            categories = false;
            read = true;
        }

        if (line.indexOf("categories:") > -1) {
            console.log(line);
            categories = true;
            read = false;
        }

        if (read == false && categories == true &&  line.indexOf("categories:") == -1 && line.indexOf("conversations:") == -1) {
            line = line.replace("- ", "");
            line = line.replace("\r", "");
            line = line.replace('\"', "");
            data_categories.push(line);
        }

        // "user_input": "- - ",
        // "response": "  - ",
        if (read == true && categories == false && line.indexOf("categories:") == -1 && line.indexOf("conversations:") == -1 && line.indexOf("- - ") > -1) {
            line = line.replace("- - ", "");
            line = line.replace("\r", "");
            data_user_input.push(line);
            oldinput = line;
            countinput++;
        }

        if (read == true && categories == false && line.indexOf("categories:") == -1 && line.indexOf("conversations:") == -1 && line.indexOf("  - ") > -1) {
            line = line.replace("  - ", "");
            line = line.replace("\r", "");
            data_response.push(line);
            countresp++;
        }

        if (countresp > countinput) {
            data_user_input.push(oldinput);
            countinput++;
        }

    })

    results = [];
    for (i = 0; i < data_response.length; i++) {

        var data = {
            user_input: data_user_input[i],
            response: data_response[i],
            categories: data_categories
        };
        results.push(data);
    }

    console.log(results.length);
    json_results = {
        conversations: results
    }

    fs.writeFile("./controller/data/english/json/" + select + ".json", JSON.stringify(json_results), function (err) {
        if (err) {
            console.log(err);
        }
    })

}