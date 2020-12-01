import React, { useState } from 'react'
import Collapse from '../Collapse'
import { Square, CheckSquare, Trash, Search } from 'react-feather';

const ListItemCheck = ({handleClick, toggleState, label}) => {

  return (
    <button 
      className={`transition flex p-2 justify-between items-center rounded-md ${toggleState ? 'text-gray-900 bg-green-100 hover:bg-green-200' : 'text-gray-500 hover:bg-gray-100'}`}
      onClick={handleClick}
    >
      <span className={`text-sm ${toggleState ? 'font-semibold' : null}`}>{label}</span>
      <div className={toggleState ? 'text-green-500' : 'text-gray-400'}>
        {
          toggleState ? <CheckSquare/> : <Square/>
        }
      </div>
    </button>
  )
}

const ThemeAdmin = ({data}) => {

  const swatchClass = 'transition transform border border-gray-300 w-6 h-6 rounded-full inline-block mr-2 hover:scale-110 hover:shadow-lg'

  const test = () => {
    console.log('sup')
  }

  return (
    <>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {
          data && data.length > 0 ? (
            data.map(theme => (
              <div
                key={theme.theme_name}
                className="rounded-md p-4 border border-gray-200 shadow flex flex-col"
              >
                <div className="flex flex-col w-full mb-2 justify-between">
                  <div className="flex flex-row items-center justify-between">
                    <span title="theme_name" className="font-bold">{theme.theme_name}</span>
                    <button className="transition transform text-xs bg-gray-100 text-gray-500 rounded-md hover:text-red-500 hover:bg-red-50 inline-flex items-center px-2 h-8 hover:rotate-3 hover:scale-110">
                      <Trash size="16"/>
                      <span className="ml-1">Delete</span>
                    </button>
                  </div>
                  <div className="inline-flex mt-4">
                    <span role="button" title="active_item" className={swatchClass} style={{ background: theme.text_color}}></span>
                    <span role="button" title="active_item_hover" className={swatchClass} style={{ background: theme.active_item_hover}}></span>
                    <span role="button" title="active_presence" className={swatchClass} style={{ background: theme.active_presence}}></span>
                    <span role="button" title="column_bg" className={swatchClass} style={{ background: theme.column_bg}}></span>
                    <span role="button" title="hover_item" className={swatchClass} style={{ background: theme.hover_item}}></span>
                    <span role="button" title="mention_badge" className={swatchClass} style={{ background: theme.mention_badge}}></span>
                    <span role="button" title="text_color" className={swatchClass} style={{ background: theme.text_color}}></span>
                    <span role="button" title="top_nav_bg" className={swatchClass} style={{ background: theme.top_nav_bg}}></span>
                    <span role="button" title="top_nav_text" className={swatchClass} style={{ background: theme.top_nav_text}}></span>
                  </div>
                </div>
                <Collapse label="Edit Categories">
                  <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 mt-2">
                    <ListItemCheck
                      label="Dark"
                      handleClick={test}
                      toggleState={theme.categories.dark}
                    />
                    <ListItemCheck
                      label="Light"
                      handleClick={test}
                      toggleState={theme.categories.light}
                    />
                    <ListItemCheck
                      label="Red"
                      handleClick={test}
                      toggleState={theme.categories.red}
                    />
                    <ListItemCheck
                      label="Blue"
                      handleClick={test}
                      toggleState={theme.categories.blue}
                    />
                    <ListItemCheck
                      label="Green"
                      handleClick={test}
                      toggleState={theme.categories.green}
                    />
                    <ListItemCheck
                      label="Purple"
                      handleClick={test}
                      toggleState={theme.categories.purple}
                    />
                    <ListItemCheck
                      label="Yellow"
                      handleClick={test}
                      toggleState={theme.categories.yellow}
                    />
                    <ListItemCheck
                      label="Pink"
                      handleClick={test}
                      toggleState={theme.categories.pink}
                    />
                    <ListItemCheck
                      label="Orange"
                      handleClick={test}
                      toggleState={theme.categories.orange}
                    />
                    <ListItemCheck
                      label="Brand"
                      handleClick={test}
                      toggleState={theme.categories.brand}
                    />
                    <ListItemCheck
                      label="Racing"
                      handleClick={test}
                      toggleState={theme.categories.racing}
                    />
                    <ListItemCheck
                      label="Syntax"
                      handleClick={test}
                      toggleState={theme.categories.syntax}
                    />
                    <ListItemCheck
                      label="Minimal"
                      handleClick={test}
                      toggleState={theme.categories.minimal}
                    />
                    <ListItemCheck
                      label="Material"
                      handleClick={test}
                      toggleState={theme.categories.material}
                    />
                  </div>
                </Collapse>
              </div>
            ))
          )
          :
          (
            <div className="rounded-md text-center bg-gray-100 p-8 mt-4 col-span-2">
              <div className="inline-block p-3 mb-4 bg-gray-200 text-gray-800 rounded-full">
                <Search/>
              </div>
              <h4>No Results</h4>
            </div>
          )
        }
      </div>
    </>
  )
}

export default ThemeAdmin