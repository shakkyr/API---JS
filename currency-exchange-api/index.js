const select = document.querySelectorAll('select'),
      input = document.querySelectorAll('input'),
      API_URL = 'http://api.exchangeratesapi.io/v1/latest?access_key=91654c7442712d72e54d27b93ad207f7';
      let html = '';

async function currency() {
    const res = await (await fetch(API_URL)).json();
    // console.log(res.rates);
    const arrKeys = Object.keys(res.rates);
    const rates = res.rates;
    console.log(rates);
    arrKeys.map( item => {
        return html += `<option value=${item}>${item}</option>`
    })
    console.log(html);
    for ( let i=0 ; i<select.length; i++){
        select[i].innerHTML = html;
    }

    function convert (i,j) {
        input[i].value = input[j].value * rates[select[i].value] / rates[select[j].value];
    }

    input[0].addEventListener('keyup', ()=>convert(1,0));

    input[1].addEventListener('keyup', ()=>convert(0,1));
    
    select[0].addEventListener('change', ()=>convert(1,0));
    
    select[1].addEventListener('change', ()=>convert(0,1));
        
    
    //! ======================== long ===========================
    // input[0].addEventListener('keyup', ()=>{
    //     input[1].value = input[0].value * rates[select[1].value] / rates[select[0].value];
    // })
    // input[1].addEventListener('keyup', ()=>{
    //     input[0].value = input[1].value * rates[select[0].value] / rates[select[1].value];
    // })
    // select[0].addEventListener('change', ()=>{
    //     input[1].value = input[0].value * rates[select[1].value] / rates[select[0].value];
    // })
    // select[1].addEventListener('change', ()=>{
    //     input[0].value = input[1].value * rates[select[0].value] / rates[select[1].value];
    // })
};
currency();