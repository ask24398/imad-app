//counter code

var button = document.getElementById('counter');

button.onclick = function () {

    //create request obj
    var request = new XMLHttpRequest();
    
    //capture the response and store in variable
    request.onreadystatechange = function () 
    {
        if (request.readyState === XMLHttpRequest.DONE )
        {
            //take action
            if (request.status === 200)
            {
                var counter = request.reponseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
                
            }
        }
        
    };
    //make the request
    request.open('GET', 'http://kulkarniakhilesh98.imad.hasura-app.io/counter', true);
    request.send(null);
    
    
    
};