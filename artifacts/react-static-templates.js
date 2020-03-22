

import React from 'react'
import universal, { setHasBabelPlugin } from '/Users/macbook/Desktop/portfolio/node_modules/react-universal-component/dist/index.js'

setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
  ignoreBabelRename: true
}

const t_0 = universal(import('/Users/macbook/Desktop/portfolio/src/pages/404.js'), universalOptions)
      t_0.template = '/Users/macbook/Desktop/portfolio/src/pages/404.js'
      
const t_1 = universal(import('/Users/macbook/Desktop/portfolio/src/pages/about.js'), universalOptions)
      t_1.template = '/Users/macbook/Desktop/portfolio/src/pages/about.js'
      
const t_2 = universal(import('/Users/macbook/Desktop/portfolio/src/pages/index.js'), universalOptions)
      t_2.template = '/Users/macbook/Desktop/portfolio/src/pages/index.js'
      
const t_3 = universal(import('/Users/macbook/Desktop/portfolio/src/pages/projects.js'), universalOptions)
      t_3.template = '/Users/macbook/Desktop/portfolio/src/pages/projects.js'
      

// Template Map
export default {
  '/Users/macbook/Desktop/portfolio/src/pages/404.js': t_0,
'/Users/macbook/Desktop/portfolio/src/pages/about.js': t_1,
'/Users/macbook/Desktop/portfolio/src/pages/index.js': t_2,
'/Users/macbook/Desktop/portfolio/src/pages/projects.js': t_3
}
// Not Found Template
export const notFoundTemplate = "/Users/macbook/Desktop/portfolio/src/pages/404.js"

