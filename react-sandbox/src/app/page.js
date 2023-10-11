"use client"
import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import MyButton from './components/atoms/MyButton'
import SearchInput from './components/molecules/SearchInput'


export default function Home() { // parent
  function setStateClickHandler (e) {
    console.log(e);
  }
  function searchClickHandler (e) {
    console.log(e);
  }
  return (
    <main className={styles.main}>
      <h1>Welcome to my app</h1>
      <div className="search-input-wrapper">
        <SearchInput 
          title="SEARCH"
          searchClickHandler={searchClickHandler}
          buttonText="GO"
        />
        <div style={{height: "80px"}}></div> 
        {/* try to avoid inline styling */}
        <SearchInput 
          title="Newsletter"
          searchClickHandler={searchClickHandler}
          buttonText="Sign-Up"
        />
      </div>
      
      <MyButton 
        clickHandler={setStateClickHandler}
        buttonText={"Set State"}
      />
    </main>
  )
}

