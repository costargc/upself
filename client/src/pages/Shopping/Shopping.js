import React, { Component } from "react";

function swagShopConfig() {
    var spread_shop_config = {
        shopName: 'upself-merch',
        locale: 'us_US',
        prefix: 'https://shop.spreadshirt.com',
        baseId: 'myShop'
    };

    return JSON.stringify(spread_shop_config);
}


class Shopping extends Component {
    render() {
        return(
            <div>
                <div id="myShop">
                    <a href="https://shop.spreadshirt.com/upself-merch">upself-merch</a>
                </div>

                {swagShopConfig()}

                <script type="text/javascript"
                    src="https://shop.spreadshirt.com/shopfiles/shopclient/shopclient.nocache.js">
                </script>
            </div>
        ) 
    }
}

export default Shopping;