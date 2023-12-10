
var counter = 0,
        counterSpan = document.getElementById('counter');

    document.getElementById('my-next').addEventListener('click', function () {
        counterSpan.innerHTML = ++counter;
    });
    
        document.getElementById('my-pre').addEventListener('click', function () {
          if (counter > 0) {
            counterSpan.innerHTML = --counter;
        }        });

