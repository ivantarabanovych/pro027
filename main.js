function randomReject() {
    return new Promise((resolve, reject) => {
        const randomTime = Math.floor(Math.random() * 5000) + 1000; 
        const shouldResolve = Math.random() > 0.5; 

        setTimeout(() => {
            if (shouldResolve) {
                const randomNumber = Math.floor(Math.random() * 100); 
                resolve(randomNumber); 
            } else {
                reject(new Error("Виникла помилка")); 
            }
        }, randomTime);
    });
}

randomReject()
    .then((result) => {
        console.log(`Обіцянка виконалася з результатом: ${result}`);
    })
    .catch((error) => {
        console.error(`Обіцянка відхилена: ${error.message}`);
    });