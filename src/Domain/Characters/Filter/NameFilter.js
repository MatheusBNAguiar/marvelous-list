/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { css, jsx } from '@emotion/core'
import { appColors } from 'Shared/style/colors'
const selectOptions = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const filterContainer = css`
    padding: 10px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`

const input = css`
    padding: 10px;
    margin: 0 5px;
    border: 1px solid ${appColors.primary};
    border-radius: 10px;
    font-size: 14px;
`

export const CharacterNameFilter = (
  {
    inputName = '',
    onInputChange = x => x,
    onSelectChange = x => x
  }
) => {
  return (
    <div css={filterContainer}>
      <label htmlFor='character-name'>You can filter by character name </label>
      <input id='character-name' css={input} placeholder='Ex: Spider' onChange={onInputChange} value={inputName} />
      <label htmlFor='character-first-letter'> or search by its first letter</label>
      <select id='character-first-letter' css={input} name='select' placeholder='First letter' onChange={onSelectChange}>
        {selectOptions.map(letter => <option value={letter} key={letter}>{letter}</option>)}
      </select>
    </div>
  )
}
