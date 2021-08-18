import React, { Component } from 'react'
import './AmazonAdvert.css'

class AmazonAdvert extends Component {
    render() {
        let advert;

        switch (this.props.height) {
            case 600:
                advert = <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=15&p=14&l=ur1&category=amazonhomepage&f=ifr&linkID=1fe6c69be7524c893a2125a59f550fd4&t=immigraters0e-20&tracking_id=immigraters0e-20" width="160" height="600" scrolling="no" border="0" style={{border:'none'}}></iframe>;
                break;
            case 250:
                advert = <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=15&p=12&l=ur1&category=amazonhomepage&f=ifr&linkID=0453023d215e7ac44ddb6ada90baa959&t=immigraters0e-20&tracking_id=immigraters0e-20" width="300" height="250" scrolling="no" border="0" style={{border:'none'}}></iframe>;
                break;
            case 60:
                if (this.props.width == 468)
                    advert = <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=15&p=13&l=ur1&category=amazonhomepage&f=ifr&linkID=c1a35f51d08d198d05dc0dd62fabbc92&t=immigraters0e-20&tracking_id=immigraters0e-20" width="468" height="60" scrolling="no" border="0" style={{border:'none'}}></iframe>;
                else
                    advert = <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=15&p=40&l=ur1&category=amazonhomepage&f=ifr&linkID=597b9fd6f26b8288dd19967aef91eee8&t=immigraters0e-20&tracking_id=immigraters0e-20" width="120" height="60" scrolling="no" border="0" style={{border:'none'}}></iframe>;
                break;
            case 90:
                if (this.props.width == 728)
                    advert = <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=15&p=48&l=ur1&category=amazonhomepage&f=ifr&linkID=94f34a94495ac5dc72955cafc7fb8697&t=immigraters0e-20&tracking_id=immigraters0e-20" width="728" height="90" scrolling="no" border="0" style={{border:'none'}}></iframe>;
                else
                    advert = <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=15&p=20&l=ur1&category=amazonhomepage&f=ifr&linkID=15ffa139e31375c6db2e2fe2a760b107&t=immigraters0e-20&tracking_id=immigraters0e-20" width="120" height="90" scrolling="no" border="0" style={{border:'none'}}></iframe>;
                break;
            case 125:
                advert = <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=15&p=21&l=ur1&category=amazonhomepage&f=ifr&linkID=7423bf3d9b9abfebed389205008465df&t=immigraters0e-20&tracking_id=immigraters0e-20" width="125" height="125" scrolling="no" border="0" style={{border:'none'}}></iframe>;
                break;
        }

        return (
            <div className={(this.props.className ? this.props.className + ' ' : '') + 'amazon-advert-' + this.props.case}>
                {advert}
            </div>
        );
    }
}

export default AmazonAdvert;
