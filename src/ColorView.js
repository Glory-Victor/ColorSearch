import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Masonry from 'react-masonry-css'

const useStyles = makeStyles({
  colorName: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    paddingLeft: '0.5rem',
    letterSpacing: '-0.02em',
    fontWeight: 900,
    fontSize: 24
  },
  colorCode: {
      float: 'right',
      fontSize: 24,
      paddingRight: '0.5rem'
  },
  masonryGrid: {
    display: 'flex',
    marginLeft: '-20px'
  },
  masonryGridColumn: {
    borderLeft: '20px solid transparent',
    backgroundClip: 'padding-box'
  }
});

const ColorView = (props) => {
  const classes = useStyles();
//   const [hover, onHover] = useState(false);
  const {name='', code='#fff'} = props;

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  }

  return (
    <div>
        {/* <Masonry
          breakpointCols={breakpointColumnsObj}
          className="masonryGrid"
          columnClassName="masonryGridColumn"
          columnAttrs={{ className: 'should be overridden', 'data-test': '', style: { '--test': 'test' }}}
        > */}
            {/* <div onMouseEnter={() => onHover(true)} onMouseLeave={() => onHover(false)} style={{backgroundColor: hover ? code : "#000" }}> */}
            {/* <strong className={classes.colorName} style={{color: hover ? "#fff" : code}}>{name}</strong>
                <span className={classes.colorCode} style={{color: hover ? "#fff" : code}}>{code}</span> */}
            <div style={{backgroundColor: code}}>
                <strong className={classes.colorName}>{name}</strong>
                <span className={classes.colorCode}>{code}</span>
            </div>  
        {/* </Masonry> */}
    </div>
  );
}

export default ColorView;
