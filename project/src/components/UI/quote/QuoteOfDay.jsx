import React, { useEffect, useState } from 'react';
import cl from './QuoteOfDay.module.scss'

const QuoteOfDay = ({create}) => {
    let [api, setApi] = useState('https://favqs.com/api/qotd');
    let [quote, setQuote] = useState('');
    let [autor, setAutor] = useState('');

    useEffect(()=>{
        async function fetchData(){
          try{
            const response = await fetch(api);
            const responseJson = await response.json();
            setQuote(responseJson.quote.body)
            setAutor(responseJson.quote.author)
          } catch(err) {
            create(true)
          }
        }
    
        fetchData();
      }, [])

    return (
        <div className={cl.quote}>
              <div className={cl.quote__title}>
              Цитата дня:
              </div>
              <i className={['fa-solid', 'fa-quote-left', cl.quote__icon].join(' ')}></i>
              <div className={cl.quote__text}>
                {quote}
              </div>
              <div className={cl.quote__autor}>
                -{autor}
              </div>
        </div> 
    );
};

export default QuoteOfDay;