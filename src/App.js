import React from 'react'
import { I18n } from 'react-i18next'

import './App.css'

const App = () => (
  <I18n>
    {
      (t, { i18n }) => (
        <div className="App">
          <section className="hero is-info">
            <div className="hero-body has-text-centered">
              <div className="container">
                <h1 className="title">{t('title')}</h1>
                <h2>{t('subtitle')}</h2>
              </div>
            </div>
          </section>

          <div className="language-button-section">
            <span>{t('lang_text')}</span>
            <button className="button" onClick={() => { i18n.changeLanguage('th') }}>{t('lang_th')}</button>
            <button className="button" onClick={() => { i18n.changeLanguage('en') }}>{t('lang_en')}</button>
          </div>

          <div className="container columns">
            <div className="column is-8 is-offset-4">
              <div className="box normal-content">
                <h3 className="title">{t('header')}</h3>
                <p>{t('content')}</p>
              </div>

              <div className="box interpolate-content">
                <p>{t('welcome_message', { name: 'Client'})}</p>
              </div>

            </div>
          </div>
          <footer className="footer">
            <div className="container">
              <div className="content has-text-centered">
                <p>Powered by <a href="https://react.i18next.com/" target="_blank">react-i18next</a> {'&'} Implement by <a href="https://resume-84e5e.firebaseapp.com/" target="_blank">Fook Freeze</a></p>
              </div>
            </div>
          </footer>
        </div>
      )
    }
  </I18n>
)

export default App 
