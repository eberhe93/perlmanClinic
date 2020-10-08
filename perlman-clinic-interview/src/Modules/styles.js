import {colors} from './colors'

export const styles = {
    squareButtonContainer: {
        width: '75%',
        height: 500,
        justifyContent: 'space-around',
        display: 'flex',
        alignItems: 'center',
        margin: '0 auto'
    },
    squareButtonHref: {
        height: '55%', width: '30%', border: '2px black solid', textDecoration:'none'
    },
    squareButtonWidth: {
        height: '100%', 
        width: '100%'
    },
    contactInformationContainer: {
        height:'100%', display:'flex', alignItems:'center', justifyContent:'center'
    },
    contactInformationHref: {
        textDecoration:'none'
    },
    contactFormContainer: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    contactInputMarginTop: {
        marginTop: 50 
    },
    contactMessageMargin: {
        marginTop: 50, marginBottom: 10
    },
    greenBorder: {
        border: '1px green solid'  
    },
    contactGenderMargin: {
        marginTop: 10, marginBottom: 20
    },
    inputErrorMessageText: {
        color: colors.red
    },
    navbarLogo: {
        width: 175
    },
    optionsBannerContainer: {
        backgroundColor: 'black', width: '100%', height: 200
    },
    optionsBannerInnerContainer: {
        display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start'
    },
    bannerh1: {
        color: colors.white, justifyContent: 'flex-start'
    },
    bannerParagraph: {
        color: colors.white, width: '50%', margin: '0 auto' 
    },
    contactScreenBorder: {
        width: '50%', border: '1px black solid'
    },
    contactFormOuterContainer: {
    width: '50%', border: '1px black solid', padding:20 
    },
    contactScreenContainer: {
        backgroundColor: 'black', width: '100%', height: 500
    },
    bottomMargin100: {
        marginBottom:100 
    },
    flexRowContainer: {
        display: 'flex', flexDirection: 'row' 
    },
    greenHeaderText: {
        color: colors.green
    }
}
