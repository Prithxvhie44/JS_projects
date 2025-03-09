import express from 'express';

const app = express();
const port =3000;


app.get('/', (req, res) => {
    const d = new Date();
    const day = d.getDay();
    console.log(day);


    let type = 'a weekday';
    let advice = 'Its time to work hard';

    if (day === 0 || day === 6) {
        type = 'a weekend';
        advice = 'Its time to relax';
    }
    res.render('index.ejs', {daytype : type, advice: advice});
        
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});