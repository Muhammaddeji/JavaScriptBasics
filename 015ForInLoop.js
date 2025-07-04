
// if we want to print it one by one, we use a special type of loop which is; for in loop


let alien = {
    name: 'Adedeji',
    tech: '50',
    laptop: {
        cpu: 'i7',
        ram: '4',
        brand: 'HP'
    }
}

for(let key in alien)
{
    console.log(key, alien[key]);
}