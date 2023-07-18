const myfunction = () => {
    try {
        // throw new Error('Something went wrong');

        setTimeout(function() {
            console.log('Running after 2 sec.');
        }, 2000);


    }catch(errors) {
        console.log(errors);
    }finally {
        console.log('Running Now');
    }

    console.log('This will run first');
}

myfunction();
