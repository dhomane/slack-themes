import React, { useState, useEffect } from 'react'
import Checkbox from '../Checkbox'
import Collapse from '../Collapse'
import { Trash } from 'react-feather'
import firebase from 'firebase'

const ColorPicker = ({name,color}) => {
  return (
    <span title={name} className="transition transform border border-gray-300 w-6 h-6 rounded-full inline-block mr-2" style={{ background: color}}>
    </span>
  )
}

const ThemeUpdateItem = ({theme, onDelete, onCheck}) => {

  const initialCategories = [
    { name: 'Dark', value: theme.categories.dark },
    { name: 'Light', value: theme.categories.light },
    { name: 'Red', value: theme.categories.red },
    { name: 'Blue', value: theme.categories.blue, },
    { name: 'Green', value: theme.categories.green },
    { name: 'Purple', value: theme.categories.purple },
    { name: 'Pink', value: theme.categories.pink },
    { name: 'Yellow', value: theme.categories.yellow },
    { name: 'Orange', value: theme.categories.orange },
    { name: 'Brand', value: theme.categories.brand },
    { name: 'Racing', value: theme.categories.racing },
    { name: 'Syntax', value: theme.categories.syntax },
    { name: 'Minimal', value: theme.categories.minimal },
    { name: 'Material', value: theme.categories.material }
  ]

  const [categories, setCategories] = useState(initialCategories)

  const updateCategory = (catIndex) => {
    switch (categories[catIndex].name) {
      case 'Dark':
        firebase.firestore().collection('themes').doc(theme.theme_name).update({ "categories.dark": !categories[catIndex].value })
        break;
      case 'Light':
        firebase.firestore().collection('themes').doc(theme.theme_name).update({ "categories.light": !categories[catIndex].value })
        break;
      case 'Red':
        firebase.firestore().collection('themes').doc(theme.theme_name).update({ "categories.red": !categories[catIndex].value })
        break;
      case 'Blue':
        firebase.firestore().collection('themes').doc(theme.theme_name).update({ "categories.blue": !categories[catIndex].value })
        break;
      case 'Green':
        firebase.firestore().collection('themes').doc(theme.theme_name).update({ "categories.green": !categories[catIndex].value })
        break;
      case 'Purple':
        firebase.firestore().collection('themes').doc(theme.theme_name).update({ "categories.purple": !categories[catIndex].value })
        break;
      case 'Pink':
        firebase.firestore().collection('themes').doc(theme.theme_name).update({ "categories.pink": !categories[catIndex].value })
        break;
      case 'Yellow':
        firebase.firestore().collection('themes').doc(theme.theme_name).update({ "categories.yellow": !categories[catIndex].value })
        break;
      case 'Orange':
        firebase.firestore().collection('themes').doc(theme.theme_name).update({ "categories.orange": !categories[catIndex].value })
        break;
      case 'Brand':
        firebase.firestore().collection('themes').doc(theme.theme_name).update({ "categories.brand": !categories[catIndex].value })
        break;
      case 'Racing':
        firebase.firestore().collection('themes').doc(theme.theme_name).update({ "categories.racing": !categories[catIndex].value })
        break;
      case 'Syntax':
        firebase.firestore().collection('themes').doc(theme.theme_name).update({ "categories.syntax": !categories[catIndex].value })
        break;
      case 'Minimal':
        firebase.firestore().collection('themes').doc(theme.theme_name).update({ "categories.minimal": !categories[catIndex].value })
        break;
      case 'Material':
        firebase.firestore().collection('themes').doc(theme.theme_name).update({ "categories.material": !categories[catIndex].value })
        break;
      default:
        console.log('category does not exist')
    }
    let newArr = [...categories]
    newArr[catIndex].value = !categories[catIndex].value
    setCategories(newArr)
  }

  useEffect(() => {

  }, [categories])

  return (
    <div
      key={theme.theme_name}
      className="rounded-md p-4 border border-gray-200 shadow flex flex-col"
    >
      <div className="flex flex-col w-full mb-2 justify-between">
        <div className="flex flex-row items-center justify-between">
          <div className="inline-flex items-center">
            <span title="theme_name" className="font-bold">{theme.theme_name}</span>
            <span className="text-xs font-semibold ml-2 inline-flex items-center text-gray-500">
              <svg height="16" width="16" className="mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              {theme.likes} {theme.likes === 1 ? 'Like' : 'Likes'}
            </span>
          </div>
          <button
            className="transition transform text-xs bg-gray-100 text-gray-500 rounded-md hover:text-red-500 hover:bg-red-50 inline-flex items-center px-2 h-8 hover:rotate-3 hover:scale-110 focus:outline-none"
            onClick={onDelete}
          >
            <Trash size="16"/>
            <span className="ml-1">Delete</span>
          </button>
        </div>
        <div className="inline-flex mt-4">
          <ColorPicker name={'active_item'} color={theme.active_item}/>
          <ColorPicker name={'active_item_hover'} color={theme.active_item_text}/>
          <ColorPicker name={'active_presence'} color={theme.active_presence}/>
          <ColorPicker name={'column_bg'} color={theme.column_bg}/>
          <ColorPicker name={'hover_item'} color={theme.hover_item}/>
          <ColorPicker name={'mention_badge'} color={theme.mention_badge}/>
          <ColorPicker name={'text_color'} color={theme.text_color}/>
          <ColorPicker name={'top_nav_bg'} color={theme.top_nav_bg}/>
          <ColorPicker name={'top_nav_text'} color={theme.top_nav_text}/>
        </div>
      </div>
      <Collapse label="Edit Categories">
        <div className="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 rounded-md gap-y-1 gap-x-2 mt-2 p-2 bg-gray-100">
          {
            categories.map((item, index) => (
              <div key={item.name}>
                <Checkbox
                  label={item.name}
                  handleClick={() => updateCategory(index)}
                  toggleState={item.value}
                  sm
                />
              </div>
            ))
          }
        </div>
      </Collapse>
    </div>
  )
}

export default ThemeUpdateItem