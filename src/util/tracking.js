import ReactGA from 'react-ga';
import ReactPixel from 'react-facebook-pixel';
import TagManager from 'react-gtm-module';

const options = {
    autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
};

const tagManagerArgs = {
    gtmId: 'GTM-MQGKWKG'
}


ReactPixel.init('413268690097861', options);
ReactGA.initialize('UA-187241314-2');
TagManager.initialize(tagManagerArgs);


export function trackPageEnter() {
    ReactGA.event({
        category: 'User',
        action: "Start the questionnare"
    });
}

export function trackEndOfQuestionnare() {
    ReactGA.event({
        category: 'User',
        action: "End of questionnare"
    });
}

export function trackCalculationStart() {
    ReactGA.event({
        category: 'User',
        action: "Start the calculation for result"
    });
}

export function trackCalculationEnd() {
    ReactGA.event({
        category: 'User',
        action: "End of the calculation for result"
    });
}