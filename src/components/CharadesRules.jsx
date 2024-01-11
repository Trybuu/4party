import { useState } from 'react'

import classes from './CharadesRules.module.scss'

export default function CharadesRules() {
  const [settings, setSettings] = useState()

  return (
    <div className={classes['charades-rules']}>
      <h1 className={classes['charades-rules__title']}>Ustalcie zasady gry</h1>
      <section className={classes['charades-rules__section']}>
        <form className={classes.form}>
          <h2 className={classes['charades-rules__title']}>Ilość rund</h2>
          <div className={classes.form__section}>
            <label className={classes.form__input}>
              <input type="radio" name="rounds" value="rounds1" />
              <p>1</p>
            </label>

            <label className={classes.form__input}>
              <input type="radio" name="rounds" value="rounds2" />
              <p>2</p>
            </label>

            <label className={classes.form__input}>
              <input type="radio" name="rounds" value="rounds3" />
              <p>3</p>
            </label>

            <label className={classes.form__input}>
              <input type="radio" name="rounds" value="rounds4" />
              <p>4</p>
            </label>

            <label className={classes.form__input}>
              <input type="radio" name="rounds" value="rounds5" />
              <p>5</p>
            </label>
          </div>

          <h2 className={classes['charades-rules__title']}>Czas</h2>
          <div className={classes.form__section}>
            <label className={classes.form__input}>
              <input type="radio" name="time" value="time1" />
              <p>30s</p>
            </label>

            <label className={classes.form__input}>
              <input type="radio" name="time" value="time2" />
              <p>60s</p>
            </label>

            <label className={classes.form__input}>
              <input type="radio" name="time" value="time3" />
              <p>90s</p>
            </label>

            <label className={classes.form__input}>
              <input type="radio" name="time" value="time4" />
              <p>120s</p>
            </label>
          </div>

          <h2 className={classes['charades-rules__title']}>Rodzaj pytań</h2>
          <div className={classes.form__section}>
            <label className={classes.form__input}>
              <input type="radio" name="gameMode" value="gameMode1" />
              <p>Normalne</p>
            </label>

            <label className={classes.form__input}>
              <input type="radio" name="gameMode" value="gameMode2" />
              <p>Dla dorosłych</p>
            </label>
          </div>

          <button type="submit">Zatwierdź zasady</button>
        </form>
      </section>
    </div>
  )
}
