import { check,sleep } from 'k6';
import http from 'k6/http';


export default function(){

    const response = http.get('http://localhost:1234');
    sleep(5);
    
    const payload = {file: 'sample.rtf'}
    const headers = {"Content-Type": 'application/json'};
    const fileRes = http.post('http://localhost:1234', JSON.stringify(payload), {headers});

    // sleep(10);

    console.log(JSON.stringify(fileRes))

    if(fileRes.status !==200 || !fileRes.json('Success')){
        throw new Error('Failed to load file');
    }

    };

