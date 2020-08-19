// example theme file
import { swiss } from '@theme-ui/presets'

export default {
    ...swiss,    
    //text,background,primary,secondary,highlight,purple,muted,gray
    colors: {
        ...swiss.colors,
        background: '#FEFEFE',
        primary: '#FF4019',
        secondary: '#00768E'
    }

}