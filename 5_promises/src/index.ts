

const function1: () => Promise<any> = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Success!");
        }, 2000);
    });
}

function1().then(result => {
    console.log(result);
}).catch(error => {
    console.error(error);
});


const function2 = async () => {
    try {
        const result = await function1();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

const x: Promise<any> = function1();
const y: Promise<void> = function2();