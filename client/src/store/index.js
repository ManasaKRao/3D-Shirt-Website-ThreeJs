import {proxy} from 'valtio';

const state = proxy ({
    //check are we currently in a homepage or not
    intro : true,

    //default color
    color : '#EFBD48',

    //are we currently displaying the logo on shirt?
    isLogoTexture: true,

    
    isFullTexture : false,

    //initial logo of shirt
    logoDecal : './threejs.png',
    fullDecal : './threejs.png'
});

export default state;
