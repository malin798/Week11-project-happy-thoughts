import React, { useEffect, useState } from "react";
import { OneMessage } from "./OneMessage";

export const AllMessages = () => {

  const [allMessages, setAllMessages] = useState([]);

  useEffect(() => {

    fetch("https://technigo-thoughts.herokuapp.com/", {
      method: 'GET'
    })

    .then(response => response.json()) 
    .then(messages => setAllMessages(messages));
  }, []);

  return (
  <section className="all-messages">
    {allMessages.map(message => { 
            
      return (
        <OneMessage message={message}/>
      )
    })}
  </section>
  )}
