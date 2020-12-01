import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchBar from "material-ui-search-bar";
import colorObj from './ColorConstants';
import Masonry from 'react-masonry-css';
import "./App.css";

const useStyles = makeStyles({
  search: {
    margin: '0 auto',
  },
  content: {
      textAlign: 'center',
      fontFamily: 'metropolis',
      fontSize: '30px',
      color: '#FF0000',
      display: 'block',
      marginTop: '30px'
  },
  colorBox: {
    width:200,
    height: 200,
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: '24px'
  }
});

const App = () => {
  const [query, setQuery] = useState('');
  const classes = useStyles();

  const cancelSearch = () => {
    setQuery('');
  }

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  }
  
  // Iterating through color object from colorConstants file
  const colorItems = !query && Object.keys(colorObj).map(color => {
  return <p className={classes.colorBox} id={colorObj[color]} style={{backgroundColor: colorObj[color], color: colorObj[color] === '#000000' ? '#fff' : '#000'}}>{color}</p>
  });
  
  const filteredColorItems = query && Object.keys(colorObj).map((color) => {
    if (color.includes(query)) {
      return <p className={classes.colorBox} id={colorObj[color]} style={{backgroundColor: colorObj[color], color: colorObj[color] === '#000000' ? '#fff' : '#000'}}>{color}</p>
    }
  })

  return (
    <div>
      <title className={classes.content}>Color Search</title>
      {/* Ref: https://www.npmjs.com/package/material-ui-search-bar */}
      <SearchBar
        className={classes.search}
        value={query}
        onChange={(value) => setQuery(value)}
        onCancelSearch={() => cancelSearch()}
      />
      {/* Ref: https://www.npmjs.com/package/react-masonry-css */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {query ? filteredColorItems : colorItems}
      </Masonry>
    </div>
  );
}

export default App;
