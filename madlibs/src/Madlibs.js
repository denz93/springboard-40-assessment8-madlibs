import { useState } from "react"
import { useForm } from "./hooks"
import './Madlibs.css'

const storyTemplate = [
  'There was a {adjective} {noun1} who loved a {color} {noun2}.',
  'A {color} {noun2} was always afraid of the {adjective} {noun1}.',
  'On a {adjective} day, the {noun1} saw a {color} {noun2} passing by.',
  'The {noun1} and the {noun2} shared a {color}, {adjective} moment together.'
];
const defaultFields = {
  noun1: '', 
  noun2: '', 
  adjective: '', 
  color: '', story: 0}

export default function Madlibs() {
  const {register, state, reset} = useForm(defaultFields)
  const [isShowStory, setIsShowStory] = useState(false)
  
  return <div>
    {isShowStory && <>
      <p>{storyTemplate[state.story].replace(
        /\{(\w+)\}/g, 
        (match) => {
          
          return state[match.slice(1, match.length-1)]
        })}</p>
      <button onClick={() => {setIsShowStory(false); reset() }}>Reset</button>
    </>}
    { !isShowStory && <form onSubmit={(event) => {
      event.preventDefault()
      const isValid = event.currentTarget.reportValidity()
      if (!isValid) return
      setIsShowStory(true)

    }}>
      <div className="form-control">
        <label>Noun</label>
        <input {...register('noun1')} required minLength={1} type="text" placeholder="Ex: Apple, table"/>
      </div>
      <div className="form-control">
        <label>Noun 2</label>
        <input {...register('noun2')} required minLength={1} type="text" placeholder="Ex: Apple, table"/>
      </div>
      <div className="form-control">
        <label>Adjective</label>
        <input {...register('adjective')} required minLength={1}  type="text" placeholder="Ex: Nice, tall"/>
      </div>
      <div className="form-control">
        <label>Color</label>
        <input {...register('color')} required minLength={1}  type="text" placeholder="Ex: red, blue"/>
      </div>
      <div className="form-control">
        <label>Story</label>
        <select {...register('story')}>
          {storyTemplate.map((story, index) => <option key={index} value={index}>{story}</option>)}
        </select>
      </div>
      <button type="submit">Get Story</button>
    </form>}
  </div>
}